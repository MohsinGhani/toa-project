import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InputStringDialogComponent } from './input-string-dialog/input-string-dialog.component'

interface Properties {
  input: any,
  result: String,
  reason: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  object: Properties;
  automata = [];

  constructor(public dialog: MatDialog) {
    this.object = { input: '1111', result: 'Rejected', reason: 'This is Even Length String and Having Binary Language' }    // 
    // this.automata.push(this.object)
    // console.log(this.automata)
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(InputStringDialogComponent, {
      width: '500px',
      data: 'Write String'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.object = { input: result, result: '', reason: '' }
        if (this.isHavingString(result)) {
          this.object.result = 'Stopped Working';
          this.object.reason = 'This String have some alpha or non-recongnized input'
        }
        else if (this.isHavingDecimalNumbers(result)) {
          this.object.result = 'Stopped Working';
          this.object.reason = 'This String have some Decimal Numbers'
        }
        else if(this.isHavingSpeacialChar(result)){
          this.object.result = 'Stopped Working';
          this.object.reason = 'This String have some non-recongnized input'
        }
        else if(this.isEpsilon(result)){
          this.object.result = 'Stopped Working';
          this.object.reason = 'This String have non-recongnized input є'
        }
        else if(this.isLengthEven(result)){
          this.object.result = 'Rejected';
          this.object.reason = 'This String does not have Even Length'
        }
        else{
          this.object.result = 'Accepted';
          this.object.reason = 'This String is Accepted'
        }
        this.automata.push(this.object)
      }
    });

  }

  isHavingString(value) {
    return isNaN(value)
  }

  isHavingDecimalNumbers(input) {
    let flage = false;
    let value = Array.from(input) 
    value.forEach(i => {
      if(Number(i) == 2){
        flage = true
      }else if(Number(i) == 3){
        flage = true
      }else if(Number(i) == 4){
        flage = true
      }else if(Number(i) == 5){
        flage = true
      }else if(Number(i) == 6){
        flage = true
      }else if(Number(i) == 7){
        flage = true
      }else if(Number(i) == 8){
        flage = true
      }else if(Number(i) == 9){
        flage = true
      }
    });
    return flage;
  }

  isHavingSpeacialChar(input){
    let flage = false;
    let value = Array.from(input)
    value.forEach((i)=>{
      if(i !== 0 || i !== 1){
        let flage = true;
      }
    })
    return flage;
  }

  isEpsilon(input){
    let flage = false;
    let value = Array.from(input)
    value.forEach((i)=>{
      if(i == ' '){
        flage = true
      }
    })
    return flage
  }

  isLengthEven(input){
    let flage = false;
    let value = Array.from(input).length
    if(value % 2 !== 0){
      flage = true;
    }
    return flage
  }

  deleteAutomata(i){
    this.automata.splice(i,1)
  }
}
