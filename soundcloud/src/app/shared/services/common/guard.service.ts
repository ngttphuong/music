import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class GuardService implements CanActivate {
    constructor( private router: Router, private authService: AuthService ) { }

    /**
     * Check user auth and redirect unauthed user to sign in page.
     * @return {boolean} Whether user is authed or not.
     */
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

        if ( !this.authService.isSignedIn() ) {
            this.authService.setInitialUrl = state.url;
            this.router.navigate( ['/sign-in'] );
            return false;
        }
        return true;
    }
}