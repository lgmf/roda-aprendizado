import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/material/material.module';
import { RoomsComponent } from './rooms.component';

import { RoomsService } from './services/rooms.service';
import { RoomDialogComponent } from './room-dialog/room-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule
	],
	declarations: [
        RoomsComponent,
        RoomDialogComponent
    ],
    exports: [
        RoomsComponent
    ],
	providers: [
		RoomsService
	],
	entryComponents:[
		RoomDialogComponent
	]
})
export class RoomsModule { }