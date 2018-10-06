import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { API_URL, TOKEN } from '@ds-core/constants';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PersistenceService } from '../persistence/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private headers: HttpHeaders;
  private params: HttpParams;
  private responseType: string; // {'arraybuffer' | 'blob' | 'json' | 'text'}

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private persistenceService: PersistenceService
    ) {
        this.resetOptions();
    }

  resetOptions() {
      this.headers = new HttpHeaders();
      this.params = new HttpParams();
      this.responseType = 'json';
  }

  login (email: string, password: string, endpoint: string): Observable<any> {
    return this.authBasic(email, password).post(endpoint).pipe(
        tap(
            (response) => {
                this.persistenceService.setItem(TOKEN, response.token);
            }
        )
    );
  }

  logout () {
      this.persistenceService.removeItem(TOKEN);
      this.router.navigate(['']);
  }

  authBasic (email: string, password: string): RestService {
      // tanto headers, como params son inmutables. Cada llamada a un método genera
      // un nuevo objeto con el resultado
      this.headers = this.headers.append('Authorization', 'Basic ' + btoa(email + ':' + password));
      return this;
  }

  param (key: string, value: string): RestService {
      this.params = this.params.append( key, value );
      return this;
  }

  header (key: string, value: string): RestService {
      this.headers = this.headers.append(key, value);
      return this;
  }

  get(endpoint: string): Observable<any> {
      return this.httpClient.get(API_URL + endpoint,
          this.createOptions());
  }

  post(endpoint: string, body?: any): Observable<any> {
      return this.httpClient.post(API_URL + endpoint,
          body, this.createOptions());
  }

  put(endpoint: string, body?: any): Observable<any> {
      return this.httpClient.put(API_URL + endpoint,
          body, this.createOptions());
  }

  patch(endpoint: string, body?: any): Observable<any> {
      return this.httpClient.patch(API_URL + endpoint,
          body, this.createOptions());
  }

  delete(endpoint: string): Observable<any> {
      return this.httpClient.delete(API_URL + endpoint,
          this.createOptions());
  }

  createOptions(): any {
      const options = {
          headers: this.headers,
          params: this.params,
          responseType: this.responseType
      };
      this.resetOptions();
      return options;
  }
}
