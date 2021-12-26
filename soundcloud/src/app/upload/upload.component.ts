import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { localStorageName } from '../shared/constants';
import { AuthService } from '../shared/services/common';
import { UploadService } from '../shared/services/upload/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  accountName = localStorage.getItem(localStorageName.accountName);
  accountId: any = localStorage.getItem(localStorageName.accountId);
isActived: boolean = false;
form = new FormGroup({
  fileImage: new FormControl(null),
  fileSong: new FormControl(null),
  title: new FormControl('', [Validators.required]),
  tag: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
});

selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;
  url: any;
  constructor(private router: Router, private auth: AuthService, private uploadService : UploadService,   private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isActived = this.auth.isSignedIn();
  }
  signOut() {
    this.router.navigate( ['/sign-in'] );
  }
  get f(){
    return this.form.controls;
  }
  handleFile(event: any) {
    console.log("chose file");
    this.progress = 0;
    this.selectedFiles = event.target.files;
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;
        this.form.patchValue({
          fileSong: file
        });
        this.form.get('fileSong')?.updateValueAndValidity();
        // this.uploadService.uploadFile(this.currentFile, this.accountId).subscribe(
        //   (event: any) => {
        //     if (event.type === HttpEventType.UploadProgress) {
        //       this.progress = Math.round(100 * event.loaded / event.total);
        //     } else if (event instanceof HttpResponse) {
        //       this.message = event.body.message;
        //     }
        //   },
        //   (err: any) => {
        //     console.log(err);
        //     this.progress = 0;

        //     if (err.error && err.error.message) {
        //       this.message = err.error.message;
        //     } else {
        //       this.message = 'Could not upload the file!';
        //     }

        //     this.currentFile = undefined;
        //   });

      }

      this.selectedFiles = undefined;
    }
    
  }
  handleFileImage(event : any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        fileImage: file
      });
      this.form.get('fileImage')?.updateValueAndValidity();
      var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
          this.url = (<FileReader>event.target).result;
        }
    }
  }

  submit(){
    this.uploadService.uploadFileSong(this.form.value, this.accountId).subscribe(event =>{
      const path = '/a/' + this.accountName + '/song';
      this.router.navigate([path], { relativeTo: this.route });
    },
    (err: any) => {
      console.log(err);
      if (err.error && err.error.message) {
        this.message = err.error.message;
      } else {
        this.message = 'Could not upload the file!';
      }

      this.currentFile = undefined;
    });
  }
}

