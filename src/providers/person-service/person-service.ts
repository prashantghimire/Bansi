import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PersonServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PersonServiceProvider {

  data: any;

  constructor(public http: Http) {
    console.log('Hello PersonServiceProvider Provider');
  }

  load() {

    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise((resolve, reject) => {
      this
        .http
        .get('https://jsonplaceholder.typicode.com/users')
        .map((response) =>{
          return response.json();
        })
        .subscribe((users) =>{
          this.data = users;
          resolve(this.data);
        });
    });
  }
}
