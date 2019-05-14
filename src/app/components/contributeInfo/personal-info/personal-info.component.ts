import { Component, OnInit } from '@angular/core';
import { PersonalInfo, Address } from '../personalInfo';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {


  prefixNameList = ["นาย", "นาง", "นางสาว", "ดช", "ดญ"];
  info: PersonalInfo = new PersonalInfo();
  // info: PersonalInfo = {
  //   prefix: this.prefixNameList[0],
  //   id: "3 10150 1080 53 2",
  //   firstName: "โยธิน",
  //   lastName: "เศรษฐชาตนันท์",
  //   phone: "089-4518750",
  //   email: "sawasdee@thamturakit.com",
  //   line: "",
  //   facebook: "",
  //   address: null
  // };

  constructor() {
    // this.info = {
    //   prefix: this.prefixNameList[0],
    //   id: "3 10150 1080 53 2",
    //   firstName: "โยธิน",
    //   lastName: "เศรษฐชาตนันท์",
    //   phone: "089-4518750",
    //   email: "sawasdee@thamturakit.com",
    //   line: "",
    //   facebook: "",
    //   address: {
    //     addr: "",
    //     alley: "",
    //     street: "",
    //     subdistrict: "",
    //     district: "",
    //     province: "",
    //     postcode: ""
    //   }
    // }
  }

  ngOnInit() {
  }

}
