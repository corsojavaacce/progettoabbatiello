import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { dataeventi } from 'src/model/dataeventi';


@Component({
  selector: 'app-matdialog',
  templateUrl: './matdialog.component.html',
  styleUrls: ['./matdialog.component.css']
})
export class MatdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dataeventi) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
