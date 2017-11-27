import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/material/material.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { LoginWithCodeDialogComponent } from './login-with-code-dialog/login-with-code-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule,
		AngularFireAuthModule,
		FlexLayoutModule,
		RouterModule
	],
	declarations: [
		LoginComponent,
		RegisterComponent,
		LoginWithCodeDialogComponent
	],
	providers: [
		LoginService
	],
	entryComponents: [
		LoginWithCodeDialogComponent
	]
})
export class CoreModule { }
