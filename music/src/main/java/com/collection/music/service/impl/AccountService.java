package com.collection.music.service.impl;

import java.util.NoSuchElementException;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.collection.music.dto.UserDto;
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

	@Override
	public UserDto findById(long id) {
		User user = accountRepository.findById(id).orElseThrow(NoSuchElementException::new);
		return mapper.asUserDto(user);
	}

	@Override
	public long upsertProfile(long id, ProfileRegistDto dto) {
		final Optional<User> saved = accountRepository.findById(id);

		if (saved.isPresent()) {
			final User entity = saved.get();
			entity.setAddress(dto.getAddress());
			entity.setAvatar(dto.getAvatar());
			entity.setEmail(dto.getEmail());
			entity.setPhoneNumber(dto.getPhoneNumber());
			entity.setUsername(dto.getUsername());
			entity.setGender(dto.getGender());
			accountRepository.save(entity);
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
