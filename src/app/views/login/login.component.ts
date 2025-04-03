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

  toggleRegister(): void {
    this.loginContainer.nativeElement.classList.add('toggle');
  }

  toggleSignIn(): void {
    this.loginContainer.nativeElement.classList.remove('toggle');
  }
}