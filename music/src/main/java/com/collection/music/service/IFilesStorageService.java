package com.collection.music.service;

import java.nio.file.Path;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface IFilesStorageService {
	public void save(MultipartFile file, long userId);

	public Resource load(String filename);

}
