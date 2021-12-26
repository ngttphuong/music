package com.collection.music.service;

import java.util.List;

import com.collection.music.dto.CommentDto;
import com.collection.music.dto.SongDto;
import com.collection.music.dto.UploadFileDto;

public interface ISongService {
	 SongDto findById(long id);
	 List<SongDto> findByUser(long userId);
	CommentDto addComment(long id, CommentDto comment);
	List<CommentDto> findComments(long id);
	long save(UploadFileDto songDto);
	void increaseLike(long songId);
	void unLike(long songId);
}
