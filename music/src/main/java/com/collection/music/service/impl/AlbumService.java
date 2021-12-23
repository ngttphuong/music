package com.collection.music.service.impl;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collection.music.dto.AlbumDto;
import com.collection.music.mapper.AlbumMapper;
import com.collection.music.model.Album;
import com.collection.music.repository.AlbumRepository;
import com.collection.music.service.IAlbumService;

@Service
@Transactional
public class AlbumService implements IAlbumService {
	@Autowired
	private AlbumRepository albumRepository;
	@Autowired
	private AlbumMapper mapper;

	@Override
	public AlbumDto findById(long id) {
		Album album = albumRepository.findById(id).orElseThrow(NoSuchElementException::new);
		return mapper.asAlbumDto(album);
	}

	@Override
	public List<AlbumDto> findByUser(long userId) {
		List<Album> albums = albumRepository.findByUserUserId(userId);
		return albums.stream().map(mapper::asAlbumDto).collect(Collectors.toList());
	}

	@Override
	public long save(AlbumDto albumDto) {
		Album album = mapper.asAlbum(albumDto);
		albumRepository.save(album);
		return album.getAlbumId();
	}
}
