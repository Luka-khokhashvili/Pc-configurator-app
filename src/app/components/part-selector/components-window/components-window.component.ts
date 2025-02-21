import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-components-window',
  imports: [CommonModule],
  templateUrl: './components-window.component.html',
  styleUrl: './components-window.component.css',
})
export class PartSelectorModalComponent {
  @Input() toggleWindowValue: boolean = false;
  @Input() parts: any[] = [];

  @Output() toggleWindow = new EventEmitter<void>();
  @Output() selectPart = new EventEmitter<string>();
}
