import { Component, OnInit } from "@angular/core";
import { ContributeService } from "src/app/services/contribute.service";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ContributeDialogComponent } from "src/app/contribute-dialog/contribute-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  data = []
  constructor(private contribute: ContributeService, private dialog : MatDialog) {}

  ngOnInit() {
    this.data = this.contribute.getContributes();
  }

  openContributeDialog() {
    // const dialogRef = this.dialog.open(ContributeDialogComponent, {width:"800px", height:"600px"});
    // this.data.push({fullName:"aaaa", imgUrl:"dsfsdfsdf"});
  }
}
