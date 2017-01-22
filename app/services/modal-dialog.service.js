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
(function (ModalButton) {
    ModalButton[ModalButton["Ok"] = 0] = "Ok";
    ModalButton[ModalButton["Cancel"] = 1] = "Cancel";
    ModalButton[ModalButton["Retry"] = 2] = "Retry";
    ModalButton[ModalButton["Yes"] = 3] = "Yes";
    ModalButton[ModalButton["No"] = 4] = "No";
    ModalButton[ModalButton["Abort"] = 5] = "Abort";
    ModalButton[ModalButton["Terminated"] = 6] = "Terminated";
})(exports.ModalButton || (exports.ModalButton = {}));
var ModalButton = exports.ModalButton;
(function (ModalButtons) {
    ModalButtons[ModalButtons["Ok"] = 0] = "Ok";
    ModalButtons[ModalButtons["OkCancel"] = 1] = "OkCancel";
    ModalButtons[ModalButtons["RetryCancel"] = 2] = "RetryCancel";
    ModalButtons[ModalButtons["YesNo"] = 3] = "YesNo";
    ModalButtons[ModalButtons["YesNoCancel"] = 4] = "YesNoCancel";
    ModalButtons[ModalButtons["Cancel"] = 5] = "Cancel";
    ModalButtons[ModalButtons["AbortRetryCancel"] = 6] = "AbortRetryCancel";
})(exports.ModalButtons || (exports.ModalButtons = {}));
var ModalButtons = exports.ModalButtons;
var ModalDialogService = (function () {
    function ModalDialogService() {
    }
    ModalDialogService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ModalDialogService);
    return ModalDialogService;
}());
exports.ModalDialogService = ModalDialogService;
//# sourceMappingURL=modal-dialog.service.js.map