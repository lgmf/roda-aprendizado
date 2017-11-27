import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MatIconModule,
	MatButtonModule,
	MatDialogModule,
	MatToolbarModule,
	MatInputModule,
	MatCardModule,
	MatSelectModule,
	MatSnackBarModule,
	MatProgressBarModule
} from '@angular/material';

@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatProgressBarModule,
		MatSnackBarModule
	],
	exports: [
		CommonModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatCardModule,
		MatSelectModule,
		MatProgressBarModule,
		MatSnackBarModule
	]
})
export class MaterialModule { }
