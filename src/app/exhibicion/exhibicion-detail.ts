import { Artwork } from "../artwork/artwork";
import { Exhibicion } from "./exhibicion";

export class ExhibicionDetail extends Exhibicion{
  artWorks: Array<Artwork> = [];

  constructor(id:number, name:string, description: string) {
    super(id, name, description)
  }


}
