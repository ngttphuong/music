import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "src/environments/environment";
import { LocalStorageService } from "../common";

@Injectable()
export class SongService {

    constructor(
        private localStorageService: LocalStorageService,
        private http: HttpClient) {

    }

    loadSong(songId : string):Observable<any>{
        return this.http.get<any>(env.apiUrl + `/song/${songId}`);
    }
}