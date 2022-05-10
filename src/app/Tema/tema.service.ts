import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TemaModule } from './tema';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemaService {
  private apiUrl = environment.baseUrl + 'temas.json';

  constructor(private http: HttpClient) { }

  getTemas(): Observable<TemaModule[]> {
    return this.http.get<TemaModule[]>(this.apiUrl);
  }
}
