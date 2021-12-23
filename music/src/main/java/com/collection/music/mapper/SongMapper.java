package com.collection.music.mapper;

import org.mapstruct.Mapper;

import com.collection.music.dto.SongDto;
import com.collection.music.model.Song;

@Mapper(componentModel = "spring")
public interface SongMapper {
	SongDto asSongDto(Song song);
	Song asSong(SongDto song);
}
