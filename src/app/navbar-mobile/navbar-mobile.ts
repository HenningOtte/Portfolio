import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language-service';
import { ScrollService } from '../services/scroll-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.scss',
})
export class NavbarMobile implements OnInit {
  isMenuOpen = false;
  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);
  navbarLinks: any;

  constructor() {}

  ngOnInit(): void {
    this.subscribeLanguageService();
  }

  subscribeLanguageService() {
    this.languageService.lang.subscribe((lang) => {
      this.navbarLinks = lang == 'en' ? this.languageService.en.NAV : this.languageService.de.NAV;
    });
  }

  toggleMenu() {
    this.isMenuOpen ? (this.isMenuOpen = false) : (this.isMenuOpen = true);
  }
}
