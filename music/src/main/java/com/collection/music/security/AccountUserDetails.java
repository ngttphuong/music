package com.collection.music.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

/**
 * Represents an Authenticated User
 *
 */
@Getter
@Setter
public class AccountUserDetails extends JwtUser {

  /** serialVersionUID */
  private static final long serialVersionUID = 1L;

  private String userId;
  private String username;
  private String email;

  @JsonIgnore private String password;

  @JsonIgnore private Collection<? extends GrantedAuthority> authorities;

  @JsonIgnore
  @Override
  public boolean isEnabled() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @JsonIgnore
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }
}
