import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PartActions from './parts.actions';

export class PartsEffect {
  loadParts$;
  loadIcons$;
  apiUrl = 'http://localhost:3000';

  constructor(private actions$: Actions, private http: HttpClient) {
    this.loadParts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PartActions.loadParts),
        mergeMap((action) => {
          return this.http.get<any[]>(`${this.apiUrl}/${action.pratName}`).pipe(
            map((parts) => PartActions.loadPartsSuccess({ parts })),
            catchError((error) => of(PartActions.loadPartsFailure({ error })))
          );
        })
      )
    );

    this.loadIcons$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PartActions.loadIcons),
        mergeMap(() =>
          this.http.get(`${this.apiUrl}/icons`).pipe(
            map((icons) => PartActions.loadIconsSuccess({ icons })),
            catchError((error) => of(PartActions.loadIconsFailure({ error })))
          )
        )
      )
    );
  }
}
