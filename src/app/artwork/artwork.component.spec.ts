import { Artist } from 'src/app/artist/artist';
import { ArtworkComponent } from './artwork.component';

import { Artwork, ArtworkType } from './artwork';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
  let component: ArtworkComponent;
  let fixture: ComponentFixture<ArtworkComponent>;
  let debug: DebugElement;
  var artwork: Artwork;

  describe('Componente: Artwork', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule],
        declarations: [ArtworkComponent]
      }).compileComponents();;

        artwork = new Artwork(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          ArtworkType.PAINTING,
          faker.image.imageUrl(),
          [],
          new Artist(
            faker.datatype.number(),
            faker.lorem.sentence(),
            faker.image.imageUrl(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            []
          )
        );

        fixture = TestBed.createComponent(ArtworkComponent);
        component = fixture.componentInstance;
        debug =  fixture.debugElement;
        component.artworkDetail = artwork;
        component.artistId = 100;
      });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('if consume submitVolver', () => {
      component.submitVolver();
      var volver = new EventEmitter<Boolean>();
      volver.emit(false);
      expect(component.volver).toEqual(volver);
    });

    it('should card-title exist"', () => {

      const cardTitle = debug.queryAll(By.css('h1'));
      console.log("cardTitle: ", cardTitle);
      expect(cardTitle.length).toEqual(1);

    });

  });

