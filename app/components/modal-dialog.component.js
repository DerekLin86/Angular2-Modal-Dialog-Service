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
var core_1 = require("@angular/core");
var modal_dialog_service_1 = require("../services/modal-dialog.service");
var ModalDialogComponent = (function () {
    function ModalDialogComponent(modalDialogService, renderer) {
        this.renderer = renderer;
        this.messageTitle = "";
        this.defaults = {
            title: "Confirmation",
            message: "Do you want to cancel your changes?",
            buttons: modal_dialog_service_1.ModalButtons.OkCancel,
            defaultButton: modal_dialog_service_1.ModalButton.Cancel
        };
        this.modalButtons = modal_dialog_service_1.ModalButtons;
        this.modalButton = modal_dialog_service_1.ModalButton;
        modalDialogService.show = this.show.bind(this);
        modalDialogService.terminate = this.terminate.bind(this);
    }
    ModalDialogComponent.prototype.setButtonDispaly = function (button) {
        var display = false;
        if (button === modal_dialog_service_1.ModalButton.Ok &&
            (this.buttons === modal_dialog_service_1.ModalButtons.Ok || this.buttons === modal_dialog_service_1.ModalButtons.OkCancel))
            display = true;
        else if (button === modal_dialog_service_1.ModalButton.Cancel &&
            (this.buttons === modal_dialog_service_1.ModalButtons.OkCancel || this.buttons === modal_dialog_service_1.ModalButtons.RetryCancel
                || this.buttons === modal_dialog_service_1.ModalButtons.YesNoCancel || this.buttons === modal_dialog_service_1.ModalButtons.Cancel
                || this.buttons === modal_dialog_service_1.ModalButtons.AbortRetryCancel))
            display = true;
        else if (button === modal_dialog_service_1.ModalButton.Retry &&
            (this.buttons === modal_dialog_service_1.ModalButtons.RetryCancel || this.buttons === modal_dialog_service_1.ModalButtons.AbortRetryCancel))
            display = true;
        else if (button === modal_dialog_service_1.ModalButton.Yes &&
            (this.buttons === modal_dialog_service_1.ModalButtons.YesNo || this.buttons === modal_dialog_service_1.ModalButtons.YesNoCancel))
            display = true;
        else if (button === modal_dialog_service_1.ModalButton.No &&
            (this.buttons === modal_dialog_service_1.ModalButtons.YesNo || this.buttons === modal_dialog_service_1.ModalButtons.YesNoCancel))
            display = true;
        else if (button === modal_dialog_service_1.ModalButton.Abort &&
            (this.buttons === modal_dialog_service_1.ModalButtons.AbortRetryCancel))
            display = true;
        return display ? "" : "none";
    };
    ModalDialogComponent.prototype.setLabels = function (message, title, buttons, defaultButton) {
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        if (buttons === void 0) { buttons = this.defaults.buttons; }
        if (defaultButton === void 0) { defaultButton = this.defaults.defaultButton; }
        this.title = title;
        this.message = message;
        this.buttons = buttons;
        this.defaultButton = defaultButton;
    };
    ModalDialogComponent.prototype.terminate = function () {
        this.terminated.nativeElement.click();
        return true;
    };
    ModalDialogComponent.prototype.show = function (message, title, buttons, defaultButton) {
        var _this = this;
        if (message === void 0) { message = this.defaults.message; }
        if (title === void 0) { title = this.defaults.title; }
        if (buttons === void 0) { buttons = this.defaults.buttons; }
        if (defaultButton === void 0) { defaultButton = this.defaults.defaultButton; }
        this.setLabels(message, title, buttons, defaultButton);
        var promise = new Promise(function (resolve) {
            _this.showDialog(resolve);
        });
        return promise;
    };
    ModalDialogComponent.prototype.showDialog = function (resolve) {
        var _this = this;
        this.showModalEl.nativeElement.click();
        var okOnClick = function (e) { return resolve(_this.modalButton.Ok); };
        var yesOnClick = function (e) { return resolve(_this.modalButton.Yes); };
        var noOnClick = function (e) { return resolve(_this.modalButton.No); };
        var abortOnClick = function (e) { return resolve(_this.modalButton.Abort); };
        var retryOnClick = function (e) { return resolve(_this.modalButton.Retry); };
        var cancelOnClick = function (e) { return resolve(_this.modalButton.Cancel); };
        var closeOnClick = function (e) { return resolve(_this.defaultButton); };
        var terminatedOnClick = function (e) { return resolve(_this.modalButton.Terminated); };
        this.renderer.listen(this.ok.nativeElement, "click", function (event) { return okOnClick(event); });
        this.renderer.listen(this.yes.nativeElement, "click", function (event) { return yesOnClick(event); });
        this.renderer.listen(this.no.nativeElement, "click", function (event) { return noOnClick(event); });
        this.renderer.listen(this.abort.nativeElement, "click", function (event) { return abortOnClick(event); });
        this.renderer.listen(this.retry.nativeElement, "click", function (event) { return retryOnClick(event); });
        this.renderer.listen(this.cancel.nativeElement, "click", function (event) { return cancelOnClick(event); });
        this.renderer.listen(this.close.nativeElement, "click", function (event) { return closeOnClick(event); });
        this.renderer.listen(this.terminated.nativeElement, "click", function (event) { return terminatedOnClick(event); });
    };
    __decorate([
        core_1.ViewChild("ModalShowModal"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "showModalEl", void 0);
    __decorate([
        core_1.ViewChild("ok"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "ok", void 0);
    __decorate([
        core_1.ViewChild("yes"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "yes", void 0);
    __decorate([
        core_1.ViewChild("no"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "no", void 0);
    __decorate([
        core_1.ViewChild("abort"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "abort", void 0);
    __decorate([
        core_1.ViewChild("retry"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "retry", void 0);
    __decorate([
        core_1.ViewChild("cancel"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "cancel", void 0);
    __decorate([
        core_1.ViewChild("close"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "close", void 0);
    __decorate([
        core_1.ViewChild("terminated"), 
        __metadata('design:type', core_1.ElementRef)
    ], ModalDialogComponent.prototype, "terminated", void 0);
    ModalDialogComponent = __decorate([
        core_1.Component({
            selector: "modal-dialog",
            templateUrl: "./app/components/modal-dialog.component.html"
        }), 
        __metadata('design:paramtypes', [modal_dialog_service_1.ModalDialogService, core_1.Renderer])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}());
exports.ModalDialogComponent = ModalDialogComponent;
//# sourceMappingURL=modal-dialog.component.js.map