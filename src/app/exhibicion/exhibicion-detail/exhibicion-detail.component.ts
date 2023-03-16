import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artwork } from 'src/app/artwork/artwork';
import { Exhibicion } from '../exhibicion';
import { ExhibicionService } from '../exhibicion.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exhibicion-detail',
  templateUrl: './exhibicion-detail.component.html',
  styleUrls: ['./exhibicion-detail.component.css']
})
export class ExhibicionDetailComponent implements OnInit {
  @Input() exhibicionDetail!: Exhibicion;
  @Output() volver = new EventEmitter<Boolean>();
  artWorks: Array<Artwork> = [];


  constructor(private exhibicionService: ExhibicionService, private location:Location) { }

  selectedExhibicion!: Exhibicion;
  selected = false;




  getArtWorks(){
      this.exhibicionService.getArtworksByExhibitionId(this.exhibicionDetail.id).subscribe(artWorks => {
      this.artWorks= artWorks;
      console.log(artWorks);
    });

  }

  ngOnInit() {
    this.getArtWorks();
  }

  onSelected(exhibicion: Exhibicion): void {
    this.selected = true;
    this.selectedExhibicion = exhibicion;
  }
  submitVolver() {
    this.volver.emit(false);
  }

}
