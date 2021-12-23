package com.collection.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collection.music.model.User;

@Repository
public interface AccountRepository extends JpaRepository<User, Long> {

	User findByEmail(String username);

	
}
