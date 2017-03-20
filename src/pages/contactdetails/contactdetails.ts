import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactDetails {
	item : any;
	constructor(public params: NavParams){
		this.item = this.params.get('item');
	}

}
