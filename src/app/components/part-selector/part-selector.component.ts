import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { PartSelectorModalComponent } from './components-window/components-window.component';
import { SelectionService } from '../../services/selection.service';
import { Icons } from '../../interfaces/icons';

@Component({
  selector: 'app-part-selector',
  imports: [CommonModule, PartSelectorModalComponent],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
  @Input() partName!: string;

  toggleWindowValue: boolean = false;
  parts: any[] = [];
  icons: any[] = [];
  selectedPart: any[] = [];

  constructor(
    private dataService: DataService,
    private selectionService: SelectionService
  ) {}

  ngOnInit() {
    if (this.partName) {
      this.dataService.getAllParts(this.partName).subscribe((data) => {
        this.parts = data;
      });
      this.dataService.getIcons(this.partName).subscribe((data) => {
        this.icons = data.filter((icon: Icons) => icon.id === this.partName);
      });
    }
  }

  toggleWindow() {
    this.toggleWindowValue = !this.toggleWindowValue;
  }

  selectPart(partId: number) {
    this.selectedPart = this.parts.filter((part) => part.id === partId);

    console.log(this.selectedPart);
    this.selectionService.addPart(this.selectedPart);
    this.toggleWindow();
  }

  removePart(partId: number) {
    this.selectedPart = [];
    this.selectionService.removePart(partId);
  }
}
