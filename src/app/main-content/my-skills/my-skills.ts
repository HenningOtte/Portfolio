import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import en from '../../assets/common.en.json';
import de from '../../assets/common.de.json';
import { ICONS } from '../../config/icons.config';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills implements OnInit {
  languageService = inject(LanguageService);
  MySkills = en.MY_SKILLS;
  icons = ICONS.MY_SKILLS;

  hover: Boolean = false;

  ngOnInit() {
    this.languageService.lang.subscribe((lang) => {
      this.MySkills = lang == 'en' ? en.MY_SKILLS : de.MY_SKILLS;
    });
  }

  toggleImg(toggle: boolean) {
    this.hover = toggle;
  }
}
