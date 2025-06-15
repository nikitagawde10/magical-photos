import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private http: HttpClient) {}

  getLandingPageHeader(): Observable<Blob> {
    const url = 'https://picsum.photos/id/193/1200/400';
    return this.http.get(url, { responseType: 'blob' });
  }
}
