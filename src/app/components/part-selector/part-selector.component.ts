import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-part-selector',
  imports: [CommonModule],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
  @Input() partName!: string;

  toggleWindowValue: boolean = false;

  parts: any[] = [];
  selectedPart: any[] = [];
  errorMessage!: string;
  loading: boolean = false;

  //constructor(private http: HttpClient) {}
  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.partName) {
      this.dataService.getAllParts(this.partName).subscribe((data) => {
        this.parts = data;
        console.log(this.parts);
      });
    }
  }

  toggleWindow() {
    this.toggleWindowValue = !this.toggleWindowValue;
  }

  selectPart(partName: string) {
    this.selectedPart = this.parts.filter((part) => part.name === partName);
    this.toggleWindow();
  }
}
