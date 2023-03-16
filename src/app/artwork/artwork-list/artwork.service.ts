import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';;
import { Artwork, Museum } from '../artwork';
import { Artist } from 'src/app/artist/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private museumsUrl: string = environment.baseUrl + 'museums';
  private artistUrl: string = environment.baseUrl + 'artists';
  private artworksUrl: string = environment.baseUrl + 'artworks';

constructor(private http: HttpClient) { }

getMuseumById(id: number): Observable<Museum>{
  console.log ("Inicio: ", id);
  return this.http.get<Museum>(this.museumsUrl+'/'+id);
}

getArtworkByArtistId(id: number): Observable<Artwork[]>{
  console.log ("Inicio: ", id, this.artistUrl+'/'+id+'/artworks');
  return this.http.get<Artwork[]>(this.artistUrl+'/'+id+'/artworks');
}

getArtworkById(id: number): Observable<Artwork>{
  console.log ("Inicio: ", id);
  return this.http.get<Artwork>(this.artworksUrl+'/'+id);
}

createArtwork(artwork: Artwork,artistId: number): Observable<Artwork> {
  return this.http.post<Artwork>(this.artistUrl+'/'+artistId+'/artworks', artwork);
}
}
