import { Component } from '@angular/core';
import { InputFieldComponent } from '../../../shared/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule, InputFieldComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  inputs = [
    {
      iconClass: 'bx bxs-user',
      type: 'text',
      placeholder: 'Username',
    },
    {
      iconClass: 'bx bx-lock-alt',
      type: 'password',
      placeholder: 'Password',
    },
  ];
}
