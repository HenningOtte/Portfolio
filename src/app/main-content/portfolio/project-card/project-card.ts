import { Component, Input } from '@angular/core';
import { AppObserve } from '../../../directives/app-observe';

@Component({
  selector: 'app-project-card',
  imports: [AppObserve],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input() direction: 'row-reverse' | 'row' = 'row-reverse';

  @Input() card: {
    name: string;
    techstack: string[];
    description: string;
    img: string;
    links: { live: string; github: string };
  } = {
    name: 'Join',
    techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    img: 'join_laptop_mockup.png',
    links: {
      live: 'https://henningotte.github.io/6-join/',
      github: 'https://github.com/HenningOtte/Join-Open-source-task-management-for-teams',
    },
  };

  constructor() {}
}
