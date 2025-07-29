import { Routes } from '@angular/router';

//Components
import { QuickLinks } from './quick-links/quick-links';
import { Layouts } from './utilities/common/layouts/layouts';
import { Dashboard } from './utilities/common/dashboard/dashboard';
import { RolloutInsights } from './utilities/rollouts/rollout-insights/rollout-insights';
import { RegressionTracker } from './utilities/rollouts/regression-tracker/regression-tracker';
import { NavigationCheck } from './utilities/rollouts/navigation-check/navigation-check';
import { TriggerJobs } from './utilities/batsuite/trigger-jobs/trigger-jobs';
import { JobStatus } from './utilities/batsuite/job-status/job-status';
import { ConsolidatedReport } from './utilities/batsuite/consolidated-report/consolidated-report';
import { HomeWrapper } from './utilities/home-wrapper/home-wrapper';
import { RolloutsWrapper } from './utilities/rollouts-wrapper/rollouts-wrapper';
import { BatsuiteWrapper } from './utilities/batsuite-wrapper/batsuite-wrapper';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeWrapper, // acts as the shell with <router-outlet>
    children: [
      { path: 'layouts', component: Layouts },
      { path: 'dashboard', component: Dashboard },
      { path: '', redirectTo: 'layouts', pathMatch: 'full' } // default route
    ]
  },
  {
    path: 'rollouts',
    component: RolloutsWrapper, // reuse shell or use separate layout
    children: [
      { path: 'rollout-insights', component: RolloutInsights },
      { path: 'regression-tracker', component: RegressionTracker },
      { path: 'navigation-check', component: NavigationCheck },
      { path: '', redirectTo: 'rollout-insights', pathMatch: 'full' }
    ]
  },
  {
    path: 'batsuite',
    component: BatsuiteWrapper,
    children: [
      { path: 'trigger-jobs', component: TriggerJobs },
      { path: 'job-status', component: JobStatus },
      { path: 'consolidate-report', component: ConsolidatedReport },
      { path: '', redirectTo: 'trigger-jobs', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'home/layouts', pathMatch: 'full' },

  // Redirect unknown paths to home/layouts
  { path: '**', redirectTo: 'home/layouts' }
];
