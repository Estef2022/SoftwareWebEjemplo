
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExhibicionService } from './exhibicion.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { faker } from '@faker-js/faker';
import { Exhibicion } from './exhibicion';
import { environment } from 'src/environments/environment';

let httpTestingController: HttpTestingController;
let service: ExhibicionService;
var Exhibicions: Array<Exhibicion> = [];

describe('Service: Exhibicion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExhibicionService],
    });

    Exhibicions = [];

    for (let i = 0; i < 10; i++) {
      Exhibicions.push(
        new Exhibicion(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
        )
      );
    }
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ExhibicionService);
  });

    it('should create ok', inject(
      [ExhibicionService],
      (service: ExhibicionService) => {
        expect(service).toBeTruthy();
      }
    ));


    it('if consume getExhibicionByArtistId returned Observable should match the right data', () => {
      service.getExhibitionsByMuseumId(102).subscribe((Exhibicions) => {
        expect(Exhibicions.length).toEqual(10);
      });
      const req = httpTestingController.expectOne(
        environment.baseUrl+'museums/102/exhibitions'
      );
      expect(req.request.method).toEqual('GET');
      req.flush(Exhibicions);
    });

  afterEach(() => {
    httpTestingController.verify();
  });
});
