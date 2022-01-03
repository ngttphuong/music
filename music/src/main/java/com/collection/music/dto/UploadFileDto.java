package com.collection.music.dto;

import java.io.Serializable;

import org.springframework.web.multipart.MultipartFile;

import com.collection.music.enums.Tag;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter @RequiredArgsConstructor @AllArgsConstructor
public class UploadFileDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -7349119720645623094L;
	private long userId;
	private String title;
	private String desciption;
	private MultipartFile fileImage;
	private MultipartFile fileSong;
	private Tag tag;
	public UploadFileDto(String title, String desciption, MultipartFile fileImage, MultipartFile fileSong, Tag tag) {
		super();
		this.title = title;
		this.desciption = desciption;
		this.fileImage = fileImage;
		this.fileSong = fileSong;
		this.tag = tag;
	}
	
	
}
