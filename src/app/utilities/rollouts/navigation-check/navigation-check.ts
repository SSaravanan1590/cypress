import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';
@Component({
  selector: 'app-navigation-check',
  imports: [],
  templateUrl: './navigation-check.html',
  styleUrl: './navigation-check.css'
})
export class NavigationCheck {
  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.headerTitlePage = 'Navigation Check';
    }, 100);
  }
}
