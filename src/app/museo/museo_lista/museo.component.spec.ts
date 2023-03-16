/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, EventEmitter } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { Museo } from '../museo';
import { MuseoService } from '../museo.service';
import { MuseoComponent } from '../museo.component';


​
describe('Component: Museo', () => {
  let museoComponent: MuseoComponent;
  let museoComponentFixture: ComponentFixture<MuseoComponent>;
  let debug: DebugElement;
​
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MuseoComponent ],
      providers: [ MuseoService ]
    })
    .compileComponents();
  }));
​
  beforeEach(() => {
    museoComponentFixture = TestBed.createComponent(MuseoComponent);
    museoComponent = museoComponentFixture.componentInstance;
​
    museoComponent.museoDetail =
      new Museo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
      );
​
    museoComponentFixture.detectChanges();
    debug = museoComponentFixture.debugElement;
  });
​
  it('should create', () => {
    expect(museoComponent).toBeTruthy();
  });
​
​
  describe('museoListComponent', () => {
    it('#volver equals false if submitVolver()', () => {
    var valorEsperado = new EventEmitter<Boolean>()
    valorEsperado.emit(false);
​
    museoComponent.submitVolver();
    expect(museoComponent.volver).toEqual(valorEsperado);
    })});
​
});














