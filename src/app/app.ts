import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuickLinks } from "./quick-links/quick-links";
import { Header } from './_includes/header/header';
import { Footer } from './_includes/footer/footer';

import { GlobalService } from './global.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuickLinks, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly title = signal('cypress');

  constructor(public GlobalService: GlobalService) {
    this.GlobalService.headerTitlePage = '';
  }
}
