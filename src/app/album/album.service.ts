import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl: string = environment.baseUrl + 'albums';

  constructor(private http: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl)
  }

}
