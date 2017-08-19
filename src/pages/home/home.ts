import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PersonServiceProvider} from "../../providers/person-service/person-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public personService : PersonServiceProvider) {

  }
  goToNext(){
    // this.navCtrl.push('LandingPage');
    this.personService.load()
      .then((users)=> {
        console.log(users);
      })
      .catch((error)=>{
        console.log(error);
      });
  }
}
