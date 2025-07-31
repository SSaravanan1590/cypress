import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-batsuite-wrapper',
  imports: [RouterOutlet],
  templateUrl: './batsuite-wrapper.html',
  styleUrl: './batsuite-wrapper.css',
  standalone: true
})
export class BatsuiteWrapper {
  constructor(public globalService: GlobalService) {
    setTimeout(() => {
      this.globalService.pageTitle = 'Batsuite';
    }, 100);
  }
}
