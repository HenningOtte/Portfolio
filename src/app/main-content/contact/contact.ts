import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../services/language-service';
import { HttpClient } from '@angular/common/http';
import { EventType, RouterLink } from '@angular/router';
import { AppObserve } from '../../directives/app-observe';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterLink, AppObserve],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  privacyPolicy: boolean = false;
  languageService = inject(LanguageService);

  http = inject(HttpClient);

  mailTest = true;
  isMessageVisible = signal(false);

  contactData: { name: string; email: string; message: string; privacyAccepted: boolean } = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };
  contact: any;

  constructor() {}

  ngOnInit(): void {
    this.languageService.lang.subscribe((lang) => {
      this.contact =
        lang == 'en' ? this.languageService.en.CONTACT : this.languageService.de.CONTACT;
    });
  }

  trimWhitespace(e: any) {
    const keys: ['name', 'message', 'email'] = ['name', 'message', 'email'];
    keys.forEach((key) => {
      if (key === e.target.id) {
        console.log(e.target.value);
        this.contactData[key] = e.target.value.trim();
      }
    });
  }

  privacyChecked(event: Event) {
    const target = event.target as HTMLInputElement;

    const checkbox: any = document.querySelector('.privacy-container')?.children[0];
    this.privacyPolicy = checkbox.checked;
  }

  post = {
    endPoint: 'https://henningotte-code.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => this.showSuccessMessage(),
      });
    }
  }

  showSuccessMessage() {
    this.isMessageVisible.set(true);

    setTimeout(() => {
      this.isMessageVisible.set(false);
    }, 2000);
  }
}
