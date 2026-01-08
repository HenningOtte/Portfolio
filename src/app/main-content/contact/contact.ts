import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language-service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  privacyPolicy: boolean = false;
  languageService = inject(LanguageService);
  name: string = '';
  email: string = '';
  message: string = '';
  contact: any;

  constructor() {}

  ngOnInit(): void {
    this.languageService.lang.subscribe((lang) => {
      this.contact =
        lang == 'en' ? this.languageService.en.CONTACT : this.languageService.de.CONTACT;
    });
  }

  privacyChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);

    const checkbox: any = document.querySelector('.privacy-container')?.children[0];
    this.privacyPolicy = checkbox.checked;
  }
}
