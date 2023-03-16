import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Museo } from './museo';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Museum } from '../artwork/artwork';

@Injectable({
  providedIn: 'root'
})
export class MuseoService {

  private apiUrl: string = environment.baseUrl + 'museums';

  constructor(private http: HttpClient) { }

  getMuseoList(): Observable<Museo[]> {
    console.log ("getAllMuseums");
    return this.http.get<Museo[]>(this.apiUrl);
  }
  createMuseum(museum: Museum): Observable<Museum> {
    return this.http.post<Museum>(this.apiUrl, museum);
 }
}
