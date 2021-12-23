package com.collection.music.service;

import java.util.List;

import com.collection.music.dto.AlbumDto;

public interface IAlbumService {
	 AlbumDto findById(long id);
	 List<AlbumDto> findByUser(long userId);
	long save(AlbumDto albumDto);
}
