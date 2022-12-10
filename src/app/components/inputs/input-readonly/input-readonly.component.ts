import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-input-readonly",
    templateUrl: "./input-readonly.component.html",
    styleUrls: ["./input-readonly.component.sass"],
})
export class InputReadonlyComponent<T> implements OnInit {
    @Input("label")
    public label!: string;

    @Input("value")
    public value!: T;

    constructor() {}

    ngOnInit(): void {
    }
}
