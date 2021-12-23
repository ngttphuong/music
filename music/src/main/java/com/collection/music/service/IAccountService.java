package com.collection.music.service;

import com.collection.music.dto.UserDto;

import javax.validation.Valid;

import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.dto.ProfileRegistDto;

public interface IAccountService {
	 UserDto findById(long id);
	 long upsertProfile(long id, ProfileRegistDto dto);
	long save(@Valid AccountRegistrationDto dto);
}
