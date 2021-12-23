package com.collection.music.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UserDto {
	private long userId;
	private String username;
	private Boolean gender;
	private String address;
	private String avatar;
	private int like;
}
