import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { DialogsService } from '../../shared/services/dialog/dialog.service';
import { UsersService } from '../shared/users.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

	users: any[] = [];
	subscribe1: Subscription;

	constructor(
		private usersService: UsersService,
		private dialogService: DialogsService
	) { }

	ngOnInit() {
		this.fillUsers();
	}

	ngOnDestroy() {
		if (this.subscribe1) this.subscribe1.unsubscribe();
	}

	getUserData(username: string) {
		this.subscribe1 = this.usersService.get(username).subscribe((data) => {
			this.users.push(data);
		}, (err) => {
			console.log('Ocorreu um erro na sua solicitação');
		});
	}

	addUser() {
		this.dialogService.openUserDialog().subscribe((res) => {
			if (res) {
				this.getUserData(res.username);
			}
		});
	}

	fillUsers() {
		this.getUserData('mvmjacobs');
		this.getUserData('chpsousa');
		this.getUserData('engelgabriel');
		this.getUserData('young');
	}
}
