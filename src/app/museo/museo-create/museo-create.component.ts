import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Museo_listaComponent } from '../museo_lista/museo_lista.component';
import { MuseoService } from '../museo.service';
import { Museum } from 'src/app/artwork/artwork';

@Component({
  selector: 'app-museo-create',
  templateUrl: './museo-create.component.html',
  styleUrls: ['./museo-create.component.css']
})

export class MuseoCreateComponent implements OnInit {

  museumForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private museoService: MuseoService
  ) { }

  createMuseum(museum: Museum){
    console.log("Create museum: "+ museum);
    this.museoService.createMuseum (museum).subscribe((museum: any)=>{
    console.info("The museum was created: ", museum)
    this.toastr.success("Confirmation", "Museum created")
    this.museumForm.reset();
  })
}

  cancelCreation(){
    this.museumForm.reset();
 }


  ngOnInit() {
    this.museumForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      city: ["", Validators.required],
      address: ["", Validators.required],
      image: ["", Validators.required],
      description: ["", [Validators.required, Validators.maxLength(500)]]
    })
  }

}

