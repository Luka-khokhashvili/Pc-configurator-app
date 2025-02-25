import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartSelectorModalComponent } from './components-window/components-window.component';
import { Icons } from '../../interfaces/icons';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { PartState } from '../../state/parts.reducer';
import {
  selectError,
  selectIcons,
  selectLoading,
  selectParts,
} from '../../state/parts.selector';
import { loadIcons, loadParts } from '../../state/parts.actions';
import { SelectionService } from '../../services/selection.service';

@Component({
  selector: 'app-part-selector',
  imports: [CommonModule, PartSelectorModalComponent],
  templateUrl: './part-selector.component.html',
  styleUrl: './part-selector.component.css',
})
export class PartSelectorComponent {
  @Input() partName!: string;

  toggleWindowValue: boolean = false;
  parts$: Observable<any[]>;
  icons$: Observable<Icons[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  selectedPart: any[] = [];

  constructor(
    private selectionService: SelectionService,
    private store: Store<PartState>
  ) {
    console.log(
      'Constructor of PartSelectorComponent called with partName:',
      this.partName
    );

    this.parts$ = this.store.select(selectParts).pipe(
      map((parts) => {
        if (parts === null || parts === undefined) {
          throw new Error('parts cannot be null or undefined');
        }
        return parts[this.partName] || [];
      })
    );

    this.icons$ = this.store.select(selectIcons).pipe(
      map((icons) => {
        if (icons === null || icons === undefined) {
          throw new Error('icons cannot be null or undefined');
        }
        return icons.filter((icon) => icon.id === this.partName);
      })
    );

    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit() {
    if (this.partName !== null && this.partName !== undefined) {
      try {
        console.log('Dispatching loadParts action');
        this.store.dispatch(loadParts({ partName: this.partName }));

        console.log('Dispatching loadIcons action');
        this.store.dispatch(loadIcons());
      } catch (error) {
        console.error('Error in ngOnInit:', error);
      }
    }
  }

  toggleWindow() {
    this.toggleWindowValue = !this.toggleWindowValue;
  }

  selectPart(partId: number) {
    this.parts$.subscribe((parts) => {
      this.selectedPart = parts.filter((part) => part.id === partId);
      this.selectionService.addPart(this.selectedPart);
    });
    this.toggleWindow();
  }

  removePart(partId: number) {
    this.selectedPart = [];
    this.selectionService.removePart(partId);
  }
}
