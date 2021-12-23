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

import com.collection.music.constant.ControllerConstants;
import com.collection.music.dto.AlbumDto;
import com.collection.music.service.IAlbumService;

@RestController
@RequestMapping(ControllerConstants.ALBUMS)
public class AlbumController {
	@Autowired
	IAlbumService albumService;

	@GetMapping("/{id}")
	public AlbumDto findById(@PathVariable("id") long id) {
		return albumService.findById(id);
	}
	@GetMapping()
	public List<AlbumDto> findAll(@RequestParam("accountId") long accountId) {
		return albumService.findByUser(accountId);
	}
	@PostMapping()
	public long createAlbum(@RequestBody() AlbumDto albumDto) {
		return albumService.save(albumDto);
	}
}
