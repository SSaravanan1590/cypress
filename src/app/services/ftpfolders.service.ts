import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface FolderNode {
  name: string;
  path: string;
  children: FolderNode[];
}

@Injectable({
  providedIn: 'root',
})
export class FtpFoldersService {
  private apiUrl = 'http://localhost:3001/ftp-folders';

  constructor(private http: HttpClient) {}

  getFolders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
