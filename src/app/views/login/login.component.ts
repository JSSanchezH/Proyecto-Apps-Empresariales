import { Component, ElementRef, ViewChild } from '@angular/core';
import { TopbarComponent } from '../../shared/topbar/topbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [TopbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('loginContainer') loginContainer!: ElementRef;

  toggleRegister(): void {
    this.loginContainer.nativeElement.classList.add('toggle');
  }

  toggleSignIn(): void {
    this.loginContainer.nativeElement.classList.remove('toggle');
  }

  ngOnInit(): void {
    // Toggle menu functionality
    const toggle = document.querySelector('.toggle');
    const container = document.querySelector('.container');
    const nav = document.querySelector('.nav');

    toggle?.addEventListener('click', () => {
      container?.classList.toggle('active');
      nav?.classList.toggle('active');
    });
  }
}
