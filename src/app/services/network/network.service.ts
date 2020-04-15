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

  public post(url: string, body: any): Promise<any> {
    return this.http.post(url, body).toPromise();
  }
  public put(url: string, body: any): Promise<any> {
    return this.http.put(url, body).toPromise();
  }
}