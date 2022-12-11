import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

export enum ToastType {
    ERROR,
    MESSAGE,
}

export interface ToastMessage {
    header: string;
    body: string;
}

interface SimpleToastInformation {
    header: string;
    body: string;
    toastType: ToastType;
}

@Injectable({
    providedIn: "root",
})
export class ToastGeneratorService {
    public toasts: SimpleToastInformation[] = [];

    public showMessage(message: ToastMessage) {
        this.toasts.push({
            header: message.header,
            body: message.body,
            toastType: ToastType.MESSAGE,
        });
    }

    public showError(error: any) {
        console.log("test");
        this.toasts.push(this.getMessageFromErrorCode(error));
    }

    public remove(toast: SimpleToastInformation) {
        this.toasts = this.toasts.filter((t) => t !== toast);
    }

    private getMessageFromErrorCode(
        response: HttpErrorResponse
    ): SimpleToastInformation {
        if (response.error.code) {
            switch (response.error.code) {
                case "UCDE":
                    return {
                        header: "Valor duplicado",
                        body: "Uno de los valores ingresados se encuentra duplicado, como un correo o nombre de usuario.",
                        toastType: ToastType.ERROR,
                    };
                case "LSUE":
                    return {
                        header: "Último Super Usuario",
                        body: "No se puede eliminar o actualizar la información del Super Usuario. Tienes que crear otro usuario primero.",
                        toastType: ToastType.ERROR,
                    };
                case "QRCE":
                    return {
                        header: "Error de código QR",
                        body: "El código QR no pudo ser reconocido.",
                        toastType: ToastType.ERROR,
                    };
            }
        }

        return {
            header: "Error desconocido",
            body: "Se ha generado un error desconocido.",
            toastType: ToastType.ERROR,
        };
    }
}
