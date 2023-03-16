import { ArtworkListComponent } from './artwork/artwork-list/artwork-list.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Museo_listaComponent } from './museo/museo_lista/museo_lista.component';

describe('AppComponent', () => {
 beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [RouterTestingModule, HttpClientModule],
     declarations: [AppComponent, Museo_listaComponent, ArtworkListComponent],
   }).compileComponents();
 });

 it('should create the app', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app).toBeTruthy();
 });

 it(`should have as title 'museums-front'`, () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.title).toEqual('museums-front');
 });

});
