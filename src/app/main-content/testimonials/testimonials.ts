import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Testimonial } from '../../../models/testimonial.model';
import { ICONS } from '../../config/icons.config';
import en from '../../assets/common.en.json';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit {
  constructor() {}

  en = en.TESTIMONIALS;
  icons = ICONS.TESTIMONIALS;
  currentIndex = 0;

  testimonials: { name: string; quote: string; img: string }[] = [];

  ngOnInit(): void {
    this.buildTestimonials();
  }

  buildTestimonials(): void {
    const testimonialsData = this.en;

    testimonialsData.forEach((item, i) => {
      const testimonial = new Testimonial(item.NAME, item.QUOTE, this.icons[i]);

      this.testimonials.push(testimonial);
    });
  }

  next() {
    if (this.currentIndex >= 2) return;
    this.currentIndex++;
  }

  prev() {
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
  }
}
