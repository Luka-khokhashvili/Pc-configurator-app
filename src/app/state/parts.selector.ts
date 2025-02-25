import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PartState } from './parts.reducer';

export const selectPartState = createFeatureSelector<PartState>('parts');

export const selectParts = createSelector(
  selectPartState,
  (state) => state.parts
);

export const selectIcons = createSelector(
  selectPartState,
  (state) => state.icons
);

export const selectLoading = createSelector(
  selectPartState,
  (state) => state.loading
);

export const selectError = createSelector(
  selectPartState,
  (state) => state.error
);
