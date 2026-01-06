import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import en from '../../assets/common.en.json';
import de from '../../assets/common.de.json';
import { ICONS } from '../../config/icons.config';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnInit {
  languageService = inject(LanguageService);
  icons = ICONS.ABOUT_ME;
  aboutMe = en.ABOUT_ME;

  ngOnInit() {
    this.languageService.lang.subscribe((lang) => {
      this.aboutMe = lang == 'en' ? en.ABOUT_ME : de.ABOUT_ME;
    });
  }
}
