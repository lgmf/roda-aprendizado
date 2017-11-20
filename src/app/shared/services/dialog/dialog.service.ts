import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { UserDialogComponent } from '../../../users/user-dialog/user-dialog.component';

@Injectable()
export class DialogsService {

	constructor(
		private dialog: MatDialog
	) { }

	public confirm(title: string, message: string, buttonOk?: string, buttonCancel?: string): Observable<boolean> {

		let dialogRef: MatDialogRef<ConfirmDialogComponent>;

		dialogRef = this.dialog.open(ConfirmDialogComponent);
		dialogRef.componentInstance.title = title;
		dialogRef.componentInstance.message = message;
		dialogRef.componentInstance.buttonOk = buttonOk || 'OK';
		dialogRef.componentInstance.buttonCancel = buttonCancel || 'Cancelar';

		return dialogRef.afterClosed();
	}

	public openUserDialog(): Observable<any> {
		let dialogRef: MatDialogRef<UserDialogComponent>;
		dialogRef = this.dialog.open(UserDialogComponent);

		return dialogRef.afterClosed();
	}
}
