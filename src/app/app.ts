import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuickLinks } from "./quick-links/quick-links";
import { Header } from './_includes/header/header';
import { Footer } from './_includes/footer/footer';
import { HomeWrapper } from './utilities/home-wrapper/home-wrapper';
import { RolloutsWrapper } from './utilities/rollouts-wrapper/rollouts-wrapper';
import { BatsuiteWrapper } from './utilities/batsuite-wrapper/batsuite-wrapper';
import { RolloutInsights } from './utilities/rollouts/rollout-insights/rollout-insights';
import { RegressionTracker } from './utilities/rollouts/regression-tracker/regression-tracker';
import { NavigationCheck } from './utilities/rollouts/navigation-check/navigation-check';
import { TriggerJobs } from './utilities/batsuite/trigger-jobs/trigger-jobs';
import { JobStatus } from './utilities/batsuite/job-status/job-status';
import { ConsolidatedReport } from './utilities/batsuite/consolidated-report/consolidated-report';

import { GlobalService } from './global.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuickLinks, Header, Footer,HomeWrapper,RolloutsWrapper,BatsuiteWrapper,RolloutInsights,RegressionTracker,NavigationCheck,TriggerJobs,JobStatus,ConsolidatedReport],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('cypress');

  constructor(public GlobalService: GlobalService) {
    this.GlobalService.headerTitlePage = '';
  }
}
