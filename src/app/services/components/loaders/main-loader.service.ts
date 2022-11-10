import {
    ApplicationRef,
    ComponentRef,
    createComponent,
    EnvironmentInjector,
    Injectable,
    ViewRef,
} from "@angular/core";
import { LoaderComponent } from "src/app/components/loaders/loader/loader.component";

@Injectable({
    providedIn: "root",
})
export class MainLoaderService {
    private loadingScreenNode: any | null = null;
    private loaderComponent: ComponentRef<LoaderComponent> | null = null;

    constructor(
        private applicationRef: ApplicationRef,
        private injector: EnvironmentInjector
    ) {}

    public async doWithLoadingScreen(callback: () => Promise<void>) {
        this.createLoadingScreen();
        await callback();
        this.removeLoadingScreen();
    }

    private createLoadingScreen() {
        if (this.loadingScreenNode === null) {
            this.loaderComponent = createComponent(LoaderComponent, {
                environmentInjector: this.applicationRef.injector,
                elementInjector: this.injector,
            });

            this.loadingScreenNode = document.body.appendChild(
                this.loaderComponent.location.nativeElement
            );
            this.applicationRef.attachView(this.loaderComponent.hostView);
        }
    }

    private removeLoadingScreen() {
        if (this.loadingScreenNode) {
            document.body.removeChild(this.loadingScreenNode);
            this.loadingScreenNode = null;
        }

        if (this.loaderComponent) {
            this.applicationRef.detachView(this.loaderComponent.hostView);
            this.loaderComponent = null;
        }
    }
}
