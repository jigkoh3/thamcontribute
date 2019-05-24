import { Component, OnInit, Input } from '@angular/core';
import { ContributeInfo } from '../components/contributeInfo/contributeInfo';

@Component({
  selector: 'app-contribute-stepper',
  templateUrl: './contribute-stepper.component.html',
  styleUrls: ['./contribute-stepper.component.scss']
})
export class ContributeStepperComponent implements OnInit {

  @Input() info: ContributeInfo;

  constructor() { }

  ngOnInit() {
  }

}
