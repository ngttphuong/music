package com.collection.music.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.method.annotation.MvcUriComponentsBuilder;

import com.collection.music.dto.UserDto;
import com.collection.music.controller.FilesStorageController;
import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.dto.ProfileRegistDto;
import com.collection.music.mapper.AccountMapper;
import com.collection.music.model.User;
import com.collection.music.repository.AccountRepository;
import com.collection.music.service.IAccountService;
import com.collection.music.service.exception.ElementNotFoundException;

@Service
@Transactional
public class AccountService implements IAccountService {
	@Autowired
	private AccountRepository accountRepository;
	@Autowired
	private AccountMapper mapper;
	@Autowired private PasswordEncoder passwordEncoder;
	@Value("${app.upload-folder-images}")
	private String UPLOADED_FOLDER_IMAGES;
	@Override
	public UserDto findById(long id) {
		User user = accountRepository.findById(id).orElseThrow(NoSuchElementException::new);
//		String url = MvcUriComponentsBuilder.fromMethodName(FilesStorageController.class, "getFile", user.getAvatar()).build().toString();
		UserDto userDto = mapper.asUserDto(user);
//		userDto.setAvatar(url);
		return userDto ;
	}

	@Override
	public long upsertProfile(long id, ProfileRegistDto dto) {
		final Optional<User> saved = accountRepository.findById(id);

		if (saved.isPresent()) {
			try {
				Path pathImage = Paths.get(UPLOADED_FOLDER_IMAGES + dto.getAvatar().getOriginalFilename());
				 byte[] bytes = dto.getAvatar().getBytes();
				 Files.write(pathImage, bytes);
				 final User entity = saved.get();
				 entity.setAddress(dto.getAddress());
				 entity.setAvatar(dto.getAvatar().getOriginalFilename());
				 entity.setPhoneNumber(dto.getPhoneNumber());
				 entity.setUsername(dto.getUsername());
				 entity.setGender(dto.getGender());
				 accountRepository.save(entity);
			} catch (IOException e) {
				throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
			}
		} else {
			throw new ElementNotFoundException(User.class, id);
		}
		return id;
	}

	@Override
	public long save(@Valid AccountRegistrationDto dto) {
		User account = mapper.asUser(dto);
		 String hashedPassword = passwordEncoder.encode(dto.getPassword());
		 account.setPassword(hashedPassword);
		accountRepository.save(account);
		return account.getUserId();
	}
}
