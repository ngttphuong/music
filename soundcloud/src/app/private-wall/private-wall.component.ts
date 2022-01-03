import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { localStorageName } from '../shared/constants';
import { AuthService } from '../shared/services/common';

@Component({
  selector: 'app-private-wall',
  templateUrl: './private-wall.component.html',
  styleUrls: ['./private-wall.component.scss']
})
export class PrivateWallComponent implements OnInit {
  accountId = Number(localStorage.getItem(localStorageName.accountId));
  accountName = localStorage.getItem(localStorageName.accountName);
  isActived : boolean = false ;
  constructor(private router: Router, private auth : AuthService) { }

  ngOnInit(): void {
    this.isActived = this.auth.isSignedIn();
  }
  signOut() {
    this.router.navigate( ['/sign-in'] );
  }
}
