import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Museo } from './museo';



@Component({
  selector: 'app-museo',
  templateUrl: './museo.component.html',
  styleUrls: ['./museo.component.css']
})
export class MuseoComponent implements OnInit {


  @Input() museoDetail!: Museo;
  @Output() volver = new EventEmitter<Boolean>();
  mensaje: string | undefined;

  constructor() { }

  ngOnInit() {
    this.volver.emit(false);
  }

  submitVolver() {
    this.volver.emit(false);

    console.log( 'volver()...' );
  }
}




