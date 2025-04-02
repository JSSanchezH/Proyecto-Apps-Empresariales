import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appActiveLink]'
})
export class ActiveLinkDirective {
  constructor(private el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    const items = document.querySelectorAll('.nav li');
    items.forEach(item => item.classList.remove('active'));
    this.el.nativeElement.classList.add('active');
  }
  
}
