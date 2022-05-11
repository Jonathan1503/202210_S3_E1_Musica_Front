import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cancion } from './cancion';

@Injectable({
 providedIn: 'root'
})
export class CancionService {

 private apiUrl: string = environment.baseUrl + 'cancion';

 constructor(private http: HttpClient) { }

 getCapitulos(): Observable<Cancion[]> {
   return this.http.get<Cancion[]>(this.apiUrl);
 }

}
