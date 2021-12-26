package com.collection.music.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.collection.music.enums.Tag;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="song",schema="public")
@NoArgsConstructor
@AllArgsConstructor
public class Song {
	private long id;
	private String title;
	private String desciption;
	private String urlImage;
	private String urlLink;
	private int like;
	private Album album;
	private User user;
	private Tag tag;
	private Set<Comment> comments = new HashSet<Comment>(0);;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="song_id", unique=true, nullable=false)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@Column(name="title")
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Column(name="desciption")
	public String getDesciption() {
		return desciption;
	}
	public void setDesciption(String desciption) {
		this.desciption = desciption;
	}
	@Column(name="url_image")
	public String getUrlImage() {
		return urlImage;
	}
	public void setUrlImage(String urlImage) {
		this.urlImage = urlImage;
	}
	@Column(name="url_link")
	public String getUrlLink() {
		return urlLink;
	}
	public void setUrlLink(String urlLink) {
		this.urlLink = urlLink;
	}
	@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="album_id",nullable = true)
	public Album getAlbum() {
		return album;
	}
	public void setAlbum(Album album) {
		this.album = album;
	}
	@ManyToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="user_id", nullable=false)
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	@OneToMany(fetch=FetchType.LAZY, mappedBy="song")
	public Set<Comment> getComments() {
		return comments;
	}
	public void setComments(Set<Comment> comments) {
		this.comments = comments;
	}
	@Column(name="like_count")
	public int getLike() {
		return like;
	}
	public void setLike(int like) {
		this.like = like;
	}
	@Column(name="tag")
    @Enumerated(EnumType.STRING)
	public Tag getTag() {
		return tag;
	}
	public void setTag(Tag tag) {
		this.tag = tag;
	}
	
}
