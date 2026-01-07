import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Testimonial } from '../../../models/testimonial.model';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials implements OnInit {
  languageService = inject(LanguageService);
  en: any;
  icons = this.languageService.icons.TESTIMONIALS;
  currentIndex = 0;
  arrTestimonials: { name: string; quote: string; img: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.languageService.lang.subscribe((lang) => {
      this.en =
        lang == 'en' ? this.languageService.en.TESTIMONIALS : this.languageService.de.TESTIMONIALS;
      this.arrTestimonials = [];
      this.buildTestimonials();
    });
  }

  buildTestimonials(): void {
    this.en.forEach((item: any, i: number) => {
      const testimonial = new Testimonial(item.NAME, item.QUOTE, this.icons[i]);
      this.arrTestimonials.push(testimonial);
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
