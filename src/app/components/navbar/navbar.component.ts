import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { RouterLink } from '@angular/router';
import { SignButtonComponent } from './sign-button/sign-button.component';

@Component({
  selector: 'app-navbar',
  imports: [
    CommonModule,
    DropdownMenuComponent,
    RouterLink,
    SignButtonComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() mainParts: string[] = [];
}
