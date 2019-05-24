import { Component, OnInit } from "@angular/core";
import { ContributeService } from "src/app/services/contribute.service";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ContributeDialogComponent } from "src/app/contribute-dialog/contribute-dialog.component";
import { ContributeInfo } from "src/app/components/contributeInfo/contributeInfo";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  data: ContributeInfo;
  d: any;

  constructor(private contributeSrv: ContributeService, private dialog: MatDialog) {
    // this.data = new ContributeInfo();
    // this.data.personalInfo.firstName = "Yothin";
    //this.data.personalInfo.lastName = "Setthachatanan";
  }

  ngOnInit() {
    this.contributeSrv.getContributes();
  }

  onUpdateData() {
    const dialogRef = this.dialog.open(ContributeDialogComponent, 
                                        {width: "800px", 
                                         height:"600px",
                                         data: this.data});  
    }

}
