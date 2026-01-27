import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language-service';
import { AppObserve } from '../../directives/app-observe';

@Component({
  selector: 'app-about-me',
  imports: [CommonModule, AppObserve],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnInit {
  languageService = inject(LanguageService);
  icons = this.languageService.icons.ABOUT_ME;
  aboutMe: any;

  ngOnInit() {
    this.languageService.lang.subscribe((lang) => {
      this.aboutMe =
        lang == 'en' ? this.languageService.en.ABOUT_ME : this.languageService.de.ABOUT_ME;
    });
  }
}
