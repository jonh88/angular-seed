import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  public helloWorld() {
    console.log('Hello from dashboard service!!');
  }
}
