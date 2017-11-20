import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/material/material.module';

import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { UserListComponent } from './user-list/user-list.component';

import { UsersService } from './shared/users.service';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		UserListComponent,
		UserDialogComponent
	],
	providers: [
		UsersService
	],
	entryComponents: [
		UserDialogComponent
	]
})
export class UsersModule { }
