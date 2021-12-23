package com.collection.music.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.collection.music.security.JwtAuthenticationEntryPoint;
import com.collection.music.security.JwtAuthorizationTokenFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	 @Autowired private JwtAuthenticationEntryPoint unauthorizedHandler;
	 @Autowired private JwtAuthorizationTokenFilter authenticationTokenFilter;
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
		.csrf()
        .disable()
        .cors()
        .and()
        .exceptionHandling()
        .authenticationEntryPoint(unauthorizedHandler)
        .and()
		.authorizeRequests()
		
		.antMatchers("/profiles/registration")
        .permitAll()
		.antMatchers("/**")
        .permitAll()
		.anyRequest()
		.authenticated();
		
		http
		.addFilterBefore(authenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring()

        // allow anonymous resource requests
        .and()
        .ignoring()
        .antMatchers(
            HttpMethod.GET,
            "/",
            "/resources/**",
            "/static/**",
            "/public/**",
            "/webui/**",
            "/configuration/**",
            "/swagger-ui/**",
            "/swagger-resources/**",
            "/api-docs",
            "/api-docs/**",
            "/v2/api-docs/**",
            "/*.html",
            "/**/*.html",
            "/favicon.ico",
            "/**/*.css",
            "/**/*.js",
            "/**/*.png",
            "/**/*.jpg",
            "/**/*.gif",
            "/**/*.svg",
            "/**/*.ico",
            "/**/*.ttf",
            "/**/*.woff",
            "/**/*.otf",
            "/**/*.jpeg");
	}

	@Bean
	public PasswordEncoder passwordEncoderBean() {
		return new BCryptPasswordEncoder();
	}
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {
	    return super.authenticationManagerBean();
	}
	
	@Bean
	  CorsConfigurationSource corsConfigurationSource() {
	    final CorsConfiguration configuration = new CorsConfiguration();
	    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

	    configuration.setAllowedOrigins(Arrays.asList("*"));
	    configuration.setAllowedMethods(Arrays.asList("*"));
	    configuration.setAllowedHeaders(Arrays.asList("*"));

	    source.registerCorsConfiguration("/**", configuration);
	    return source;
	  }
}
