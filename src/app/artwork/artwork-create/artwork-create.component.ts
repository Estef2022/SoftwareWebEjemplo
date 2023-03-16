import { ArtistService } from './../../artist/artist.service';
import { ArtworkService } from './../artwork-list/artwork.service';
import { Artwork , ArtworkType } from './../artwork';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Artist } from 'src/app/artist/artist';

@Component({
  selector: 'app-artwork-create',
  templateUrl: './artwork-create.component.html',
  styleUrls: ['./artwork-create.component.css']
})
export class ArtworkCreateComponent implements OnInit {

  artworkForm!: FormGroup;
  artworkTypes = ArtworkType;
  artistId:  number = 0;
  artistList : Array<Artist> = [];

  constructor(  private formBuilder: FormBuilder,
   private toastr: ToastrService, private artworkService : ArtworkService,  private artistService : ArtistService) { }

   ngOnInit() {
    this.getAllArtist();
    this.artworkForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.maxLength(25)]],
      year: ["", [Validators.required]],
      type: ["Painting", Validators.required],
      description: ["", Validators.required],
      mainImage: ["", Validators.required]
    })
  }

  createArtwork(artwork: Artwork){

    this.artworkService.createArtwork(artwork,this.artistId).subscribe(artwork=>{
      console.info("The artwork was created: ", artwork)
      this.toastr.success("Confirmation", "Artwork created")
      this.artworkForm.reset();
    })

  }

  cancelCreation(){
    this.artworkForm.reset();
 }

 getAllArtist():void {
   this.artistService.getAllArtist().subscribe(artist => {
   this.artistList =  artist;
   console.log("# Artist : ", this.artistList);
 });
}

artistFilter(event: any) {
  this.artistId = event.target.value;
  console.log("Artista seleccionado : ",this.artistId);
}

}
