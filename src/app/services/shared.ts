
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Shared {
    constructor(
        private http: HttpClient,

    ){}

    isLandingPage(url: string): Observable<boolean> {
        return this.http.get<any>(url).pipe(map(data => {
          return data.some((obj : any) => obj.title === 'home');
        }));
    }

    
}