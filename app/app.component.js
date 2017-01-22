"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TimerObservable_1 = require('rxjs/observable/TimerObservable');
var modal_dialog_service_1 = require('./services/modal-dialog.service');
var AppComponent = (function () {
    function AppComponent(modalDialogService) {
        this.modalDialogService = modalDialogService;
        this.name = 'Angular';
    }
    AppComponent.prototype.tryYesNoDialog = function () {
        this.modalDialogService.show("Hi There this is the YesNo Dialog Box", "Confirm", modal_dialog_service_1.ModalButtons.YesNo, modal_dialog_service_1.ModalButton.Yes)
            .then(function (returnVal) {
            if (returnVal === modal_dialog_service_1.ModalButton.Yes) {
                alert("YES Button Was Clicked!");
            }
            else if (returnVal === modal_dialog_service_1.ModalButton.No) {
                alert("NO Button Was Clicked!");
            }
        });
    };
    AppComponent.prototype.tryAbortRetryCancelDialog = function () {
        this.modalDialogService.show("Hi There this is the AbortRetryCancel Dialog Box", "Problem", modal_dialog_service_1.ModalButtons.AbortRetryCancel, modal_dialog_service_1.ModalButton.Cancel)
            .then(function (returnVal) {
            if (returnVal === modal_dialog_service_1.ModalButton.Cancel) {
                alert("CANCEL Button Was Clicked!");
            }
            else if (returnVal === modal_dialog_service_1.ModalButton.Abort) {
                alert("ABORT Button Was Clicked!");
            }
            else if (returnVal === modal_dialog_service_1.ModalButton.Retry) {
                alert("RETRY Button Was Clicked!");
            }
        });
    };
    AppComponent.prototype.trySelfTerminatingDialog = function () {
        var _this = this;
        this.modalDialogService.show("Hi There this is the Self Terminating Dialog Box, this will automatically close in 3 seconds using an observable timer", "Working", modal_dialog_service_1.ModalButtons.Cancel, modal_dialog_service_1.ModalButton.Cancel)
            .then(function (returnVal) {
            if (returnVal === modal_dialog_service_1.ModalButton.Cancel) {
                _this.selfTerminationTimer.unsubscribe();
                alert("CANCEL button was clicked!");
            }
            else if (returnVal === modal_dialog_service_1.ModalButton.Terminated) {
                alert("Dialog Box was Terminated from Code!");
            }
        });
        this.selfTerminationTimer = TimerObservable_1.TimerObservable.create(3000)
            .subscribe(function (t) {
            _this.modalDialogService.terminate();
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<modal-dialog></modal-dialog>\n  <h1>Hello {{name}}</h1><br/>\n  <button class=\"btn btn-primary\" (click)=\"tryYesNoDialog()\">Try the YesNo Dialog</button>&nbsp;\n  <button class=\"btn btn-success\" (click)=\"tryAbortRetryCancelDialog()\">Try the AbortRetryCancel Dialog</button>&nbsp;\n  <button class=\"btn btn-warning\" (click)=\"trySelfTerminatingDialog()\">Try the Self Terminating Dialog - Dialog will Close in 3 Seconds</button>&nbsp;"
        }), 
        __metadata('design:paramtypes', [modal_dialog_service_1.ModalDialogService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map