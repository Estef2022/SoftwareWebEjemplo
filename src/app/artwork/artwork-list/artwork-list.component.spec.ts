

import { Artwork, ArtworkType } from './../artwork';
import { Artist } from './../../artist/artist';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtworkListComponent } from './artwork-list.component';

import { faker } from '@faker-js/faker';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

  let httpTestingController: HttpTestingController;
  let component: ArtworkListComponent;
  let fixture: ComponentFixture<ArtworkListComponent>;

  var artistas: Array<Artist> = [];
  var artworks: Array<Artwork> = [];

  describe('Componente: ArtworkList', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule],
        declarations: [ArtworkListComponent]
      }).compileComponents();;

      artworks = [];

      for (let i = 0; i < 10; i++) {
        artworks.push(
          new Artwork(
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
          )
        );
      }

      artistas = [];

      for (let i = 0; i < 10; i++) {
        artistas.push(
          new Artist(
            faker.datatype.number(),
            faker.lorem.sentence(),
            faker.image.imageUrl(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            artworks
          )
        );
      }

        // We inject our service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.get(HttpTestingController);
        fixture = TestBed.createComponent(ArtworkListComponent);
        component = fixture.componentInstance;
        component.artistList = artistas;
        component.artworks = artworks;
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('if consume getArtist returned all artists', () => {
      component.getAllArtist();
      expect(component.artistList.length).toEqual(10);
    });

    it('if consume getArtworksByArtistId returned all artworks for this artist', () => {
      component.getArtworksByArtistId(artistas[0].id);
      expect(component.artworks.length).toEqual(10);
    });

    it('if consume onSelected', () => {

      component.artistAux =  artworks[2];

      component.onSelected(artworks[3]);

      expect(component.selected).toEqual(true);
      expect(component.selectedArtwork).toEqual(artworks[3]);
      expect(component.artworks.length).toEqual(10);
    });

  });

