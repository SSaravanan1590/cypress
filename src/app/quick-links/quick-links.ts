import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.css',
  imports: [CommonModule,RouterModule],
  encapsulation: ViewEncapsulation.None 
})
export class QuickLinks {
  quickLinks = [
    {
      Category: 'Home',
      CategoryBreak: '',
      SubCategory: [
        { Title: 'Layouts', Icon: 'icon-screen-desktop', path: '/home/layouts' },
        { Title: 'Dashboard', Icon: 'icon-screen-desktop', path: '/home/dashboard' }
      ]
    },
    {
      Category: 'Rollouts Insights /',
      CategoryBreak: 'Regression Tracker',
      SubCategory: [
        { Title: 'Rollout Insights', Icon: 'icon-user', path: '/rollouts/rollout-insights' },
        { Title: 'Regression Tracker', Icon: 'icon-settings', path: '/rollouts/regression-tracker' },
        { Title: 'Navigation Check', Icon: 'icon-settings', path: '/rollouts/navigation-check' }
      ]
    },
    {
      Category: 'BAT Suite Tracker',
      CategoryBreak: '',
      SubCategory: [
        { Title: 'Trigger Jobs', Icon: 'icon-user', path: '/batsuite/trigger-jobs' },
        { Title: 'Job Status', Icon: 'icon-settings', path: '/batsuite/job-status' },
        { Title: 'Consolidate Report', Icon: 'icon-settings', path: '/batsuite/consolidate-report' }
      ]
    }
  ];
}
