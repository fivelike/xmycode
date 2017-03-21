import { Component } from '@angular/core';

import { NavParams ,ViewController} from 'ionic-angular';

@Component({
  selector: 'page-contactdetails',
  templateUrl: 'contactdetails.html'
})
export class ContactDetails {
	item : any;
	constructor(public params: NavParams,
  public viewCtrl: ViewController){
		this.item = this.params.get('item');
	}
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
