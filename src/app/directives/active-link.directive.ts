import { Directive } from '@angular/core';

@Directive({
  selector: '[appActiveLink]',
  standalone: true
})
export class ActiveLinkDirective {

  constructor() { }

}
