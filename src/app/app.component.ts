import { Component, Inject } from '@angular/core';
import {MatDialog} from '@angular/material';
import {InputStringDialogComponent} from './input-string-dialog/input-string-dialog.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogResult: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(InputStringDialogComponent, {
      width: '500px',
      data: 'this is dialog '
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogResult = result;
    });
  }
}
