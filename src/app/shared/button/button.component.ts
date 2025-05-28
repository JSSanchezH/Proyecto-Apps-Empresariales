import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() routerLink: string = '';
  @Input() buttonSize: string = 'medium';

  handleClick(): void {
    if (this.routerLink) {
      window.location.href = this.routerLink;
    }
  }
}
