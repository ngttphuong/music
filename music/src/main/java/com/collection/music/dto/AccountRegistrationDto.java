package com.collection.music.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountRegistrationDto {
	private String username;
	@Email
	private String email;
	private Boolean gender;
	private String phoneNumber;
	private String address;
	@NotBlank
	private String password;
	@NotBlank
	private String passwordConfirm;
}
