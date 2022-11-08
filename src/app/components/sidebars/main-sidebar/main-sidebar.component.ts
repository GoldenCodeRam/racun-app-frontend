import { Component, OnInit } from "@angular/core";
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: "app-main-sidebar",
    templateUrl: "./main-sidebar.component.html",
    styleUrls: ["./main-sidebar.component.sass"],
})
export class MainSidebarComponent implements OnInit {
    constructor(public activeOffcanvas: NgbActiveOffcanvas) {}

    ngOnInit(): void {}
}
