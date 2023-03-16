import { environment } from 'src/environments/environment';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtworkService } from './artwork.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Artwork, ArtworkType } from './../artwork';
import { Artist } from 'src/app/artist/artist';

let httpTestingController: HttpTestingController;
let service: ArtworkService;
var artworks: Array<Artwork> = [];
var artists: Array<Artist> = [];

describe('Service: Artwork', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtworkService],
    });

    artworks = [];
    artists = [];

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

    for (let i = 0; i < 5; i++) {
      artists.push(
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

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ArtworkService);
  });

    it('should create ok', inject(
      [ArtworkService],
      (service: ArtworkService) => {
        expect(service).toBeTruthy();
      }
    ));


    it('if consume getArtist returned Observable should match the right data', () => {
      service.getArtworkByArtistId(1).subscribe((artworks) => {
        expect(artworks.length).toEqual(10);
      });

      const req = httpTestingController.expectOne(
        environment.baseUrl+'artists/1/artworks'
      );

      expect(req.request.method).toEqual('GET');
      req.flush(artworks);

    });

  afterEach(() => {
    httpTestingController.verify();
  });
});
