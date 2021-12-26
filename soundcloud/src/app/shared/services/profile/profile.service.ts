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
        return this.http.get<Account>( env.apiUrl + `/profiles/${id}`);
    }
    updateProfile(data: any, accountId : number): any{
        const formData:FormData  = new FormData();
        formData.append("username", data.username);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("address", data.address);
        formData.append("gender", data.gender);
        formData.append("avatar", data.avatar);
        return this.http.put<any>( env.apiUrl + `/profiles/${accountId}`, formData);
    }
    loadFile(fileName : string):Observable<any>{
        return this.http.get<any>(env.apiUrl + `/file-storage/${fileName}`);
    }
}