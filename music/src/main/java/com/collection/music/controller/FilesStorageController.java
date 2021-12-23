package com.collection.music.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collection.music.constant.ControllerConstants;
import com.collection.music.dto.CommentDto;
import com.collection.music.service.IFilesStorageService;

@RestController
@RequestMapping(ControllerConstants.SONGS)
public class FilesStorageController {
	@Autowired
	private IFilesStorageService filesStorageService;
	
}
