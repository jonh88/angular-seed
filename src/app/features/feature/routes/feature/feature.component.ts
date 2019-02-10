import { Component, OnInit } from '@angular/core';
import { FeatureService } from '@ds-features/feature/service/feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  constructor(
    private featureService: FeatureService,
  ) { }

  ngOnInit() {
    console.log(this.featureService.helloWorld());
  }

}
