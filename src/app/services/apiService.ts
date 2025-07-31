import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3001/ftp-folders';

  constructor(private http: HttpClient) {}

  getFolders(): Observable<any[]> {
    return this.http.get<any[]>('api/getConsolidatedReport');
  }
}
