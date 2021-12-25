package com.collection.music.service;

import org.springframework.web.multipart.MultipartFile;

public interface IFilesStorageService {
	public void save(MultipartFile file, long userId);

}
