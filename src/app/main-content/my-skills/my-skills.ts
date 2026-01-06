import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import en from '../../assets/common.en.json';
import { ICONS } from '../../config/icons.config';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills {
  MySkills = en.MY_SKILLS;
  ICONS = ICONS.MY_SKILLS;

  hover: Boolean = false;

  toggleImg(toggle: boolean) {
    this.hover = toggle;
  }
}
