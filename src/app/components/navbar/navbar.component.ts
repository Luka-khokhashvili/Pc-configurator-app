import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  mainParts: string[] = [
    'CPU',
    'Motherboard',
    'RAM',
    'GPU',
    'SSD',
    'HDD',
    'CPU Cooler',
    'Case',
  ];
  Peripherals: string[] = ['Monitor', 'Keyboard', 'Mouse', 'Headset'];
}
