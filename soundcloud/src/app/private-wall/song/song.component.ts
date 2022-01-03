import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { localStorageName } from 'src/app/shared/constants';
import { SongService } from 'src/app/shared/services/songs/song.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
  accountId = Number(localStorage.getItem(localStorageName.accountId));
  accountName = localStorage.getItem(localStorageName.accountName);
  constructor(private router: Router, private formBuilder: FormBuilder, private songService: SongService) { }
  audioObj = new Audio();
  url='./assets/data/Something%20Just%20Like%20This%20The%20Chainsmokers,%20Coldplay%20Lyric%20_%20JEW6ZpDwUin8.mp3';
  ngOnInit( ): void {
    this.audioObj.src = this.url;
    this.audioObj.load();
    this.audioObj.play();
  }
  openFile(url: string){
    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.play();
  }
  play() {
    this.audioObj.play();
    console.log("click play btn");
  }
  pause(){
    this.audioObj.pause();
    console.log("click pause btn");
  }
  stop(){
    this.audioObj.pause();
    this.audioObj.currentTime = 0;

  }
}
