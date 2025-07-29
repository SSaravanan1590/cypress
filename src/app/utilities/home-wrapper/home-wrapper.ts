import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-home-wrapper',
  imports: [RouterOutlet],
  templateUrl: './home-wrapper.html',
  styleUrl: './home-wrapper.css'
})
export class HomeWrapper {
constructor(public globalService: GlobalService) {
    this.globalService.pageTitle = 'Home';
  }
}
