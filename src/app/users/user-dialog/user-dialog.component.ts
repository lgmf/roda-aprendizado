import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-user-dialog',
	templateUrl: './user-dialog.component.html',
	styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

	form: FormGroup;
	username: string;

	constructor(
		public dialogRef: MatDialogRef<UserDialogComponent>
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			username: new FormControl(null, Validators.compose([Validators.required, Validators.maxLength(50)])),
		});
	}

	save() {
		if (!this.form.valid)
			return;

		this.dialogRef.close({ username: this.username });
	}

}
