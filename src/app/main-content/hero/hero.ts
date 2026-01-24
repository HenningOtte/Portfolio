import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit {
  // icons = ['git_icon.svg', 'linkedin_icon.svg', 'email_icon.svg'];

  languageService = inject(LanguageService);
  icons = this.languageService.icons.HERO;
  hero: any;

  ngOnInit(): void {
    this.languageService.lang.subscribe((lang) => {
      this.hero = lang == 'en' ? this.languageService.en.HERO : this.languageService.de.HERO;
    });
  }
}
