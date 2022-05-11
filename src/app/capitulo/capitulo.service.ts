import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Capitulo } from './capitulo';

@Injectable({
 providedIn: 'root'
})
export class CapituloService {

 private apiUrl: string = environment.baseUrl + 'podcasts/1/capitulos';

 constructor(private http: HttpClient) { }

 getCapitulos(): Observable<Capitulo[]> {
   return this.http.get<Capitulo[]>(this.apiUrl);
 }

}
