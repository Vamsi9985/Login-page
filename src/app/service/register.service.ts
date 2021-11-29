import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Config } from './../config';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable()
export class RegisterService {

  private userUrl = Config.ApiUrl;

  constructor(private http: HttpClient) { }

  addUser(data: any): Observable<any> {
    return this.http.post<any>(this.userUrl + "users/addUser", data);
  }
}
