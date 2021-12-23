package com.collection.music.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="comment",schema="public")
@NoArgsConstructor
@AllArgsConstructor
public class Comment {
	private long id;
	private User user;
	private String message;
	private Song song;
	
	public Comment(int id, User user, String message, Song song) {
		super();
		this.id = id;
		this.user = user;
		this.message = message;
		this.song = song;
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id", unique=true, nullable=false)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column(name="message")
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="song_id", nullable=false)
	public Song getSong() {
		return song;
	}
	public void setSong(Song song) {
		this.song = song;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id", nullable=false)
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	
}
