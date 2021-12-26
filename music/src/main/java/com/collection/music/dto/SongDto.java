package com.collection.music.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SongDto {
	private long userId;
	private String title;
	private String singerName;
	private String urlImage;
	private String urlLink;
	private int like;
}
