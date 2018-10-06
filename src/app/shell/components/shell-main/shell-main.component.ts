import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-main',
  templateUrl: './shell-main.component.html',
  styleUrls: ['./shell-main.component.scss']
})
export class ShellMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return false;
  }
}
