import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getShortcutData$(type: string) {
    return this.http.get(
      `${environment.apiBaseUrl}api/${type}.json?t=${new Date().getTime()}`
    );
  }
}
