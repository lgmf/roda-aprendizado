import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppAuthGuard } from './services/auth/auth-app.guard';
import { LoginAuthGuard } from './services/auth/auth-login.guard';
import { DialogsService } from './services/dialog/dialog.service';
import { environment } from '../../environments/environment';
import { SnackbarService } from './services/snackbar/snackbar.service';

@NgModule({
	imports: [
		MaterialModule,
		LayoutModule,
		ComponentsModule,				
		AngularFireDatabaseModule	
	],
	exports: [
		MaterialModule,
		LayoutModule,
		ComponentsModule
	],
	providers: [
		AppAuthGuard,
		LoginAuthGuard,
		DialogsService,
		SnackbarService
	]
})
export class SharedModule { }
