import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../services/scroll-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);
  navbarLinks: any;

  constructor() {}

  ngOnInit(): void {
    this.languageService.loadLocalStorage();
    this.subscribeLanguageService();
  }

  subscribeLanguageService() {
    this.languageService.lang.subscribe((lang) => {
      this.navbarLinks = lang == 'en' ? this.languageService.en.NAV : this.languageService.de.NAV;
    });
  }
}
