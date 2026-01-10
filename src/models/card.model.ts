export class Card {
  name;
  techstack;
  description;
  img;
  links: { live: string; github: string };

  constructor(
    name: string,
    techstack: string[],
    description: string,
    img: string,
    live: string,
    github: string
  ) {
    this.name = name;
    this.techstack = techstack;
    this.description = description;
    this.img = img;
    this.links = {
      live: live,
      github: github,
    };
  }
}
