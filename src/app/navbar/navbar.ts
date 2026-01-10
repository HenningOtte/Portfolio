import { Component, inject, OnInit } from '@angular/core';
import { LanguageService } from '../services/language-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnInit {
  LanguageService = inject(LanguageService);

  ngOnInit(): void {}
}
