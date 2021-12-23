package com.collection.music.mapper;

import org.mapstruct.Mapper;

import com.collection.music.dto.CommentDto;
import com.collection.music.model.Comment;

@Mapper(componentModel = "spring")
public interface CommentMapper {
	Comment asComment(CommentDto dto);
	CommentDto asCommentDto(Comment comment);
}
