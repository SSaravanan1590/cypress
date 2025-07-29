import { Component } from '@angular/core';
import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-layouts',
  imports: [],
  standalone: true,
  templateUrl: './layouts.html',
  styleUrl: './layouts.css'
})
export class Layouts {
  constructor(public globalService: GlobalService) {
    this.globalService.headerTitlePage = 'Layouts';
  }
}
