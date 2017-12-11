import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { LoginService } from '../services/login.service';

import { AppComponent } from '../../app.component';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Rx';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SnackbarService } from '../../shared/services/snackbar/snackbar.service';
import { DialogsService } from '../../shared/services/dialog/dialog.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

	items: any[];
	loginForm: FormGroup;
	showProgress: boolean = false;

	subscribe1: Subscription;

	constructor(
		private router: Router,
		private translate: TranslateService,
		private app: AppComponent,
		private loginService: LoginService,
		public formBuilder: FormBuilder,
		public snackBar: SnackbarService,
		public dialog: DialogsService
	) { }

	ngOnInit() {
		this.app.refreshSystemLanguage();

		this.loginForm = this.formBuilder.group({
			email: [(localStorage.email) ? localStorage.email : null],
			password: [null]
		})
	}

	login() {
		if (this.loginForm.invalid) return;

		this.showProgress = true;

		this.loginService
			.login(this.loginForm.value.email, this.loginForm.value.password)
			.then(rs => {
				this.showProgress = false;
				localStorage.setItem('currentUser', rs.uid);
				localStorage.setItem('isAnonymous', 'false');
				this.router.navigateByUrl(`/`);
			})
			.catch(error => {
				this.showProgress = false;
				this.snackBar.openSnackbar(error.message, 'OK', 1500);
			});
	}

	resetPassword(): void {
		if (!confirm("Are you sure?")) return;

		this
			.loginService
			.resetPassword(this.loginForm.value.email)
			.then(rs => {
				console.log(rs);
				alert(`To complete accees the link on ${this.loginForm.value.email}`)
			})
			.catch(error => console.log(error.message))

	}

	loginWithRoomIdentifier(): void {
		this.dialog
			.openEnterWithCodeDialog()
			.subscribe((res) => {
				if (!res)
					this.snackBar.openSnackbar("Erro", "OK", 1500);
				else {
					localStorage.setItem('currentUser', res.uid);
					localStorage.setItem('isAnonymous', 'true');
				}
			});
	}

	ngOnDestroy() {

	}

}
