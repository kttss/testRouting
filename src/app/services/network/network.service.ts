import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  constructor(private http: HttpClient) {}

  public get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }
}
