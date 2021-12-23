package com.collection.music.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter @AllArgsConstructor
public class CommentDto {
 private String message;
 private UserDto commentator;
}
