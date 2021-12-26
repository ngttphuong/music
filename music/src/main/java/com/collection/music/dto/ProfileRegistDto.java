package com.collection.music.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public class ProfileRegistDto {
	private String username;
	private Boolean gender;
	private String phoneNumber;
	private String address;
	private MultipartFile avatar;
}
