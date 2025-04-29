import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-dashboard-preview',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonComponent],
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css'],
})
export class DashboardPreviewComponent {}
