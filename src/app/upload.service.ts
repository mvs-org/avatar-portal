import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = "https://mvs-avatar-portal.firebaseapp.com/api/";
  constructor(
    private httpClient: HttpClient
  ) { }

  public upload(path, data) {
    let uploadURL = `${this.SERVER_URL}`;

    return this.httpClient.post<any>(uploadURL + path, data, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    }));
  }

  uploadFile(file: File): Observable<HttpEvent<any>> {

    let url = "https://mvs-avatar-portal.firebaseapp.com/api/mst/hallo";
  
    let formData = new FormData();
    formData.append('upload', file);

    let params = new HttpParams();

    const options = {
      params: params,
      reportProgress: true,
    };

    const req = new HttpRequest('POST', url, formData, options);
    return this.httpClient.request(req);
  }
}