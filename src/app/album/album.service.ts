import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl: string = environment.baseUrl + 'books';

constructor(private http: HttpClient) { }

}
