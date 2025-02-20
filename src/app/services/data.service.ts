import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllParts(partName: string): Observable<any> {
    if (!partName) {
      throw new Error('partName cannot be null or undefined');
    }

    return this.http.get(this.apiUrl + '/' + partName).pipe(
      catchError((err) => {
        console.error('Error occurred while fetching parts: ', err);
        throw err;
      })
    );
  }

  getIcons(partName: string): Observable<any> {
    if (!partName) {
      throw new Error('partName cannot be null or undefined');
    }

    return this.http.get(this.apiUrl + '/icons').pipe(
      catchError((err) => {
        console.error('Error occurred while fetching icons: ', err);
        throw err;
      })
    );
  }

  // createPost(postData: any): void {
  //   this.http.post(this.apiUrl + '/posts', postData).subscribe((response) => {
  //     console.log('Post Created: ', response);
  //   });
  // }
}
