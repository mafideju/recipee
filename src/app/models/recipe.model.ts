export class Recipe {
  name: string;
  description: string;
  image: string;

  constructor(
    name: string,
    descritpion: string,
    image: string
  ) {
    this.name = name;
    this.description = descritpion;
    this.image = image;
  }
}
