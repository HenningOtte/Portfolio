import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  icons: { name: string; path: string }[] = [
    { name: 'html', path: 'html_icon.svg' },
    { name: 'css', path: 'css_icon.svg' },
    { name: 'JavaScript', path: 'js_icon.svg' },
    { name: 'TypeScript', path: 'ts_icon.svg' },
    { name: 'Angular', path: 'angular_icon.svg' },
    { name: 'Firebase', path: 'firebase_icon.svg' },
    { name: 'Git', path: 'git_icon.svg' },
    { name: 'REST-API', path: 'api_icon.svg' },
    { name: 'Scrum', path: 'scrum_icon.svg' },
    { name: 'Material<br>Design', path: 'material_icon.svg' },
    { name: 'Continually learning', path: 'continually_icon.svg' },
  ];

  hover: Boolean = false;

  toggleImg(toggle: boolean) {
    this.hover = toggle;
  }
}
