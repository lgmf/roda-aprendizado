import { DialogsService } from '../shared/services/dialog/dialog.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RoomsService} from '../rooms/services/rooms.service';

import { AppComponent } from '../app.component/../app.component';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {

  items: any[];
	subscribe1 : Subscription;

  constructor(
    private router: Router,
		private translate: TranslateService,
		private app: AppComponent,
    private roomsService : RoomsService,
    private dialogService: DialogsService
  ) { }

  ngOnInit() {
    this.app.refreshSystemLanguage();
		this.subscribe1 = this.roomsService.getRooms().subscribe(data => this.items = data);
  }

  ngOnDestroy() {
    if(this.subscribe1) this.subscribe1.unsubscribe();
  }

  addRoom() {
		this.dialogService.openRoomDialog().subscribe((res) => {
			if (res) {
				console.log(res);
			}
		});
	}

}
