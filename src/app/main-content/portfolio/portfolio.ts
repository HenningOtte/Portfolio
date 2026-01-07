import { Component, OnInit, inject } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';
import { Card } from '../../../models/card.model';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio implements OnInit {
  languageService = inject(LanguageService);
  portfolio: any;
  icons = this.languageService.icons.PORTFOLIO;
  projects: { name: string; techstack: string[]; description: string; img: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.languageService.lang.subscribe((lang) => {
      this.portfolio =
        lang == 'en' ? this.languageService.en.PORTFOLIO : this.languageService.de.PORTFOLIO;
      this.buildProjectCards();
    });
  }

  buildProjectCards() {
    this.projects = [];
    this.portfolio.CARDS.forEach((project: any, i: number) => {
      let card = new Card(project.TITLE, project.TECHSTACK, project.DESCRIPTION, this.icons[i]);
      this.projects.push(card);
    });
  }

  flexDirection(i: boolean) {
    return i == true ? 'row-reverse' : 'row';
  }
}
