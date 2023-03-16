import { Component, Input, OnInit } from '@angular/core';
import { Museo } from '../museo';
import { MuseoService } from '../museo.service';

@Component({
  selector: 'app-museo_lista',
  templateUrl: './museo_lista.component.html',
  styleUrls: ['./museo_lista.component.css'],
})
export class Museo_listaComponent implements OnInit {

  museos: Array<Museo> = [];
  selected: Boolean = false;
  ready: Boolean = false;
  selectedMuseo!: Museo;

  constructor(private museoService: MuseoService) {}

  ngOnInit() {
    this.getMuseos();
  }

  getMuseos(): void {
    this.ready = false;
    this.museoService.getMuseoList().subscribe(
      (museos) => {
        this.museos = museos;
        this.ready = true;
        console.log('Probando traer todos los museos: ', museos.length);

      },
      (err) => {
        this.museos = [];
        console.log('Error al consultar o no existen ');
      },);

  }

  onSelected(museo: Museo): void {
    this.selected = true;
    this.selectedMuseo = museo;
  }

  procesaVolver(volver:any) {
    console.log("procesa Volver",volver);
    this.selected = volver;
  }

}
