import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language-service';
import { ScrollService } from '../services/scroll-service';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy implements OnInit {
  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);
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
