import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@ds-features/dashboard/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService,
  ) { }

  ngOnInit() {
    console.log(this.dashboardService.helloWorld());
  }

}
