import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang = new BehaviorSubject('en');

  switchLang(lang: 'en' | 'de') {
    this.lang.next(lang);
  }

  checkLanguage(lang: string) {
    return lang == 'en' ? true : false;
  }
}
