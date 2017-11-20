import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './layout.component';

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		TranslateModule
	],
	declarations: [
		LayoutComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
