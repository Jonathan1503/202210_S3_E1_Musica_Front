import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Genero } from './genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl: string = environment.baseUrl + 'generos';

  constructor(private http: HttpClient) { }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
  }

}
