import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language-service';
import { FadeIn } from '../directives/fade-in';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FadeIn],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  languageService = inject(LanguageService);
  // icons = ['git_icon.svg', 'linkedin_icon.svg', 'email_icon.svg'];
  icons = this.languageService.icons.HERO;
}
