import { Injectable } from "@angular/core";

export interface SimpleToastInformation {
    header: string;
    body: string;
}

@Injectable({
    providedIn: "root",
})
export class ToastGeneratorService {
    public toasts: SimpleToastInformation[] = [];

    public show(header: string, body: string) {
        this.toasts.push({ header, body });
    }

    public remove(toast: SimpleToastInformation) {
        this.toasts = this.toasts.filter((t) => t !== toast);
    }
}
