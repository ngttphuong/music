import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageName } from '../shared/constants';
import { AuthService } from '../shared/services/common';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  accountName = localStorage.getItem(localStorageName.accountName);
  accountId = localStorage.getItem(localStorageName.accountId);
  isActived : boolean = false ;
  constructor( private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.isActived = this.auth.isSignedIn();
  }
  signOut() {
    this.router.navigate( ['/sign-in'] );
  }

}
