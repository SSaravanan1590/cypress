import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public GlobalService: GlobalService) {
    this.GlobalService.headerTitlePage = 'Home Page';
  }
}
