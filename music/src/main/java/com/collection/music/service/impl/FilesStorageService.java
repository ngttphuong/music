package com.collection.music.service.impl;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
	@Autowired
	private SongRepository songRepository;
	@Override
	public void save(MultipartFile file, long userId) {
		try {
			byte[] bytes = file.getBytes();
            Path path = Paths.get(UPLOADED_FOLDER + file.getOriginalFilename());
            Files.write(path, bytes);
		      Song song = new Song();
		      song.setSongName(file.getOriginalFilename());
		      User user = new User();
		      user.setUserId(userId);
		      song.setUser(user);
		      songRepository.save(song);
		    } catch (Exception e) {
		      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		    }
	}

}
