import { Component, Signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SelectionService } from '../../services/selection.service';
import { NgFor, NgIf } from '@angular/common';
import { SignButtonComponent } from '../navbar/sign-button/sign-button.component';

@Component({
  selector: 'app-final-build',
  imports: [RouterLink, NgFor, NgIf, SignButtonComponent],
  templateUrl: './final-build.component.html',
  styleUrl: './final-build.component.css',
})
export class FinalBuildComponent {
  finalBuild!: Signal<any[]>;
  total: number = 0;

  constructor(public selectionService: SelectionService) {}

  ngOnInit() {
    this.finalBuild = this.selectionService.getFinalSelection();
    console.log(this.finalBuild);
  }
}
