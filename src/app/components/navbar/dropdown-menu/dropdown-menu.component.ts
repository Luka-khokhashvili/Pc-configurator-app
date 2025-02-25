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

  /**
   * Scrolls the page to the element with the specified component ID.
   * @param componentId - The ID of the component to scroll to.
   */
  scrollTo(componentId: string) {
    // Find the element by its ID
    const element = document.getElementById(componentId);

    // If the element exists, scroll it into view smoothly
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
