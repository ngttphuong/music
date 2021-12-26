package com.collection.music.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.collection.music.constant.ControllerConstants;
import com.collection.music.dto.UserDto;
import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.dto.ProfileRegistDto;
import com.collection.music.service.IAccountService;

@RestController
@RequestMapping(ControllerConstants.PROFILES)
public class ProfileController {
	@Autowired
	IAccountService profileService;

	@GetMapping("/{id}")
	public UserDto findById(@PathVariable("id") long id) {
		return profileService.findById(id);
	}
	@PutMapping("/{id}")
	public long upsertProfile(@RequestParam String username, @RequestParam String phoneNumber, @RequestParam boolean gender, @RequestParam String address, @RequestParam MultipartFile avatar, @PathVariable("id") long id) {
		ProfileRegistDto dto = new ProfileRegistDto(username, gender, phoneNumber, address, avatar);
		return profileService.upsertProfile(id, dto);
	}
	@PostMapping("/registration")
    public long createAccount (@Valid @RequestBody()  AccountRegistrationDto dto) {
		System.out.println("dooooooooo");
        return profileService.save(dto);
    }
}
