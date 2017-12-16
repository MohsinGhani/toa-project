import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-string-dialog',
  templateUrl: './input-string-dialog.component.html',
  styleUrls: ['./input-string-dialog.component.css']
})
export class InputStringDialogComponent implements OnInit {
  inputString: String;
  constructor(public _MatDialogRef: MatDialogRef<InputStringDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this._MatDialogRef.close(this.inputString)
  }

  onCloseCancel() {
    this._MatDialogRef.close()
  }

}
