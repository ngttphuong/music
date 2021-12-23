import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "src/environments/environment";
import { Account } from "../../models/account.model";
import { LocalStorageService } from "../common";
import { ApiService } from "../common/api.service";

@Injectable()
export class ProfileService {

    constructor(private apiService: ApiService,
        private localStorageService: LocalStorageService,
        private http: HttpClient) {

    }

    getProfile(id : number):Observable<Account>{
        return this.http.get<Account>( env.apiUrl + `/profile/${id}`);
    }
}