import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Exhibicion } from './exhibicion';
import { ExhibicionService } from './exhibicion.service';
import { MuseoService } from '../museo/museo.service';
import { Museo } from '../museo/museo';

@Component({
  selector: 'app-exhibicion',
  templateUrl: './exhibicion.component.html',
  styleUrls: ['./exhibicion.component.css']
})
export class ExhibicionComponent implements OnInit {
  @Input() museoId!: number;
  id: number = 0;
  searchedById : Boolean = false;
  @Output() volver = new EventEmitter<Boolean>();

  exhibitions: Array<Exhibicion> = [];
  selectedExhibicion!: Exhibicion;
  selected: Boolean = false;
  selectedMuseoId!: number
  ready: Boolean = false;

  museoList : Array<Museo> = [];
  museo : any;
  museo_id : any;
  museo_size : number = 0;
  museoAux : any;




  constructor(private exhibicionService: ExhibicionService, private route: ActivatedRoute, private location: Location, config: NgbCarouselConfig, private museoService: MuseoService) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    this.volver.emit(false);
   }

  getExhibitions(idMuseo: number){
    this.ready = false;
    this.exhibicionService.getExhibitionsByMuseumId(idMuseo).subscribe(exhibitions => {
      this.exhibitions = exhibitions;
      this.ready = true;
      console.log(exhibitions);
    }, err => {
      console.log("Error al consultar o no existen exhibiciones para el museo")
    });

  }

  ngOnInit() {
    this.searchedById = true;
    if (this.museoId == null) {
      this.route.params.subscribe(prm => {
        if (prm['id']) {
          this.id = prm['id'];
        }
      });
    }
    this.getAllMuseos();
    this.getExhibitions(this.id);
  }

  onSelected(exhibicion: Exhibicion): void {
    this.selected = true;
    this.selectedExhibicion = exhibicion;
    if(this.museoAux!=null)
      this.selectedMuseoId = this.museoAux.id
  }
  procesaVolver(volver:any) {
    console.log("procesa Volver",volver);
    this.selected = volver;
  }
  submitVolver() {
    this.volver.emit(false);

    console.log( 'volver()...' );
  }
  museoFilter(event: any) {
    this.museo_id = event.target.value;
    console.log("Museo seleccionado : ",this.museo_id);
    this.getExhibitions(this.museo_id);
  }
  getAllMuseos():void {
    this.ready = false;
     this.museoService.getMuseoList().subscribe(museo => {
     this.museoList =  museo;
     this.ready = true;
   });
 }
}
