import { Component, OnInit } from '@angular/core';

import { RandomNumberService } from '../random-number.service';

@Component({
  selector: 'app-die',
  templateUrl: './die.component.html',
  styleUrls: ['./die.component.css']
})
export class DieComponent implements OnInit {
	value: number;
	visible: boolean = false;

	constructor(public randomNumber: RandomNumberService) {}

	roll() {
		this.visible = false;
		this.value = this.randomNumber.between(1, 6);
		setTimeout(() => {this.visible = true;}, 200);
	}

	ngOnInit() {
		this.roll();
	}
}
