import { Image } from './../images/image';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArtistService } from './artist.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Artist } from './artist';
import { environment } from 'src/environments/environment';

let httpTestingController: HttpTestingController;
let service: ArtistService;
var artists: Array<Artist> = [];

describe('Service: Artist', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService],
    });

    artists = [];

    for (let i = 0; i < 5; i++) {
      artists.push(
        new Artist(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.image.imageUrl(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          []
        )
      );
    }

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ArtistService);
  });

  it('should create ok', inject([ArtistService], (service: ArtistService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getMuseoList', () => {
    it('if consume getArtist returned Observable should match the right data', () => {
      service.getAllArtist().subscribe((artists) => {
        expect(artists.length).toEqual(5);
      });

      const req = httpTestingController.expectOne(
        environment.baseUrl+'artists'
      );
​
      expect(req.request.method).toEqual('GET');
      req.flush(artists);

    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
