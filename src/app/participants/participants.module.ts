import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/material/material.module';
import { ParticipantComponent } from './participant/participant.component';



@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
		ParticipantComponent
	]
})
export class ParticipantsModule { }
