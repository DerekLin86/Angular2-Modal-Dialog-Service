import { Component } from '@angular/core';

import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from "rxjs/Subscription";

import { ModalDialogService, ModalButton, ModalButtons } from './services/modal-dialog.service'

@Component({
  selector: 'my-app',
  template: `<modal-dialog></modal-dialog>
  <h1>Hello {{name}}</h1><br/>
  <button class="btn btn-primary" (click)="tryYesNoDialog()">Try the YesNo Dialog</button>&nbsp;
  <button class="btn btn-success" (click)="tryAbortRetryCancelDialog()">Try the AbortRetryCancel Dialog</button>&nbsp;
  <button class="btn btn-warning" (click)="trySelfTerminatingDialog()">Try the Self Terminating Dialog - Dialog will Close in 3 Seconds</button>&nbsp;`
})
export class AppComponent  { 
  name = 'Angular'; 

  selfTerminationTimer: Subscription;

    constructor(private modalDialogService: ModalDialogService) {
    }

    tryYesNoDialog()
    {
      this.modalDialogService.show("Hi There this is the YesNo Dialog Box", "Confirm", ModalButtons.YesNo, ModalButton.Yes)
        .then(returnVal => {
          if (returnVal === ModalButton.Yes) {
            alert("YES Button Was Clicked!")
          }
          else if (returnVal === ModalButton.No) {
            alert("NO Button Was Clicked!")
          }
        });
    }

    tryAbortRetryCancelDialog()
    {
      this.modalDialogService.show("Hi There this is the AbortRetryCancel Dialog Box", "Problem", ModalButtons.AbortRetryCancel, ModalButton.Cancel)
        .then(returnVal => {
          if (returnVal === ModalButton.Cancel) {
            alert("CANCEL Button Was Clicked!")
          }
          else if (returnVal === ModalButton.Abort) {
            alert("ABORT Button Was Clicked!")
          }
          else if (returnVal === ModalButton.Retry) {
            alert("RETRY Button Was Clicked!")
          }
        });
    }

    trySelfTerminatingDialog()
    {
      this.modalDialogService.show("Hi There this is the Self Terminating Dialog Box, this will automatically close in 3 seconds using an observable timer", "Working", ModalButtons.Cancel, ModalButton.Cancel)
        .then(returnVal => {
          if (returnVal === ModalButton.Cancel) {
            this.selfTerminationTimer.unsubscribe();
            alert("CANCEL button was clicked!")
          }
          else if (returnVal === ModalButton.Terminated) {
            alert("Dialog Box was Terminated from Code!")
          }
        });

       this.selfTerminationTimer = TimerObservable.create(3000)
    .subscribe(t => {
      this.modalDialogService.terminate()
    });
    }
}