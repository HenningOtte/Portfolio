export class Card {
  name;
  techstack;
  description;
  img;

  constructor(name: string, techstack: string[], description: string, img: string) {
    this.name = name;
    this.techstack = techstack;
    this.description = description;
    this.img = img;
  }
}
