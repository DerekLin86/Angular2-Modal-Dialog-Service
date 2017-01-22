import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { ModalDialogComponent } from './components/modal-dialog.component';
import { ModalDialogService } from './services/modal-dialog.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ModalDialogComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ ModalDialogService ]
})
export class AppModule { }
