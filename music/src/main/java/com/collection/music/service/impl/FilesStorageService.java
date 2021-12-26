package com.collection.music.service.impl;

import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.collection.music.model.Song;
import com.collection.music.model.User;
import com.collection.music.repository.SongRepository;
import com.collection.music.service.IFilesStorageService;

@Service
public class FilesStorageService implements IFilesStorageService {
	@Value("${app.upload-folder}")
	private String UPLOADED_FOLDER;
	@Value("upload-folder-images")
	private String UPLOADED_FOLDER_IMAGES;
	@Autowired
	private SongRepository songRepository;

	@Override
	public void save(MultipartFile file, long userId) {
		try {
			Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
			byte[] bytes = file.getBytes();
			Files.write(path, bytes);
			Song song = new Song();
			song.setTitle(file.getOriginalFilename());
			User user = new User();
			user.setUserId(userId);
			song.setUser(user);
			songRepository.save(song);
		} catch (Exception e) {
			throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		}
	}

	@Override
	public Resource load(String filename) {
		try {
			Path file = Paths.get(UPLOADED_FOLDER_IMAGES).resolve(filename);
			Resource resource = new UrlResource(file.toUri());

//			if (resource.exists() || resource.isReadable()) {
//				return resource;
//			} else {
//				throw new RuntimeException("Could not read the file!");
//			}
			return resource;
		} catch (MalformedURLException e) {
			throw new RuntimeException("Error: " + e.getMessage());
		}
	}

}
