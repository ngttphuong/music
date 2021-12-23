import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { apiRequestHeader, localStorageName } from '../../constants';
import { StringService } from './string.service';
import { env } from '../../../../environments/environment';
import { SignUp } from '../../models/signup/signup.model';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
    private initialUrl: string = "";

    constructor( private http: HttpClient, private stringService: StringService, private apiService: ApiService ) { }

    get getInitialUrl(): string {
        return this.initialUrl;
    }

    set setInitialUrl( value: string ) {
        this.initialUrl = value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${env.apiUrl}/auth/login`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                this.saveAuthInfo(user);
            }));
    }

    register(user: any) {
        return this.http.post(`${env.apiUrl}/auth/registration`, user);
    }

    /**
     * Save user auth info.
     * @param {string} User id.
     * @param {string} User password.
     * @return {Observable<any>}
     */
    signIn( id: string, password: string ): Observable<any> {
        return this.stringService.hashSha256( id + ':' + this.stringService.hashMd5( password ) ).pipe(
            mergeMap( ( authorization: string ) => this.authenticate(id, authorization) )
        );
    }

    /**
     * Get user auth info.
     * @param {string} User id.
     * @param {string} User authorization.
     * @return {Observable<any>}
     */
    authenticate( id: string, authorization: string ): Observable<any> {
        let headers: HttpHeaders = new HttpHeaders({
            'Authorization': authorization,
            'Content-Type': apiRequestHeader.contentType
        });

        return this.http.get( env.apiUrl + `/auth/${id}`, { headers: headers }).pipe(
            map( this.saveAuthInfo ),
            catchError( response => this.handleError( response ) )
        );
    }

    /**
     * Sign up an individual account.
     * @param {SignUp} Sign up info.
     * @return {Observable<boolean>}
     */
    signUp( account: SignUp): Observable<boolean> {
        return this.apiService.postDataAndExtractResultWithoutJwt( '/registration', account );
    }

    /**
     * Delete user auth info.
     * @return {void}
     */
    signOut(): void {
        localStorage.removeItem( localStorageName.accountId );
        localStorage.removeItem( localStorageName.userUid );
        localStorage.removeItem( localStorageName.secretKey );
        localStorage.removeItem( localStorageName.accountName );
    }

    /**
     * Check if user auth info is available or not.
     * @return {boolean} Whether user auth info is available or not.
     */
    isSignedIn(): boolean {
        return localStorage.getItem( localStorageName.accountId ) != null
            && localStorage.getItem( localStorageName.accountName) != null;
            // && localStorage.getItem( localStorageName.secretKey ) != null;
    }

    private saveAuthInfo( response: any ) {
        localStorage.setItem( localStorageName.accountId, response.currentUser.userId );
        localStorage.setItem( localStorageName.userUid, response.currentUser.userUid );
        localStorage.setItem( localStorageName.secretKey, response.currentUser.secretKey );
        localStorage.setItem( localStorageName.accountName, response.currentUser.username );

        return '';
    }

    private handleError( response: HttpResponse<any> | any ) {
        return throwError( response );
    }

}
