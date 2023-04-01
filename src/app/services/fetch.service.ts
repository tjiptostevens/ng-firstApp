import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import GetData from '../infrastructure/getData';

@Injectable({
  providedIn: 'root',
})
export class FetchService {
  constructor(private http: HttpClient) {}

  getData(url: string) {
    this.http.get('');
  }
}
