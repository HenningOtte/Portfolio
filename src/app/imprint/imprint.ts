import { Component, OnInit, inject, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language-service';
import { ScrollService } from '../services/scroll-service';

@Component({
  selector: 'app-imprint',
  imports: [RouterLink],
  templateUrl: './imprint.html',
  styleUrl: './imprint.scss',
})
export class Imprint implements OnInit, AfterViewInit {
  languageService = inject(LanguageService);
  scrollService = inject(ScrollService);
  legalText: any;

  ngOnInit(): void {
    this.scrollUp();
    this.subscribeLanguageService();
  }

  ngAfterViewInit(): void {
    this.loadMainText();
  }

  scrollUp() {
    const privacy = document.getElementById('imprint');
    privacy?.scrollIntoView();
  }

  subscribeLanguageService() {
    this.languageService.lang.subscribe((lang) => {
      this.legalText =
        lang == 'en' ? this.languageService.en.LEGALNOTICE : this.languageService.de.LEGALNOTICE;
    });
  }

  loadMainText() {
    let elementCollection = document.getElementsByClassName('main-text');
    const words = ['Portfolio', 'Developer Akademie GmbH', 'Henning Otte'];

    for (let i = 0; i < elementCollection.length; i++) {
      let text: string = elementCollection[i].innerHTML;

      words.forEach((word) => {
        text = text.replaceAll(word, `<span style="color: #9747ff">${word}</span>`);
      });

      elementCollection[i].innerHTML = text;
    }
  }
}
