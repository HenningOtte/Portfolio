import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import en from '../../assets/common.en.json';
import { ICONS } from '../../config/icons.config';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  aboutMe = en.ABOUT_ME;
  icons = ICONS.ABOUT_ME;

  ngOnInit(): void {
    console.log(this.aboutMe.POINTS[0]);
  }
}
