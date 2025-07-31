import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemoveSpecialCharsPipe } from '../pipes/remove-special-chars-pipe';

@Component({
  selector: 'app-quick-links',
  standalone: true,
  templateUrl: './quick-links.html',
  styleUrl: './quick-links.css',
  imports: [CommonModule, RouterModule],
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
        { Title: 'Consolidated Report', Icon: 'icon-settings', path: '/batsuite/consolidated-report' }
      ]
    }
  ];

  activeIndex: number | null = null;
  selectedPath: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedPath = event.urlAfterRedirects;
        this.setActiveIndexByPath(this.selectedPath);
      }
    });
  }

  toggleMenu(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  setActiveIndexByPath(path: string) {
    this.quickLinks.forEach((section, index) => {
      const match = section.SubCategory.find(item => item.path === path);
      if (match) {
        this.activeIndex = index;
      }
    });
  }

  setSelectedPath(path: string) {
    this.selectedPath = path;
  }
}
