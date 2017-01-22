import {OnInit, Component, ElementRef, ViewChild, Renderer} from "@angular/core";
import { Response } from "@angular/http";

import { ModalDialogService, ModalButtons, ModalButton } from "../services/modal-dialog.service"; 
import { Observable } from "rxjs/Observable";

@Component({
    selector: "modal-dialog",
    templateUrl:  "./app/components/modal-dialog.component.html"
})
export class ModalDialogComponent {

    messageTitle = "";

    @ViewChild("ModalShowModal") showModalEl: ElementRef;
    @ViewChild("ok") ok: ElementRef;
    @ViewChild("yes") yes: ElementRef;
    @ViewChild("no") no: ElementRef;
    @ViewChild("abort") abort: ElementRef;
    @ViewChild("retry") retry: ElementRef;
    @ViewChild("cancel") cancel: ElementRef;
    @ViewChild("close") close: ElementRef;
    @ViewChild("terminated") terminated: ElementRef;

    private defaults = {
        title: "Confirmation",
        message: "Do you want to cancel your changes?",
        buttons: ModalButtons.OkCancel,
        defaultButton: ModalButton.Cancel
    };
    title:string;
    message: string;
    modalButtons = ModalButtons;
    modalButton = ModalButton;
    buttons: ModalButtons;
    defaultButton: ModalButton;

    constructor(modalDialogService: ModalDialogService, private renderer: Renderer) {
        modalDialogService.show = this.show.bind(this);
        modalDialogService.terminate = this.terminate.bind(this);
    }

    setButtonDispaly(button: ModalButton) {

        let display = false;

        if (button === ModalButton.Ok &&
            (this.buttons === ModalButtons.Ok || this.buttons === ModalButtons.OkCancel))
            display = true;
        else if (button === ModalButton.Cancel &&
            (this.buttons === ModalButtons.OkCancel || this.buttons === ModalButtons.RetryCancel
                || this.buttons === ModalButtons.YesNoCancel || this.buttons === ModalButtons.Cancel
                || this.buttons === ModalButtons.AbortRetryCancel))
            display = true;
        else if (button === ModalButton.Retry &&
            (this.buttons === ModalButtons.RetryCancel || this.buttons === ModalButtons.AbortRetryCancel))
            display = true;
        else if (button === ModalButton.Yes &&
            (this.buttons === ModalButtons.YesNo || this.buttons === ModalButtons.YesNoCancel))
            display = true;
        else if (button === ModalButton.No &&
            (this.buttons === ModalButtons.YesNo || this.buttons === ModalButtons.YesNoCancel))
            display = true;
        else if (button === ModalButton.Abort &&
            (this.buttons === ModalButtons.AbortRetryCancel))
            display = true;

        return display ? "" : "none";
    }

    setLabels(message = this.defaults.message, title = this.defaults.title, buttons = this.defaults.buttons, defaultButton = this.defaults.defaultButton) {
        this.title = title;
        this.message = message;

        this.buttons = buttons;
        this.defaultButton = defaultButton;
    }

    terminate() {
        this.terminated.nativeElement.click();
        return true;
    }

    show(message = this.defaults.message, title = this.defaults.title, buttons = this.defaults.buttons, defaultButton = this.defaults.defaultButton) {
        this.setLabels(message, title, buttons, defaultButton);

        let promise = new Promise(resolve => {
            this.showDialog(resolve);
        });
        return promise;
    }

    private showDialog(resolve: (modalButton: ModalButton) => any) {

        this.showModalEl.nativeElement.click();

        let okOnClick = (e: any) => resolve(this.modalButton.Ok);
        let yesOnClick = (e: any) => resolve(this.modalButton.Yes);
        let noOnClick = (e: any) => resolve(this.modalButton.No);
        let abortOnClick = (e: any) => resolve(this.modalButton.Abort);
        let retryOnClick = (e: any) => resolve(this.modalButton.Retry);
        let cancelOnClick = (e: any) => resolve(this.modalButton.Cancel);
        let closeOnClick = (e: any) => resolve(this.defaultButton);
        let terminatedOnClick = (e: any) => resolve(this.modalButton.Terminated);
        
        this.renderer.listen(this.ok.nativeElement, "click", (event: any) => okOnClick(event));
        this.renderer.listen(this.yes.nativeElement, "click", (event: any) => yesOnClick(event));
        this.renderer.listen(this.no.nativeElement, "click", (event: any) => noOnClick(event));
        this.renderer.listen(this.abort.nativeElement, "click", (event: any) => abortOnClick(event));
        this.renderer.listen(this.retry.nativeElement, "click", (event: any) => retryOnClick(event));
        this.renderer.listen(this.cancel.nativeElement, "click", (event: any) => cancelOnClick(event));
        this.renderer.listen(this.close.nativeElement, "click", (event: any) => closeOnClick(event));
        this.renderer.listen(this.terminated.nativeElement, "click", (event: any) => terminatedOnClick(event));
    }
}