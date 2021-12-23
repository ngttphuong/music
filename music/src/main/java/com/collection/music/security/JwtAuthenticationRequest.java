package com.collection.music.security;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Holds informations about the authentication
 *
 */
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JwtAuthenticationRequest implements Serializable {

  /** serialVersionUID */
  private static final long serialVersionUID = 1L;

  /** Username */
  private String username;

  /** Passwword */
  private String password;
}
