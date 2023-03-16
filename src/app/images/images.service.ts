import { Image } from './image';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

  getAllImages(artist_id:number, artwork_id: number): Observable<Image[]>{
    console.log ("get All Images for artwork");
    return this.http.get<Image[]>(this.apiUrl+'/'+artist_id+'/artworks/'+artwork_id+'/images');
  }

}
