import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-machine-learning-demo2',
    templateUrl: './machine-learning-demo2.component.html',
    styleUrls: ['./machine-learning-demo2.component.scss']
})
export class MachineLearningDemo2Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	bannerBGImage = [
        {
            img: `assets/img/banner-bg.jpg`
        }
    ]

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
    projectsSlides: OwlOptions = {
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }
    feedbackSlides: OwlOptions = {
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true,
		items: 1
    }

}