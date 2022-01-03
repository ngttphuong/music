import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { localStorageName } from 'src/app/shared/constants';
import { Account } from 'src/app/shared/models/account.model';
import { ProfileService } from 'src/app/shared/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  accountId = Number(localStorage.getItem(localStorageName.accountId));
  accountName = localStorage.getItem(localStorageName.accountName);
  account: Account = new Account("", "", false, "", "", "");
  url: any;
  form: FormGroup = new FormGroup({});
  submitted = false;
  loading = false;
  message = "";
  constructor(private router: Router, private profileService: ProfileService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadProfile();


  }
  signOut() {
    this.router.navigate(['/sign-in']);
  }
  loadProfile() {
    return this.profileService.getProfile(this.accountId).subscribe(
      res => {
        console.log(res);
        if(res.avatar){
              this.url = "assets/images/" +res.avatar;
        }
        this.form = this.formBuilder.group({
          username: new FormControl(res.username, [Validators.required]),
          phoneNumber: new FormControl(res.phoneNumber, [Validators.required]),
          address: new FormControl(res.address, [Validators.required]),
          gender: new FormControl(res.gender, [Validators.required]),
          avatar: new FormControl(res.avatar)
        });
      });
  }
  get f() { return this.form.controls; }
  readURL(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        avatar: file
      });
      this.form.get('avatar')?.updateValueAndValidity();
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      console.log("invalid");
      return;
    }
    this.loading = true;
    console.log("sub");
    this.profileService.updateProfile(this.form.value, this.accountId).subscribe(() => this.message = "Update successfully");
  }
}
