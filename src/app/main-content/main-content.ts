import { Component, AfterViewInit, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { ScrollService } from '../services/scroll-service';

@Component({
  selector: 'app-main-content',
  imports: [Hero, AboutMe, MySkills, CommonModule, Portfolio, Testimonials, Contact],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent implements OnInit, AfterViewInit {
  scrollService = inject(ScrollService);
  element: any;

  ngOnInit(): void {
    this.scrollService.target.subscribe((target) => {});
  }

  ngAfterViewInit() {
    this.scrollService.scrollIntoView();
  }
}
