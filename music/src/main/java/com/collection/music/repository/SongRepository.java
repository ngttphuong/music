package com.collection.music.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collection.music.dto.SongDto;
import com.collection.music.model.Album;
import com.collection.music.model.Song;
import com.collection.music.model.User;

@Repository
public interface SongRepository extends JpaRepository<Song, Long> {

}
