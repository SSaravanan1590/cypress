import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from '../../global.service';
@Component({
  selector: 'app-rollouts-wrapper',
  imports: [RouterOutlet],
  templateUrl: './rollouts-wrapper.html',
  styleUrl: './rollouts-wrapper.css'
})
export class RolloutsWrapper {
  constructor(public globalService: GlobalService) {
    this.globalService.pageTitle = 'Rollouts / Regression';
  }
}
