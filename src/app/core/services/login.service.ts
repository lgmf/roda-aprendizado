import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  getTeam(): Observable<any> {
    return this.db
      .list('team')
      .valueChanges()      
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
