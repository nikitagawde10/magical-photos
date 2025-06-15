import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(private http: HttpClient) {}

  getLogo(): Observable<Blob> {
    const url = 'https://picsum.photos/id/200/200/300';
    return this.http.get(url, { responseType: 'blob' });
  }
}
