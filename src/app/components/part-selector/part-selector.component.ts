import { Component, Input, input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { finalize } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-part-selector',
  imports: [NgFor],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
  @Input() partName!: string;

  parts: any[] = [];
  errorMessage!: string;
  loading: boolean = false;

  //constructor(private http: HttpClient) {}
  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.partName) {
      this.dataService.getAllParts(this.partName).subscribe((data) => {
        this.parts = data;
        console.log(data);
      });
    }
  }
}
