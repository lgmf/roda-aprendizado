import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private router: Router,
		private translate: TranslateService,
		private app: AppComponent
	) { }

	ngOnInit() {
		this.app.refreshSystemLanguage();
	}

	login() {
		localStorage.setItem('currentUser', 'you');
		this.router.navigate(['']);
	}
}
