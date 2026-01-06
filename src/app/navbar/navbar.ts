import { Component, inject } from '@angular/core';
import { LanguageService } from '../services/language-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  LanguageService = inject(LanguageService);
}
