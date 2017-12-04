import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Helper } from '../../core/helper/helper';
import { RoomsService } from '../services/rooms.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-room-dialog',
  templateUrl: './room-dialog.component.html',
  styleUrls: ['./room-dialog.component.css']
})
export class RoomDialogComponent implements OnInit {

	subscribe1 : Subscription;
	form: FormGroup;
	private currentUser: string = localStorage.getItem('currentUser');

	constructor(
		public dialogRef: MatDialogRef<RoomDialogComponent>,
		private roomsService : RoomsService
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			title: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
			subject: new FormControl(null, Validators.compose([Validators.maxLength(50)])),
			description: new FormControl(null, Validators.compose([Validators.maxLength(50)])),
		});
	}

	save() {
		if (!this.form.valid)
			return;

		this.form.value.code = Helper.generateCode();
		this.form.value.user_identifier = this.currentUser;

		let room: any =  {...this.form.value};

		this.roomsService.addRoom(room)
		.then(rs => {
			console.log('Inserido com sucesso');
		}, error => {
			console.log(error);
		})

		this.dialogRef.close({ ...this.form.value });
	}

	ngOnDestroy(){
		if(this.subscribe1) this.subscribe1.unsubscribe();
	}

}
