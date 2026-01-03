import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  privacyPolicy: boolean = false;
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() {}

  privacyChecked(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);

    const checkbox: any = document.querySelector('.privacy-container')?.children[0];
    this.privacyPolicy = checkbox.checked;
  }
}
