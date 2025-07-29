import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Dashboard';
    }, 100);
  }
}
