import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-with-code-dialog',
  templateUrl: './login-with-code-dialog.component.html',
  styleUrls: ['./login-with-code-dialog.component.css']
})
export class LoginWithCodeDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LoginWithCodeDialogComponent>,
    public loginService: LoginService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      roomIdentifier: new FormControl(null),
    });
  }

  enter() {
    if (!this.form.valid)
      return;

    this
      .loginService
      .loginWithRoomIdentifier()
      .then(rs => {        
        this.router.navigateByUrl(`/users/${this.form.value.roomIdentifier}`);
        this.dialogRef.close(true);
      })
      .catch(err => {
        this.dialogRef.close(false);
      })
  }

}
