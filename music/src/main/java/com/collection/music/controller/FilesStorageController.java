package com.collection.music.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.collection.music.constant.ControllerConstants;
import com.collection.music.service.IFilesStorageService;
@RestController
@RequestMapping(ControllerConstants.FILESTORAGE)
public class FilesStorageController {
	@Autowired
	private IFilesStorageService filesStorageService;
	@PostMapping("/upload")
	  public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("userId") long userId) {
	    String message = "";
	    try {
	    	filesStorageService.save(file, userId);

	      message = "Uploaded the file successfully: " + file.getOriginalFilename();
	      return ResponseEntity.status(HttpStatus.OK).body(message);
	    } catch (Exception e) {
	      message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	      return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
	    }
	  }
}
