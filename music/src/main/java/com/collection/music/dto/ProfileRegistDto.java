package com.collection.music.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProfileRegistDto {
	private String username;
	private String email;
	private Boolean gender;
	private String phoneNumber;
	private String address;
	private String avatar;
}
