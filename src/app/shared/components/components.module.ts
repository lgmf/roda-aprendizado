import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
		CommonModule,
		MaterialModule,
		TranslateModule
  ],
  declarations: [
		ConfirmDialogComponent
	],
	entryComponents: [
		ConfirmDialogComponent
	]
})
export class ComponentsModule { }
