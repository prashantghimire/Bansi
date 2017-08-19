import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonServiceProvider} from "../../providers/person-service/person-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any;

  constructor(public navCtrl: NavController, public personService : PersonServiceProvider) {

  }
  goToNext(){
    // this.navCtrl.push('LandingPage');
    this.personService.load()
      .then((users)=> {
        this.users = users;
      })
      .catch((error)=>{
        console.log(error);
      });
  }
}
