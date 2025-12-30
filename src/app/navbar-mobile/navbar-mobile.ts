import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-mobile',
  imports: [CommonModule],
  templateUrl: './navbar-mobile.html',
  styleUrl: './navbar-mobile.scss',
})
export class NavbarMobile {
  isMenuOpen = false;

  constructor() {}

  toggleMenu() {
    this.isMenuOpen ? (this.isMenuOpen = false) : (this.isMenuOpen = true);
  }
}
