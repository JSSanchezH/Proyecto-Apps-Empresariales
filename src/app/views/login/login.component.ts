import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('loginContainer') loginContainer!: ElementRef;

  toggleLogin() {
    if (this.loginContainer) {
      this.loginContainer.nativeElement.classList.toggle('toggle');
    }
  }
}
