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

  /**
   * Creates a new instance of the PartSelectorComponent.
   *
   * @param selectionService A service that stores the user's selection.
   * @param store The store of the application.
   */
  constructor(
    private selectionService: SelectionService,
    private store: Store<PartState>
  ) {
    console.log(
      'Constructor of PartSelectorComponent called with partName:',
      this.partName
    );

    /**
     * Selects the parts for the given part name from the store.
     *
     * If the parts are not available in the store, an error is thrown.
     */
    this.parts$ = this.store.select(selectParts).pipe(
      map((parts) => {
        if (parts === null || parts === undefined) {
          throw new Error('parts cannot be null or undefined');
        }
        return parts[this.partName] || [];
      })
    );

    /**
     * Selects the icons from the store that correspond to the given part name.
     *
     * If the icons are not available in the store, an error is thrown.
     */
    this.icons$ = this.store.select(selectIcons).pipe(
      map((icons) => {
        if (icons === null || icons === undefined) {
          throw new Error('icons cannot be null or undefined');
        }
        return icons.filter((icon) => icon.id === this.partName);
      })
    );

    /**
     * Selects the loading state from the store.
     */
    this.loading$ = this.store.select(selectLoading);

    /**
     * Selects the error state from the store.
     */
    this.error$ = this.store.select(selectError);
  }

  /**
   * Initializes the component by dispatching actions to load parts and icons.
   * Ensures that actions are only dispatched if partName is defined.
   */
  ngOnInit() {
    // Check if partName is defined
    if (this.partName !== null && this.partName !== undefined) {
      try {
        // Dispatch action to load parts for the given part name
        console.log('Dispatching loadParts action');
        this.store.dispatch(loadParts({ partName: this.partName }));

        // Dispatch action to load all icons
        console.log('Dispatching loadIcons action');
        this.store.dispatch(loadIcons());
      } catch (error) {
        // Log any errors that occur during initialization
        console.error('Error in ngOnInit:', error);
      }
    }
  }

  /**
   * Toggles the visibility of the part selector window.
   */
  toggleWindow() {
    // Toggle the value of toggleWindowValue
    this.toggleWindowValue = !this.toggleWindowValue;
  }

  /**
   * Selects a part from the list of parts and adds it to the selected parts.
   * @param partId The ID of the part to select.
   */
  selectPart(partId: number) {
    // Subscribe to the parts observable and filter the selected part
    this.parts$.subscribe((parts) => {
      this.selectedPart = parts.filter((part) => part.id === partId);
      // Add the selected part to the selected parts
      this.selectionService.addPart(this.selectedPart);
    });
    // Toggle the window after selecting a part
    this.toggleWindow();
  }

  /**
   * Removes a part from the list of selected parts.
   * @param partId The ID of the part to remove.
   */
  removePart(partId: number): void {
    // Remove the part from the selected parts
    this.selectionService.removePart(partId);
    // Reset the selected part
    this.selectedPart = [];
  }
}
