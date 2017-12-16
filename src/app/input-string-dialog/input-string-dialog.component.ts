import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material'
@Component({
  selector: 'app-input-string-dialog',
  templateUrl: './input-string-dialog.component.html',
  styleUrls: ['./input-string-dialog.component.css']
})
export class InputStringDialogComponent implements OnInit {

  constructor(public _MatDialogRef: MatDialogRef<InputStringDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this._MatDialogRef.close('confirm')
  }

  onCloseCancel() {
    this._MatDialogRef.close('cancel')
  }

}
