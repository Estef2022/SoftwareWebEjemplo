import { Artwork } from './../artwork/artwork';
export class Artist {
  id: number;
  name: string;
  image: string;
  birthplace: string;
  birthdate: string;
  artworks: Artwork[];

  constructor(id: number, name: string, image: string, birthplace:string, birthdate:string,  artworks:  Artwork[]){
    this.id =  id;
    this.name = name;
    this.image = image;
    this.birthplace =  birthplace;
    this.birthdate=  birthdate;
    this.artworks = artworks;
  }
}
