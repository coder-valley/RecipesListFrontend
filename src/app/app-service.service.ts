import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(public http: HttpClient) { }
  public postFunction(url: any, data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept' });
    return this.http.get(url, data)
      .pipe(map((response: any) => response
      ));
  }
}
