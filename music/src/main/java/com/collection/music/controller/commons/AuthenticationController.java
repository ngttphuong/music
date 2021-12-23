package com.collection.music.controller.commons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.zalando.problem.Status;

import com.collection.music.config.AccountAuthenticationToken;
import com.collection.music.dto.AccountRegistrationDto;
import com.collection.music.exception.AuthenticationException;
import com.collection.music.security.JwtAuthenticationRequest;
import com.collection.music.security.JwtAuthenticationResponse;
import com.collection.music.security.JwtTokenUtil;
import com.collection.music.service.impl.AccountUserDetailsService;

import java.io.IOException;

import javax.validation.Valid;

@RestController
public class AuthenticationController {

  @Value("${app.jwt.header}")
  private String tokenHeader;

  @Autowired private AuthenticationManager authenticationManager;

  @Autowired private JwtTokenUtil jwtTokenUtil;

  @Autowired private AccountUserDetailsService accountUserDetailsService;


  @PostMapping("${app.jwt.route-authentication-path}")
  public JwtAuthenticationResponse createAuthenticationToken(
      @RequestHeader(required = false) String deviceId,
      @RequestBody final JwtAuthenticationRequest authenticationRequest) throws IOException {

		final UsernamePasswordAuthenticationToken authenticationToken = new AccountAuthenticationToken(
				authenticationRequest.getUsername(), authenticationRequest.getPassword());

		authenticate(authenticationToken);

		final UserDetails userDetails;


      userDetails = accountUserDetailsService.loadUserByUsername(authenticationRequest.getUsername());

    final String token = jwtTokenUtil.generateToken(userDetails);

    // Return the token
    return new JwtAuthenticationResponse(token, userDetails);
  }

  /**
   * Authenticates the user. If something is wrong, an {@link AuthenticationException} will be
   * thrown
   */
  private void authenticate(UsernamePasswordAuthenticationToken authenticationToken) throws IOException {
    try {
      authenticationManager.authenticate(authenticationToken);
    } catch (final DisabledException e) {
      throw new AuthenticationException("User is disabled!", e);
    } catch (final BadCredentialsException e) {
      throw new AuthenticationException("Bad credentials!", Status.UNAUTHORIZED, e);
    } catch (Exception e) {
     
    }
  }

  @PostMapping("${app.jwt.route-authentication-registration}")
  public JwtAuthenticationResponse registration(@Valid @RequestBody() AccountRegistrationDto dto) throws IOException{
    	UserDetails userDetails = accountUserDetailsService.register(dto);
    	final String token = jwtTokenUtil.generateToken(userDetails);
    	return new JwtAuthenticationResponse(token, userDetails);
  }
}
