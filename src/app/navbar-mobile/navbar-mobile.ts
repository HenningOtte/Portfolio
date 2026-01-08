import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language-service';

@Component({
  selector: 'app-navbar-mobile',
  imports: [CommonModule],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.scss',
})
export class NavbarMobile {
  isMenuOpen = false;
  LanguageService = inject(LanguageService);

  constructor() {}

  toggleMenu() {
    this.isMenuOpen ? (this.isMenuOpen = false) : (this.isMenuOpen = true);
  }
}
