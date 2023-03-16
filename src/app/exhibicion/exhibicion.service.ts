import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exhibicion } from './exhibicion';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Artwork } from '../artwork/artwork';
import { Museo } from '../museo/museo';

@Injectable({
  providedIn: 'root'
})
export class ExhibicionService {
  private apiUrl = environment.baseUrl;
  private url = ' ';

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }
  getExhibitionsByMuseumId(id:number): Observable<Exhibicion[]>{
    this.url = this.apiUrl + 'museums/'+id+'/exhibitions';
    return this.http.get<Exhibicion[]>(this.url);
  }
  getArtworksByExhibitionId(id: number): Observable<Artwork[]>{
    this.url = this.apiUrl + 'exhibitions/'+ id +'/artworks/';
    return this.http.get<Artwork[]>(this.url);
  }
  getAllMuseos(): Observable<Museo[]>{
    this.url = this.apiUrl + 'museums';
    return this.http.get<Museo[]>(this.url);
  }

}
