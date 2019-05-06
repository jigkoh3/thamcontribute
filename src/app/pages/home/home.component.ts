import { Component, OnInit } from "@angular/core";
import { ContributeService } from "src/app/services/contribute.service";
import { MatDialog } from "@angular/material";
import { ContributeDialogComponent } from "src/app/contribute-dialog/contribute-dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  data = []
  constructor(private contribute: ContributeService,private dialogModal : MatDialog) {}

  ngOnInit() {
    this.data = this.contribute.getContributes();
  }

  addItem(){
    // const dialog = this.dialogModal.open(ContributeDialogComponent, {width:"50px", height:"50px"});
    this.data.push({fullName:"aaaa", imgUrl:"dsfsdfsdf"});
  }
}
