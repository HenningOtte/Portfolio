import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.html',
  styleUrl: './my-skills.scss',
})
export class MySkills implements OnInit {
  languageService = inject(LanguageService);
  MySkills: any;
  icons = this.languageService.icons.MY_SKILLS;

  hover: Boolean = false;

  ngOnInit() {
    this.languageService.lang.subscribe((lang) => {
      this.MySkills =
        lang == 'en' ? this.languageService.en.MY_SKILLS : this.languageService.de.MY_SKILLS;
    });
  }

  toggleImg(toggle: boolean) {
    this.hover = toggle;
  }
}
