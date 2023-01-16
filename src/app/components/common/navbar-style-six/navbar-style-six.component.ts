import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar-style-six',
    templateUrl: './navbar-style-six.component.html',
    styleUrls: ['./navbar-style-six.component.scss']
})
export class NavbarStyleSixComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

}