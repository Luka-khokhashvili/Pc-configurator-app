import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, DropdownMenuComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() mainParts: string[] = [];
}
