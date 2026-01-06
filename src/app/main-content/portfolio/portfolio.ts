import { Component, OnInit } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';
import en from '../../assets/common.en.json';
import { ICONS } from '../../config/icons.config';
import { cardTemplate } from '../../../models/card.model';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  portfolio = en.PORTFOLIO;
  icons = ICONS.PORTFOLIO;
  projects: { name: string; techstack: string[]; description: string; img: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.buildProjectCards();
  }

  buildProjectCards() {
    this.portfolio.forEach((project, i) => {
      let card = new cardTemplate(
        project.TITLE,
        project.TECHSTACK,
        project.DESCRIPTION,
        this.icons[i]
      );

      this.projects.push(card);
    });
  }

  flexDirection(i: boolean) {
    return i == true ? 'row-reverse' : 'row';
  }
}
