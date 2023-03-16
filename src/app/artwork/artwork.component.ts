import { ArtworkService } from './artwork-list/artwork.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artwork } from './artwork';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import { Image } from '../images/image';
import { ImagesService } from '../images/images.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.css']
})
export class ArtworkComponent implements OnInit {

  @Input() artworkDetail!: Artwork;
  @Input() artistId!: number;
  id: number = 0;
  searchedById : Boolean = false;
  @Output() volver = new EventEmitter<Boolean>();


  constructor(private imagesService: ImagesService, private artworkService: ArtworkService,  private route: ActivatedRoute, private location: Location, config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.volver.emit(false);
  }

  ngOnInit() {

      if(this.artworkDetail==null){
        this.route.params.subscribe( prm => {
          if(prm['id']){
            this.id = prm['id'];
            this.searchedById = true;
          }
      });
      } else {
        this.id =  this.artworkDetail.id;
        this.searchedById = false;
      }
      console.log("obra de arte id: ", this.id);

      this.artworkService.getArtworkById(this.id).subscribe(artwork => {
        this.artworkDetail= artwork;
        console.log("Images : ", this.artworkDetail.images, this.artworkDetail.images.length);
        console.log("Artist : ", this.artworkDetail.artist);
      },   err => {
        this.artworkDetail.images = [];
        console.log("Error al consultar o no existen imagenes para la obra ")
      });

  }

  submitVolver() {
    this.volver.emit(false);

    console.log( 'volver()...' );
  }

}
