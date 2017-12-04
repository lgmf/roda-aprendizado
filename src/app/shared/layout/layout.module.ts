import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from './layout.component';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		MaterialModule,
		RouterModule,
		TranslateModule,
		FlexLayoutModule
	],
	declarations: [
		LayoutComponent
	],
	exports: [
		LayoutComponent
	]
})
export class LayoutModule { }
