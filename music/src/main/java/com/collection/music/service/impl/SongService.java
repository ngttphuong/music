package com.collection.music.service.impl;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.collection.music.dto.CommentDto;
import com.collection.music.dto.SongDto;
import com.collection.music.dto.UploadFileDto;
import com.collection.music.mapper.CommentMapper;
import com.collection.music.mapper.SongMapper;
import com.collection.music.model.Comment;
import com.collection.music.model.Song;
import com.collection.music.model.User;
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
	@Value("${app.upload-folder}")
	  private String UPLOADED_FOLDER_SONG;
	@Value("${app.upload-folder-images}")
	private String UPLOADED_FOLDER_IMAGES;

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
	public long save(UploadFileDto songDto) {
		Song song = new Song();
		try {
   			Path pathSong = Paths.get(UPLOADED_FOLDER_SONG + songDto.getFileSong().getOriginalFilename());
			byte[] bytes = songDto.getFileSong().getBytes();
            Files.write(pathSong, bytes);  
            Path pathImage = Paths.get(UPLOADED_FOLDER_IMAGES + songDto.getFileImage().getOriginalFilename());
            byte[] bytes2 = songDto.getFileImage().getBytes();
            Files.write(pathImage, bytes2);
            song.setDesciption(songDto.getDesciption());
            song.setTag(songDto.getTag());
            song.setTitle(songDto.getTitle());
            song.setUrlImage(songDto.getFileImage().getOriginalFilename());
            song.setUrlLink(songDto.getFileSong().getOriginalFilename());
            User user = new User();
		      user.setUserId(songDto.getUserId());
		      song.setUser(user);
            songRepository.save(song);
		} catch (Exception e) {
			throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
		}
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
