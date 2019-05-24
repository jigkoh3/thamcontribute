import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { ContributeInfo } from "src/app/components/contributeInfo/contributeInfo";

@Component({
  selector: 'app-contribute-dialog',
  templateUrl: './contribute-dialog.component.html',
  styleUrls: ['./contribute-dialog.component.scss']
})
export class ContributeDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContributeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public info: ContributeInfo) {
  }

  ngOnInit() {
  }

  onSave() {
    this.dialogRef.close();
  }
}
