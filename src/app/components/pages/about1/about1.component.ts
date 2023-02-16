import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-about1',
    templateUrl: './about1.component.html',
    styleUrls: ['./about1.component.scss']
})
export class About1Component implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	btnVal = "Все още не сте избрали!";
     myShows = ['Интерлийз', 'Прокредит', 'Квот такоа'];

	myFunc(){
		this.btnVal = this.myShows[Math.floor(Math.random() * this.myShows.length)];
		console.log("function called");
	  }

    teamSlides: OwlOptions = {
		loop: true,
		nav: false,
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
			1500: {
				items: 5
			}
		}
    }

}