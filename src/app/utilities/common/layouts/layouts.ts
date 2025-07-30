import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layouts.html',
  styleUrl: './layouts.css',
  encapsulation: ViewEncapsulation.None
})
export class Layouts {
  quickLinks = [
    {
      Category: 'Rollouts',
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
        { Title: 'Consolidated Report', Icon: 'icon-settings', path: '/batsuite/consolidate-report' }
      ]
    }
  ];
  constructor(public globalService: GlobalService,private router: Router) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Layouts';
    }, 100);
  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
