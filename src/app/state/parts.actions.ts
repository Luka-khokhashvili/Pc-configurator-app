import { createAction, props } from '@ngrx/store';

export const loadParts = createAction(
  '[Parts] Load Parts',
  props<{ partName: string }>()
);

export const loadPartsSuccess = createAction(
  '[Parts] Load Parts Success',
  props<{ parts: any }>()
);

export const loadPartsFailure = createAction(
  '[Parts] Load Parts Failure',
  props<{ error: any }>()
);

export const loadIcons = createAction('[Icons] Load Icons');

export const loadIconsSuccess = createAction(
  '[Icons] Load Icons Success',
  props<{ icons: any }>()
);

export const loadIconsFailure = createAction(
  '[Icons] Load Icons Failure',
  props<{ error: any }>()
);
