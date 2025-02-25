import { createReducer, on } from '@ngrx/store';
import * as PartActions from './parts.actions';
import { Icons } from '../interfaces/icons';

export interface PartState {
  parts: { [partName: string]: any[] };
  icons: Icons[];
  error: string | null;
  loading: boolean;
}

const initialState: PartState = {
  parts: {},
  icons: [],
  error: null,
  loading: false,
};

export const partReducer = createReducer(
  initialState,

  on(PartActions.loadParts, (state) => ({ ...state, loading: true })),
  on(PartActions.loadPartsSuccess, (state, { partName, parts }) => ({
    ...state,
    parts: { ...state.parts, [partName]: parts },
    loading: false,
    error: null,
  })),
  on(PartActions.loadPartsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(PartActions.loadIcons, (state) => ({ ...state, loading: true })),
  on(PartActions.loadIconsSuccess, (state, { icons }) => ({
    ...state,
    icons,
    loading: false,
    error: null,
  })),
  on(PartActions.loadIconsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
