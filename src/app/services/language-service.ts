import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import en from '../assets/common.en.json';
import de from '../assets/common.de.json';
import { ICONS } from '../config/icons.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService implements OnInit {
  lang = new BehaviorSubject('en');
  en = en;
  de = de;
  icons = ICONS;

  ngOnInit(): void {}

  switchLang(lang: 'en' | 'de') {
    this.lang.next(lang);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    const languageService = {
      language: this.lang.value,
    };
    localStorage.setItem('languageService', JSON.stringify(languageService));
  }

  async loadLocalStorage() {
    let local = localStorage.getItem('languageService');

    if (typeof local != 'string') return;

    let myLocal = JSON.parse(local);
    this.switchLang(myLocal.language);
  }

  checkLanguage() {
    // return lang == 'en' ? true : false;
  }
}
