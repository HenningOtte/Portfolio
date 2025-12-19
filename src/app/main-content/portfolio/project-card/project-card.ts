import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  constructor() {}

  @Input() direction: 'row-reverse' | 'row' = 'row-reverse';

  @Input() card: { name: string; techstack: string[]; description: string; img: string } = {
    name: 'Join',
    techstack: ['JavaScript', 'CSS', 'HTML', 'Firebase'],
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    img: 'join_laptop_mockup.png',
  };
}
