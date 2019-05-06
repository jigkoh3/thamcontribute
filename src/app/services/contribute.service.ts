import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContributeService {

  constructor() { }

  getContributes(){
    return [{fullName:"", imgUrl:""},{fullName:"", imgUrl:""}];
  }
}
