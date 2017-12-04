import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomsService {

  private currentUser: string = localStorage.getItem('currentUser');

  constructor(
    private db: AngularFireDatabase
  ) { }

  getRooms(): Observable<any> {
    return this.db
      .list(`${this.currentUser}/rooms`)
      .valueChanges()      
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addRoom(room: any){
    return this.db
    .list('rooms')
    .push(room)
  }
}
