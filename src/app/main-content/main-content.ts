import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-main-content',
  imports: [Hero, AboutMe, MySkills, CommonModule, Portfolio, Testimonials],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {}
