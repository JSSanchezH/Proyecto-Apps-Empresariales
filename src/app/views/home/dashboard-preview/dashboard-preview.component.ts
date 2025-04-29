import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-preview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-preview.component.html',
  styleUrls: ['./dashboard-preview.component.css'],
})
export class DashboardPreviewComponent {}
