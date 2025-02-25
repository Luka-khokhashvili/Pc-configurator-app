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
    /**
     * Effect that loads a list of parts from the server.
     * When the action is dispatched, it will send a GET request to the API
     * and dispatch a success or failure action when the response is received.
     */
    this.loadParts$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PartActions.loadParts),
        mergeMap((action) => {
          if (!action.partName) {
            // If the partName is null or undefined, return an error action
            return of(
              PartActions.loadPartsFailure({
                error: new Error('partName cannot be null or undefined'),
              })
            );
          }

          // Send a GET request to the API
          return this.http.get<any[]>(`${this.apiUrl}/${action.partName}`).pipe(
            // When the response is received, dispatch a success action
            map((parts) =>
              PartActions.loadPartsSuccess({ partName: action.partName, parts })
            ),
            // If there is an error, dispatch a failure action
            catchError((error) => of(PartActions.loadPartsFailure({ error })))
          );
        })
      )
    );

    /**
     * Effect that loads the list of icons from the server.
     * When the action is dispatched, it will send a GET request to the API
     * and dispatch a success or failure action when the response is received.
     */
    this.loadIcons$ = createEffect(() =>
      this.actions$.pipe(
        ofType(PartActions.loadIcons),
        mergeMap(() =>
          this.http.get(`${this.apiUrl}/icons`).pipe(
            // When the response is received, dispatch a success action
            map((icons) => PartActions.loadIconsSuccess({ icons })),
            // If there is an error, dispatch a failure action
            catchError((error) => of(PartActions.loadIconsFailure({ error })))
          )
        )
      )
    );
  }
}
