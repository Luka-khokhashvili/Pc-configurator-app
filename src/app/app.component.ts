import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome-section/welcome.component';
import { PartSelectorComponent } from './components/part-selector/part-selector.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    WelcomeComponent,
    PartSelectorComponent,
    NgFor,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pc-configurator-app';
  mainParts: string[] = [
    'cpu',
    'motherboard',
    'memory',
    'videoCard',
    'ssd',
    'hdd',
    'cooler',
    'case',
  ];
}
