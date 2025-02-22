import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { PartSelectorModalComponent } from './components-window/components-window.component';

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
  errorMessage!: string;
  loading: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.partName) {
      this.dataService.getAllParts(this.partName).subscribe((data) => {
        this.parts = data;
      });
      this.dataService.getIcons(this.partName).subscribe((data) => {
        this.icons = data.filter((icon: any) => icon.id === this.partName);
      });
    }
  }

  toggleWindow() {
    this.toggleWindowValue = !this.toggleWindowValue;
  }

  selectPart(partId: string) {
    this.selectedPart = this.parts.filter((part) => part.id === partId);
    this.toggleWindow();
  }

  clearPart() {
    this.selectedPart = [];
  }
}
