import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './mat.module'
import {InputStringDialogComponent} from './input-string-dialog/input-string-dialog.component'

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    InputStringDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[
    InputStringDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
