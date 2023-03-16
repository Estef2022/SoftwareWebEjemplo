/* tslint:disable:no-unused-variable */
​
import { TestBed, async, inject } from '@angular/core/testing';
import { MuseoService } from '../museo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Museo } from '../museo';
import { faker } from '@faker-js/faker';
import { environment } from 'src/environments/environment';

let httpTestingController: HttpTestingController;
let service: MuseoService;
var museos: Array<Museo> = [];

describe('Service: Museo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MuseoService],
    });
    museos = [];

    for (let i = 0; i < 5; i++) {
      museos.push(
        new Museo(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.image.imageUrl()
        )
      );

      // We inject our service (which imports the HttpClient) and the Test Controller
      httpTestingController = TestBed.get(HttpTestingController);
      service = TestBed.get(MuseoService);
    }
  });
​
  it('should ...', inject([MuseoService], (service: MuseoService) => {
    expect(service).toBeTruthy();
  }));
​
  describe('#getMuseoList', () => {
    it('returned Observable should match the right data', () => {
      service.getMuseoList().subscribe((museos) => {
        expect(museos.length).toEqual(5);
      });
​
      const req = httpTestingController.expectOne(
        environment.baseUrl+'museums'
      );
​
      expect(req.request.method).toEqual('GET');
​
      req.flush(museos);
    });
  });
​
  afterEach(() => {
    httpTestingController.verify();
  });
});
