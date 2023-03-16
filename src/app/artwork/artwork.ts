import { Artist } from "../artist/artist";
import { Image } from "../images/image";

export enum ArtworkType {
  PAINTING  = "Painting",
  SCULPTURE = "Sculpture",
  OBJECT = "Object"
}

export class Artwork {
  id: number;
  name : string;
  year: number;
  description: string;
  type: ArtworkType;
  mainImage: string;
  images: Image[];
  artist: Artist;

  constructor( id: number,
    name : string,
    year: number,
    description: string,
    type: ArtworkType,
    mainImage: string,
    images: Image[],
    artist: Artist)
    {
      this.id = id;
      this.name =  name;
      this.year =  year;
      this.description = description;
      this.mainImage = mainImage;
      this.type = type;
      this.images = images;
      this.artist = artist;
    }
}

export class Museum {
  name: string;
  city: string;
  image: string;
  artworks: Artwork[];

  constructor( artworks : Artwork[], name:string, city: string, image: string){
    this.name = name;
    this.city =  city;
    this.image = image;
    this.artworks = artworks;
  }

}
