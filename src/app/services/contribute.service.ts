import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonalInfo} from "src/app/components/contributeInfo/PersonalInfo";
import { HttpResponseContribute } from '../components/contributeInfo/http-response-contribute';

@Injectable({
  providedIn: 'root'
})

export class ContributeService {
  
  
  constructor(private http: HttpClient) { 
  //  info = new PersonalInfo();
  }

  getContributes(){
    this.http.get<HttpResponseContribute>("http://localhost:3000/api/contributes")
      .subscribe((data: HttpResponseContribute) => {
        console.log(data);
      });
  }
}
