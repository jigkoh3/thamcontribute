import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: 'app-contribute-dialog',
  templateUrl: './contribute-dialog.component.html',
  styleUrls: ['./contribute-dialog.component.scss']
})
export class ContributeDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ContributeDialogComponent>) { }

  ngOnInit() {
  }

  onSave() {
    this.dialogRef.close();
  }
}
