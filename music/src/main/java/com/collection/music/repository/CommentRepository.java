package com.collection.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collection.music.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	

	
}
