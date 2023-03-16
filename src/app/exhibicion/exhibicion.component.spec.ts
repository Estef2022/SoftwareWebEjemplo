import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ExhibicionComponent } from './exhibicion.component';

import { faker } from '@faker-js/faker';
import {HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Exhibicion } from './exhibicion';

describe('exhibicionListComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: ExhibicionComponent;
  let fixture: ComponentFixture<ExhibicionComponent>;
  let debug: DebugElement;

  var exhibitions: Array<Exhibicion> = [];

  describe('Componente: ArtworkList', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [ExhibicionComponent],
      }).compileComponents();

    exhibitions = [];
    for (let i = 0; i < 10; i++) {
      exhibitions.push(
        new Exhibicion(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence()
        )
      );
    }

    // We inject our service (which imports the HttpClient) and the Test Controller
    httpTestingController = TestBed.get(HttpTestingController);
    fixture = TestBed.createComponent(ExhibicionComponent);
    component = fixture.componentInstance;
    component.exhibitions = exhibitions;

  }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });


    it('if consume getExhibitions returned all exhibitions', () => {
      component.getExhibitions(100);
      expect(component.exhibitions.length).toEqual(10);
    });
  });
});
