import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-pc-repair-demo',
    templateUrl: './pc-repair-demo.component.html',
    styleUrls: ['./pc-repair-demo.component.scss']
})
export class PcRepairDemoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
    }
    feedbackSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		items: 1
    }

    // Services Content
    singleRepairServices = [
        {
            bgImg: `assets/img/repair-services-img/1.jpg`,
            icon: `flaticon-monitor`,
            title: `Laptop Repair`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        },
        {
            bgImg: `assets/img/repair-services-img/2.jpg`,
            icon: `flaticon-idea`,
            title: `Computer Repair`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        },
        {
            bgImg: `assets/img/repair-services-img/3.jpg`,
            icon: `flaticon-layout`,
            title: `Apple Products Repair`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        },
        {
            bgImg: `assets/img/repair-services-img/4.jpg`,
            icon: `flaticon-update-arrows`,
            title: `Software Update`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        },
        {
            bgImg: `assets/img/repair-services-img/5.jpg`,
            icon: `flaticon-smartphone`,
            title: `Smartphone Repair`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        },
        {
            bgImg: `assets/img/repair-services-img/6.jpg`,
            icon: `flaticon-hard-disk`,
            title: `Data Backup & Recovery`,
            desc: `Lorem ipsum eiusmod dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.`,
            link: `services-details`
        }
    ]

}