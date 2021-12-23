package com.collection.music.config;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class AccountAuthenticationToken extends UsernamePasswordAuthenticationToken{

	public AccountAuthenticationToken(Object principal, Object credentials) {
		super(principal, credentials);
	}
	
}
