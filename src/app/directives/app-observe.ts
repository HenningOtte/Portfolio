import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appAppObserve]',
})
export class AppObserve implements AfterViewInit {
  private observer!: IntersectionObserver;

  @Input('appAppObserve') newClass: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      root: null,
      rootMargin: '0px',
      scrollMargin: '0px',
      threshold: 1,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add(this.newClass);
          this.observer.disconnect();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }
}
