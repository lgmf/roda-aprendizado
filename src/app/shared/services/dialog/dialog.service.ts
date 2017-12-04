import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { UserDialogComponent } from '../../../users/user-dialog/user-dialog.component';
import { RoomDialogComponent } from '../../../rooms/room-dialog/room-dialog.component';
import { LoginWithCodeDialogComponent } from '../../../core/login-with-code-dialog/login-with-code-dialog.component';

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

	public openRoomDialog(): Observable<any> {
		let dialogRef: MatDialogRef<RoomDialogComponent>;
		dialogRef = this.dialog.open(RoomDialogComponent);
		return dialogRef.afterClosed();
	}	
	
	public openEnterWithCodeDialog(): Observable<any> {
		let dialogRef: MatDialogRef<LoginWithCodeDialogComponent>;
		dialogRef = this.dialog.open(LoginWithCodeDialogComponent);
		return dialogRef.afterClosed();
	}
}
