package com.collection.music.mapper;

import org.mapstruct.Mapper;

import com.collection.music.dto.AlbumDto;
import com.collection.music.model.Album;

@Mapper(componentModel = "spring")
public interface AlbumMapper {
	AlbumDto asAlbumDto(Album album);

	Album asAlbum(AlbumDto albumDto);
}
