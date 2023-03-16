import { Image } from 'src/app/images/image';
import { ArtistService } from './../../artist/artist.service';
import { Artwork } from 'src/app/artwork/artwork';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-create',
  templateUrl: './image-create.component.html',
  styleUrls: ['./image-create.component.css']
})
export class ImageCreateComponent implements OnInit {

  imageForm!: FormGroup;
  artworkId:  number = 0;
  artistId:  number = 0;
  nameArtwork: string = '';
  artworkSelected!: Artwork;

  constructor( private formBuilder: FormBuilder,private route: ActivatedRoute,
    private toastr: ToastrService, private artistService : ArtistService ) { }

  ngOnInit() {
    this.route.params.subscribe( prm => {
       this.nameArtwork = prm['name'];
        this.artistId = prm['artistId'];
        this.artworkId = prm['artworkId'];
      });

    this.imageForm = this.formBuilder.group({
      source: ["", [Validators.required]],
      altText: ["", [Validators.required]],
      height: ["", Validators.required],
      width: ["", Validators.required]
    })
  }

  cancelCreation(){
    this.imageForm.reset();
 }

 assignImageToArtwork(image: Image){

  this.artistService.createImage(image,this.artistId,this.artworkId).subscribe(image=>{
    console.info("The image was created: ", image)
    this.toastr.success("Confirmation", "Image assign to artwork")
    this.imageForm.reset();
  })

}

}
