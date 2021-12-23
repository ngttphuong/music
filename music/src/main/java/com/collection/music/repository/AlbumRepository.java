package com.collection.music.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collection.music.model.Album;

@Repository
public interface AlbumRepository extends JpaRepository<Album, Long> {

	List<Album> findByUserUserId(long userId);

	
}
