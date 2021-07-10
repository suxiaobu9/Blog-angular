import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getShortcutData(type: string) {
    return this.http.get(`api/${type}.json`);
  }
}
