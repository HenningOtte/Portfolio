import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import en from '../assets/common.en.json';
import de from '../assets/common.de.json';
import { ICONS } from '../config/icons.config';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang = new BehaviorSubject('en');
  en = en;
  de = de;
  icons = ICONS;

  switchLang(lang: 'en' | 'de') {
    this.lang.next(lang);
  }

  checkLanguage(lang: string) {
    console.log(lang);
    
    return lang == 'en' ? true : false;
  }
}
