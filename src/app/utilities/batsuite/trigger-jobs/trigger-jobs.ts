import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-trigger-jobs',
  imports: [],
  templateUrl: './trigger-jobs.html',
  styleUrl: './trigger-jobs.css'
})
export class TriggerJobs {
  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Trigger Jobs';
    }, 100);
  }
} 
