import { Component, OnInit } from '@angular/core';
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
  accountId  = Number(localStorage.getItem(localStorageName.accountId));
  accountName  = localStorage.getItem(localStorageName.accountName);
  account : Account = new Account("","",false,"","");

  constructor(private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadProfile();

  }
  signOut() {
    this.router.navigate( ['/sign-in'] );
  }
  loadProfile(){
    return this.profileService.getProfile(this.accountId).subscribe(res => { this.account = res});
  }
}
