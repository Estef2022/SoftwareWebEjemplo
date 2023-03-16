import { ArtistService } from './../../artist/artist.service';



import { Component, OnInit } from '@angular/core';
import { Artwork } from '../artwork';
import { Artist } from 'src/app/artist/artist';
import { ArtworkService } from './artwork.service';
import { ExhibicionService } from 'src/app/exhibicion/exhibicion.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  selected: Boolean = false;
  selectedArtwork!: Artwork;
  selectedArtistId!: number

  artworks :  Array<Artwork> = [];

  id : string = '';
  museum : any ;
  artist : any;
  museum_id : any;
  artist_id : any;
  museum_size: number = 0;
  artist_size: number = 0;
  image: string = '';

  artistList : Array<Artist> = [];
  artistAux :  any;
  museumAux :  any;
  ready: Boolean = false;

  constructor(private artworkService: ArtworkService, private  exhibicionService: ExhibicionService,  private route: ActivatedRoute,
    private artistService: ArtistService, private router: Router) {
    }

  ngOnInit() {

      this.route.params.subscribe( prm => {
        if(prm['id']){
          this.id = prm['id'];
        } else {
          this.id = '';
        }

        console.log(`El id es: ${this.id}`);
        console.log("ruta activa: "+this.router.url); //  /tu-ruta

        switch (this.router.url) {
          case "/artwork/list/museum/"+this.id:
            console.log("debe redireccionar a consultar obras por museo"); //  /tu-ruta
            this.getArtworksByMuseumId(this.id);
            break;

          case "/artwork/list/artists":
            console.log("debe redireccionar a consultar obras por artistas"); //  /tu-ruta
            this.artistAux =  null;
            this.museumAux =  null;
            this.getAllArtist();
            break;
          default:
            break;
        }
    })
  }

  artistFilter(event: any) {
    this.artist_id = event.target.value;
    console.log("Artista seleccionado : ",this.artist_id);
    this.getArtworksByArtistId(this.artist_id);
  }

  getArtworksByMuseumId(id: any):void{
    console.log("id:", id);
    this.museum =  null;
    this.image =  '';
    this.ready = false;
    this.artworkService.getMuseumById(id).subscribe(museum => {
     this.artworks = museum.artworks;
     this.museumAux = museum;
     this.artist_size= this.artworks.length;
     console.log("Artworks : ", this.artworks, this.artworks.length);

     this.artistAux =  null;
     console.log("Museo filtrado: ", this.museumAux);
     this.ready = true;

   },   err => {
     this.artworks = [];
     this.image = '';
     this.artist_size= this.artworks.length;
     console.log("Error al consultar o no existen ",this.artist_size)
   });
 }

  getArtworksByArtistId(id: any):void{
    console.log("id:", id);
    this.museum =  null;
    this.image =  '';
    this.ready = false;
    this.artworkService.getArtworkByArtistId(id).subscribe(artworks => {
     this.artworks = artworks;
     this.artist_size= this.artworks.length;
     console.log("Artworks : ", this.artworks, this.artworks.length);

     this.artistAux =  null;
     this.artistAux = this.artistList.find(artist => artist.id == id);
     console.log("Artista filtrado: ", this.artistAux);
     this.ready = true;

   },   err => {
     this.artworks = [];
     this.image = '';
     this.artist_size= this.artworks.length;
     console.log("Error al consultar o no existen ",this.artist_size)
   });
 }

 getArtworksByExhibitionId(id: any):void{
  console.log("exhibition id:", id);
  this.museum =  null;
  this.image =  '';
  this.ready = false;
  this.exhibicionService.getArtworksByExhibitionId(id).subscribe(artworks => {
   this.artworks = artworks;
   this.artist_size= this.artworks.length;
   console.log("Artworks : ", this.artworks, this.artworks.length);

   this.artistAux =  null;
   this.ready = true;

 },   err => {
   this.artworks = [];
   this.image = '';
   this.artist_size= this.artworks.length;
   console.log("Error al consultar o no existen ",this.artist_size)
 });
}

  getAllArtist():void {
     this.ready = false;
      this.artistService.getAllArtist().subscribe(artist => {
      this.artistList =  artist;
      this.ready = true;
      console.log("# Artist : ", this.artistList);
    });
  }

  onSelected(artwork: Artwork): void {
    this.selected = true;
    this.selectedArtwork = artwork;
    if(this.artistAux!=null)
      this.selectedArtistId = this.artistAux.id;
    console.log("artistId: ", this.selectedArtistId);
  }

  procesaVolver(volver:any) {
    console.log("procesa Volver",volver);
    this.selected = volver;
  }
}
