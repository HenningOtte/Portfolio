import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../services/language-service';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact implements OnInit {
  privacyPolicy: boolean = false;
  languageService = inject(LanguageService);

  http = inject(HttpClient);

  mailTest = true;

  contactData = {
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

  privacyChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);

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
        complete: () => console.info('send post complete'),
      });
    }
  }
}
