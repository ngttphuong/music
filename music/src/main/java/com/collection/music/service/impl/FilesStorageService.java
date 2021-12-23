package com.collection.music.service.impl;

import java.nio.file.Files;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.collection.music.service.IFilesStorageService;
@Service
public class FilesStorageService implements IFilesStorageService {
//	private final Path root = Paths.get("uploads");
//	@Override
//	public void save(MultipartFile file) {
//		try {
//		      Files.copy(file.getInputStream(), this.root.resolve(file.getOriginalFilename()));
//		    } catch (Exception e) {
//		      throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
//		    }
//		
//	}

}
