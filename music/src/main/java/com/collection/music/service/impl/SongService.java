package com.collection.music.service.impl;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collection.music.dto.CommentDto;
import com.collection.music.dto.SongDto;
import com.collection.music.mapper.CommentMapper;
import com.collection.music.mapper.SongMapper;
import com.collection.music.model.Comment;
import com.collection.music.model.Song;
import com.collection.music.repository.CommentRepository;
import com.collection.music.repository.SongRepository;
import com.collection.music.service.ISongService;

@Service
@Transactional
public class SongService implements ISongService {
	@Autowired
	private SongRepository songRepository;
	@Autowired
	private CommentRepository commentRepository;
	@Autowired
	private SongMapper mapper;
	@Autowired
	private CommentMapper commentMapper;

	@Override
	public SongDto findById(long id) {
		Song song = songRepository.findById(id).orElseThrow(NoSuchElementException::new);
		return mapper.asSongDto(song);
	}

	@Override
	public List<SongDto> findByUser(long userId) {
		List<Song> songs = songRepository.findAll();
		return songs.stream().map(mapper::asSongDto).collect(Collectors.toList());
	}

	@Override
	public CommentDto addComment(long songId, CommentDto dto) {
		Comment comment = commentMapper.asComment(dto);
		Song song = new Song();
		song.setId(songId);
		comment.setSong(song);
		commentRepository.save(comment);
		return commentMapper.asCommentDto(comment);	
	}

	@Override
	public List<CommentDto> findComments(long id) {
		Song song = songRepository.findById(id).orElseThrow(NoSuchElementException::new);
		Set<Comment> comments = song.getComments();
		return comments.stream().map(commentMapper::asCommentDto).collect(Collectors.toList());
	}

	@Override
	public long save(SongDto songDto) {
		Song song = mapper.asSong(songDto);
		songRepository.save(song);
		return song.getId();
	}

	@Override
	public void increaseLike(long songId) {
		Optional<Song> song = songRepository.findById(songId);
		if(song.isPresent()){
			Song songUpdate = song.get();
			songUpdate.setLike(songUpdate.getLike() + 1);
			songRepository.save(songUpdate);
		}
	}
	@Override
	public void unLike(long songId) {
		Optional<Song> song = songRepository.findById(songId);
		if(song.isPresent()){
			Song songUpdate = song.get();
			songUpdate.setLike(songUpdate.getLike() - 1);
			songRepository.save(songUpdate);
		}
	}
}
