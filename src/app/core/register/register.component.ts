import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../../shared/services/snackbar/snackbar.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showProgress: boolean = false;

  constructor(
    private router: Router,
    private translate: TranslateService,
    private app: AppComponent,
    private loginService: LoginService,
    public formBuilder: FormBuilder,
    public snackBar: SnackbarService,
  ) { }

  ngOnInit() {
    this.app.refreshSystemLanguage();

    this.registerForm = this.formBuilder.group({
      email: [(localStorage.email) ? localStorage.email : null],
      password: [null],
      confirmPassword: [null]
    })
  }

  finishRegister() {
    if (this.registerForm.invalid) return;

    let form = { ...this.registerForm.value };

    if (form.password !== form.confirmPassword) {
      this.snackBar.openSnackbar('Senhas não conferem', 'OK', 2000);
      return
    }

    this.showProgress = true;

    this.loginService
      .createUserWithEmailAndPassword(form.email, form.password).then((rs) => {
        var message = rs.message;
        this.showProgress = false;
      })
      .catch((error) => {
        this.showProgress = false;
        this.snackBar.openSnackbar(error.message, 'OK', 2000);
      })
  }

}
