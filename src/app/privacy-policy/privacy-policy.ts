import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language-service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements OnInit {
  languageService = inject(LanguageService);
  privacyText: any;

  ngOnInit(): void {
    this.scrollUp();
    this.subscribeLanguageService();
  }

  scrollUp() {
    const privacy = document.getElementById('privacy');
    privacy?.scrollIntoView();
  }

  subscribeLanguageService() {
    this.languageService.lang.subscribe((lang) => {
      this.privacyText =
        lang == 'en'
          ? this.languageService.en.PRIVACYPOLICY
          : this.languageService.de.PRIVACYPOLICY;
    });
  }
}
