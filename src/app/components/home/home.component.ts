import { Component } from '@angular/core';
import { PartSelectorComponent } from '../part-selector/part-selector.component';
import { WelcomeComponent } from '../welcome-section/welcome.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    PartSelectorComponent,
    WelcomeComponent,
    NavbarComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {  
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
