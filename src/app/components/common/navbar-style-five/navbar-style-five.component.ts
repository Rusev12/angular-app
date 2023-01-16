import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar-style-five',
    templateUrl: './navbar-style-five.component.html',
    styleUrls: ['./navbar-style-five.component.scss']
})
export class NavbarStyleFiveComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}