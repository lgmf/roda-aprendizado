import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../services/login.service';

import { AppComponent } from '../../app.component';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

	items: any[];
	subscribe1 : Subscription;

	constructor(
		private router: Router,
		private translate: TranslateService,
		private app: AppComponent,
		private loginService : LoginService
		
	) { }

	ngOnInit() {
		this.app.refreshSystemLanguage();
		this.subscribe1 = this.loginService.getTeam().subscribe(data => this.items = data);
			
	} 

	login() {
		localStorage.setItem('currentUser', 'you');
		this.router.navigate(['']);
	}

	ngOnDestroy(){
		if(this.subscribe1) this.subscribe1.unsubscribe();
	}
}
