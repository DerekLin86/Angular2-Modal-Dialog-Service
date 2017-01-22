import {Injectable} from "@angular/core";

export enum ModalButton {
    Ok = 0,
    Cancel = 1,
    Retry = 2,
    Yes = 3,
    No = 4,
    Abort = 5,
    Terminated = 6
}

export enum ModalButtons {
    Ok = 0,
    OkCancel = 1,
    RetryCancel = 2,
    YesNo = 3,
    YesNoCancel = 4,
    Cancel = 5,
    AbortRetryCancel = 6
}

@Injectable()
export class ModalDialogService {
    show: (message?: string, title?: string, buttons?: ModalButtons, defaultButton?: ModalButton) => Promise<ModalButton>;
    terminate: () => ModalButton;
}