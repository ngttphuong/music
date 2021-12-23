package com.collection.music.mapper;

import org.mapstruct.Mapper;

import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.dto.UserDto;
import com.collection.music.model.User;
import com.collection.music.security.AccountUserDetails;

@Mapper(componentModel = "spring")
public interface AccountMapper {
	UserDto asUserDto(User user);
	User asUser(AccountRegistrationDto dto);
	AccountUserDetails asAccountUserDetails(User user);
}
