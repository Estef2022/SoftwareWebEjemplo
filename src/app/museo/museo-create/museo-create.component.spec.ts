/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MuseoCreateComponent } from './museo-create.component';
import { MuseoService } from '../museo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';




imports: [ReactiveFormsModule, ToastrModule.forRoot(), HttpClientModule]

describe('ArtistCreateComponent', () => {
  let component: MuseoCreateComponent;
  let fixture: ComponentFixture<MuseoCreateComponent>;
  let debug: DebugElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ MuseoCreateComponent ],
      providers: [MuseoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


});


