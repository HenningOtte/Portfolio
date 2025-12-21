import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  constructor() {}

  currentIndex = 0;

  testimonials: { name: string; quote: string; img: string }[] = [
    {
      name: 'V. Schuster - Team Partner',
      quote: `Henning really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
      img: 'michael_profil_img.png',
    },
    {
      name: 'E.Eichinger - Team Partner',
      quote: `Henning was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
      img: 'Eichinger_profil_img.png',
    },
    {
      name: 'I.Nuber - Frontend Engineer',
      quote: `It was a great pleasure to work with Michael. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.`,
      img: 'nuber_profil_img.png',
    },
  ];

  next() {
    if (this.currentIndex >= 2) return;
    this.currentIndex++;
  }

  prev() {
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
  }
}
