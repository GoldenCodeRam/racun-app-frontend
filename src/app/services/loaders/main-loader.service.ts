import { Injectable, ViewContainerRef } from "@angular/core";
import { MainLoaderComponent } from "src/app/components/dynamic/loaders/main-loader/main-loader.component";

@Injectable({
    providedIn: "root",
})
export class MainLoaderService {
    constructor() {}

    public async showMainLoader(root: ViewContainerRef, callback: () => Promise<void>) {
        root.createComponent(MainLoaderComponent, {
            index: 0
        });

        await callback();

        root.remove(0);
    }
}
