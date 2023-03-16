export class Museo {
 id: number;
 name: string;
 description: string;
 address: string;
 city: string;
 image: string;

   constructor(
    id: number,
    name: string,
    description: string,
    address: string,
    city: string,
    imagen: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.city = city;
    this.image = imagen;
    
 }

}
