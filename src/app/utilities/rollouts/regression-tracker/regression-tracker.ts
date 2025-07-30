import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-regression-tracker',
  imports: [],
  templateUrl: './regression-tracker.html',
  styleUrl: './regression-tracker.css'
})
export class RegressionTracker {
constructor(public globalService: GlobalService) {
  setTimeout(() => {
    this.globalService.headerTitlePage = 'Regression Tracker';    
  }, 100);
  }
}
