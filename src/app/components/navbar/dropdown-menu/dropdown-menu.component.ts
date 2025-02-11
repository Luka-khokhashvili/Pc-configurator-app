import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  imports: [NgFor],
  templateUrl: './dropdown-menu.component.html',
  styleUrl: './dropdown-menu.component.css',
})
export class DropdownMenuComponent {
  @Input() mainParts!: string[];
  @Input() Peripherals!: string[];
}
