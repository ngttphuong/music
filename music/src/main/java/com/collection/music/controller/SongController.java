package com.collection.music.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.collection.music.constant.ControllerConstants;
import com.collection.music.dto.CommentDto;
import com.collection.music.dto.SongDto;
import com.collection.music.dto.UploadFileDto;
import com.collection.music.enums.Tag;
import com.collection.music.model.Song;
import com.collection.music.service.ISongService;

@RestController
@RequestMapping(ControllerConstants.SONGS)
public class SongController {
	@Autowired
	ISongService songService;

	@GetMapping("/{id}")
	public SongDto findById(@PathVariable("id") long id) {
		return songService.findById(id);
	}
	@PostMapping("/{songId}/add-comment")
	public CommentDto addComment(@RequestBody() CommentDto comment, @PathVariable("songId") long id) {
		return songService.addComment(id, comment);
	}
	@GetMapping("/{songId}/comments")
	public List<CommentDto> findComments(@PathVariable("songId") long id) {
		return songService.findComments(id);
	}
//	@PostMapping()
//	public long createSong(@RequestBody() UploadFileDto songDto) {
//		return songService.save(songDto);
//	}
//	@PostMapping()
//	public long createSong(@RequestBody() UploadFileDto songDto) {
//		return songService.save(songDto);
//	}
	@PostMapping()
	public long createSong(@RequestParam(required = false, name="userId") long userId, @RequestParam(required = false, name="title") String title,@RequestParam(required = false, name="description") String desciption,@RequestParam(required = false, name="fileImage") MultipartFile fileImage, @RequestParam(required = false, name="fileSong") MultipartFile fileSong,@RequestParam(required = false, name="tag") Tag tag) {
		UploadFileDto songDto = new UploadFileDto(userId, title, desciption, fileImage, fileSong, tag);
		return songService.save(songDto);
	}
	@PostMapping("/{songId}/like")
	public void like(@PathVariable("songId") long songId) {
		songService.increaseLike(songId);
	}
	@PostMapping("/{songId}/unlike")
	public void unlike(@PathVariable("songId") long songId) {
		songService.unLike(songId);
	}
}
