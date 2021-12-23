package com.collection.music.dto;


import java.util.List;

import com.collection.music.model.Song;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AlbumDto {
	private UserDto user;
	private List<Song> songs;

}
