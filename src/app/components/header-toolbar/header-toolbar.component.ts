import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { AuthService } from "ng6-md-auth";
import { MatDialog, MatDialogRef } from "@angular/material";
import { ContributeDialogComponent } from "src/app/contribute-dialog/contribute-dialog.component";

@Component({
  selector: "app-header-toolbar",
  templateUrl: "./header-toolbar.component.html",
  styleUrls: ["./header-toolbar.component.scss"]
})
export class HeaderToolbarComponent implements OnInit {
  appName = `${environment.appName}`;
  userAuth: any;
  constructor(private userAuthSrv: AuthService, 
              private router: Router,
              private dialog: MatDialog) {
    this.userAuthSrv.isLoggedIn.subscribe(value => {
      this.userAuth = this.userAuthSrv.user;
    });
    this.userAuth = this.userAuthSrv.user;
  }
  onLogout() {
    this.userAuthSrv.logout();
    this.router.navigate(["/login"]);
  }

  ngOnInit() {}

  onCreateData(){
    const dialogRef = this.dialog.open(ContributeDialogComponent, {width:"800px", height:"600px"});
  }
}
