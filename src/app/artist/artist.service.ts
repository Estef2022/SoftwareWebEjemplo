import { Image } from './../images/image';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private apiUrl: string = environment.baseUrl + 'artists';

  constructor(private http: HttpClient) { }

  getAllArtist(): Observable<Artist[]>{
    console.log ("getAllArtist");
    return this.http.get<Artist[]>(this.apiUrl);
  }

  createArtist(artist: Artist): Observable<Artist> {
    return this.http.post<Artist>(this.apiUrl, artist);
  }

  createImage(image: Image,artistId: number, artworkId: number): Observable<Image> {
    return this.http.post<Image>(this.apiUrl+'/'+artistId+'/artworks/'+artworkId+'/images', image);
  }
}
