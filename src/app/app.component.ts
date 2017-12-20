import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InputStringDialogComponent } from './input-string-dialog/input-string-dialog.component'

interface Properties {
  input: any,
  result: String,
  reason: String,
  path?:String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  object: Properties;
  automata = [];
  
  initialState = 'q0'
  midState = 'q1'
  finalState = 'q2'

  stack = [];

  constructor(public dialog: MatDialog) {
    this.object = { input: '1111', result: 'Rejected', reason: 'This is Even Length String and Having Binary Language'}    // 
    let input = '1100'
  }

  transitionFunction(state,input){
    if(state == 'q0'){
      return this.midState
    } else if(state == 'q1'){
      return this.finalState
    } else if(state == 'q2'){
      return this.midState
    }
  }

  openDialog(): void {
    this.stack = [this.initialState]
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
        else if(this.getLastState(result) != 'q2'){
          this.object.result = 'Rejected';
          this.object.reason = 'This String does not have Even Length'
        }
        else{
          this.object.result = 'Accepted';
          this.object.reason = 'This String is Accepted'
          this.object.path = this.stack.join('')
          this.stack = [this.initialState]
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

  getLastState(input){
    let currentState = this.initialState
    Array.from(input).forEach((input)=>{
      currentState = this.transitionFunction(currentState,input)
      this.stack.push(`-${input}-> ${currentState}`)
    })
    return currentState
  }

  getPath(i){
    alert(this.automata[i].path)
  }

  deleteAutomata(i){
    this.automata.splice(i,1)
  }
}
