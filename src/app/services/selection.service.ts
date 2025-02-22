import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  finalSelection = signal<any[]>([]);

  getFinalSelection() {
    return this.finalSelection.asReadonly();
  }

  addPart(part: any[]) {
    this.finalSelection.update((parts) => [...parts, part]);
  }

  removePart(partId: number) {
    this.finalSelection.update((parts) =>
      parts.filter((part) => part.name !== partId)
    );
  }

  clearSelectedList() {
    this.finalSelection.update(() => []);
  }
}
