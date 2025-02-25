import { HttpClient } from '@angular/common/http';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as PartActions from './parts.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class PartsEffect {
  loadParts$;
  loadIcons$;
  apiUrl = 'http://localhost:3000';

  constructor(private actions$: Actions, private http: HttpClient) {
    this.loadParts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PartActions.loadParts),
        mergeMap((action) => {
          if (!action.partName) {
            return of(
              PartActions.loadPartsFailure({
                error: new Error('partName cannot be null or undefined'),
              })
            );
          }

          return this.http.get<any[]>(`${this.apiUrl}/${action.partName}`).pipe(
            map((parts) =>
              PartActions.loadPartsSuccess({ partName: action.partName, parts })
            ),
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
