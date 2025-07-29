import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-job-status',
  imports: [],
  templateUrl: './job-status.html',
  styleUrl: './job-status.css'
})
export class JobStatus {
  constructor(public globalService: GlobalService) {
      this.globalService.headerTitlePage = 'Job Status';
    }
}
