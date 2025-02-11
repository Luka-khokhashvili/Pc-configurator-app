import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, DropdownMenuComponent],
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
