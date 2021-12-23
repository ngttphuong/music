package com.collection.music.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.mapper.AccountMapper;
import com.collection.music.model.User;
import com.collection.music.repository.AccountRepository;
import com.collection.music.security.AccountUserDetails;

import java.util.Objects;

@Service
public class AccountUserDetailsService implements UserDetailsService {

  @Autowired private AccountRepository repository;

  @Autowired private AccountMapper mapper;

  @Autowired private PasswordEncoder passwordEncoder;

  /**
   * @see
   *     org.springframework.security.core.userdetails.UserDetailsService#loadUserByUsername(java.lang.String)
   */
  @Override
  public UserDetails loadUserByUsername(final String username){
    final User account = repository.findByEmail(username);
    if (Objects.isNull(account))
      throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
    
    final AccountUserDetails user = mapper.asAccountUserDetails(account);
    return user;
  }

  public UserDetails register(AccountRegistrationDto dto) {
	  User account = repository.findByEmail(dto.getEmail());
	  if (!Objects.isNull(account))
	      throw new IllegalArgumentException("This username is existed!");
    String password = passwordEncoder.encode(dto.getPassword());
    User user = mapper.asUser(dto);
    user.setPassword(password);
    repository.save(user);
    return mapper.asAccountUserDetails(user);
  }

  public UserDetails forgotPassword(String email, String password) {
    User user = repository.findByEmail(email);
    user.setPassword(passwordEncoder.encode(password));
    repository.save(user);
    final AccountUserDetails account = mapper.asAccountUserDetails(user);
    return account;
  }
}
