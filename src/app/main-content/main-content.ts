import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from './hero/hero';
import { AboutMe } from './about-me/about-me';
import { MySkills } from './my-skills/my-skills';
import { Portfolio } from './portfolio/portfolio';

@Component({
  selector: 'app-main-content',
  imports: [Hero, AboutMe, MySkills, CommonModule, Portfolio],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss',
})
export class MainContent {}
