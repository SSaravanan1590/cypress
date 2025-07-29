import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-rollout-insights',
  imports: [],
  standalone: true,
  templateUrl: './rollout-insights.html',
  styleUrl: './rollout-insights.css'
})
export class RolloutInsights {
  constructor(public globalService: GlobalService) {
    this.globalService.headerTitlePage = 'Rollout Insights';
  }
}
