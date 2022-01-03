import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { env } from "src/environments/environment";
import { LocalStorageService } from "../common";
import { ApiService } from "../common/api.service";

@Injectable({providedIn: 'root'})
export class UploadService {

    constructor( private http: HttpClient) {}

    uploadFile(file: File, accountId: string) :Observable<HttpEvent<any>> {
      const formData: FormData = new FormData();

      formData.append('file', file);
  
      formData.append('userId', accountId);
      const requestOptions: Object = {
        /* other options here */
        responseType: 'text',
        reportProgress: true,
        observe: 'events'
      }
      return this.http.post<HttpEvent<any>>(`${env.apiUrl}/file-storage/upload`,formData, requestOptions);
    }
  
    uploadFileSong(data : any, accountId: any) {
        const formData:FormData  = new FormData();
        formData.append("title", data.title);
        formData.append("tag", data.tag);
        formData.append("fileImage", data.fileImage);
        formData.append("fileSong", data.fileSong);
        formData.append("description", data.description);
        formData.append("userId", accountId);

        return this.http.post<any>(`${env.apiUrl}/songs`, formData);
    }

      getFiles(): Observable<any> {
        return this.http.get(`${env.apiUrl}/files`);
      }
}