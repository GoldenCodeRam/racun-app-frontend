import {
    Component,
} from "@angular/core";
import { ToastGeneratorService } from "src/app/services/components/toasts/toast-generator.service";

@Component({
    selector: "app-toast-generator",
    templateUrl: "./toast-generator.component.html",
    styleUrls: ["./toast-generator.component.sass"],
})
export class ToastGeneratorComponent {
    constructor(public toastService: ToastGeneratorService) {}

    public test() {
        console.log("test");
    }
}
