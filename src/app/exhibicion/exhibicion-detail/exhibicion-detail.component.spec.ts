import { faker } from '@faker-js/faker';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExhibicionDetailComponent } from './exhibicion-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExhibicionDetail } from '../exhibicion-detail';

describe('ExhibicionDetailComponent', () => {
  let component: ExhibicionDetailComponent;
  let fixture: ComponentFixture<ExhibicionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ExhibicionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibicionDetailComponent);
    component = fixture.componentInstance;
    component.exhibicionDetail = new ExhibicionDetail(  faker.datatype.number(),
    faker.lorem.sentence(),
    faker.lorem.sentence());
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
