import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-consolidated-report',
  imports: [],
  templateUrl: './consolidated-report.html',
  styleUrl: './consolidated-report.css'
})
export class ConsolidatedReport {
  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Consolidated Report';
    }, 100);
  }
}
