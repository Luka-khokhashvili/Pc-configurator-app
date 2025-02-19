import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // motherboard: this.http.get<[]>(this.apiUrl + "/motherboard"),
  // memory: this.http.get<[]>(this.apiUrl + "/memory"),
  // videoCard: this.http.get<[]>(this.apiUrl + "/videoCard"),
  // ssd: this.http.get<[]>(this.apiUrl + "/ssd"),
  // hdd: this.http.get<[]>(this.apiUrl + "/hdd"),
  // cpuCooler: this.http.get<[]>(this.apiUrl + "/users"),
  // case: this.http.get<[]>(this.apiUrl + "/users"),

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

  // createPost(postData: any): void {
  //   this.http.post(this.apiUrl + '/posts', postData).subscribe((response) => {
  //     console.log('Post Created: ', response);
  //   });
  // }
}
