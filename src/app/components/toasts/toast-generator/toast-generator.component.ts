import { Component } from "@angular/core";
import {
    ToastGeneratorService,
    ToastType,
} from "src/app/services/components/toasts/toast-generator.service";

@Component({
    selector: "app-toast-generator",
    templateUrl: "./toast-generator.component.html",
    styleUrls: ["./toast-generator.component.sass"],
})
export class ToastGeneratorComponent {
    public toastType: typeof ToastType = ToastType;

    constructor(public toastService: ToastGeneratorService) {}
}
