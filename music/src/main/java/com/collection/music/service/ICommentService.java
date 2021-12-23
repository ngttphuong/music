package com.collection.music.service;

import java.util.List;

import com.collection.music.dto.AlbumDto;

public interface ICommentService {
	 AlbumDto findById(long id);
	 List<AlbumDto> findByUser(long userId);
}
