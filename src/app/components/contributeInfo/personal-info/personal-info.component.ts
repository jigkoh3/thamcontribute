import { Component, OnInit, Input } from '@angular/core';
import { PersonalInfo, Address } from '../personalInfo';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  @Input() info: PersonalInfo;

  prefixNameList = ["นาย", "นาง", "นางสาว", "ดช", "ดญ"];
  
 
  constructor() {
   }

  ngOnInit() {
  }

}
