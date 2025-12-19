import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCard, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss',
})
export class Portfolio {
  projects: { name: string; techstack: string[]; description: string, img: string }[] = [
    {
      name: 'Join',
      techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        img: 'join_laptop_mockup',
    },
    {
      name: '1-Bit Horror Game',
      techstack: ['JavaScript', 'CSS', 'HTML'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        img: 'join_laptop_mockup',
    },
    {
      name: 'Join',
      techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        img: 'join_laptop_mockup',
    },
    {
      name: 'Join',
      techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        img: 'join_laptop_mockup',
    },
  ];
}
