import { ImageModule } from './images/image.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtworkModule } from './artwork/artwork.module';
import { ExhibicionModule } from './exhibicion/exhibicion.module';
import { MuseoModule } from './museo/museo.module';
import { ArtworkRoutingModule } from './artwork/artwork-routing.module';
import { MuseoRoutingModule } from './museo/museo.routing';
import { ExhibicionRoutingModule } from './exhibicion/exhibicion-routing.module';
import { HttpErrorInterceptorService } from './interceptors/httpErrorInterceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArtistModule } from './artist/artist.module';
import { ArtistRoutingModule } from './artist/artist-routing.module';
import { ImageRoutingModule } from './images/image-routing.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArtworkModule,
    HttpClientModule,
    ExhibicionModule,
    HttpClientModule,
    AppRoutingModule,
    MuseoModule,
    ArtworkRoutingModule,
    MuseoRoutingModule,
    ArtistRoutingModule,
    ArtistModule,
    ExhibicionRoutingModule,
    ImageRoutingModule,
    ImageModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
