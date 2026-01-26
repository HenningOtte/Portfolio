import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAppObserve]',
})
export class AppObserve implements AfterViewInit {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      scrollMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.style.background = 'yellow';
          this.observer.disconnect();
        }
      });
    }, options);

    observer.observe(this.el.nativeElement);
  }
}
