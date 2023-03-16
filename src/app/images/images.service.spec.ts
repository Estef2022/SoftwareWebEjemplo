import { faker } from '@faker-js/faker';
import { Image } from './image';
/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { ImagesService } from './images.service';
import { environment } from 'src/environments/environment';

let httpTestingController: HttpTestingController;
let service: ImagesService;
var images: Array<Image> = [];

describe('Service: Images', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ImagesService]
    });

    images = [];

    for (let i = 0; i < 5; i++) {
      images.push(
        new Image(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.datatype.number()
        )
      );
    }
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ImagesService);

  });

  it('should create ok', inject([ImagesService], (service: ImagesService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllImages', () => {
    it('if consume getAllImages returned Observable should match the right data', () => {
      service.getAllImages(1,1).subscribe((images) => {
        expect(images.length).toEqual(5);
      });

      const req = httpTestingController.expectOne(
        environment.baseUrl+'artists/1/artworks/1/images'
      );
​
      expect(req.request.method).toEqual('GET');
      req.flush(images);

    });
  });

  afterEach(() => {
    httpTestingController.verify();
  });

});
