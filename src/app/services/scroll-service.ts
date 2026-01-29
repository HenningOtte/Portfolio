import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  target = new BehaviorSubject('');

  changeTarget(id: string) {
    this.target.next(id);
    this.scrollIntoView();
  }

  scrollIntoView() {
    const target = document.getElementById(this.target.value);
    target?.scrollIntoView();
  }
}
