import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutComponent } from './shared/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './users/user-list/user-list.component';

import { LoginAuthGuard } from './shared/services/auth/auth-login.guard';
import { AppAuthGuard } from './shared/services/auth/auth-app.guard';

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent, canActivate: [LoginAuthGuard] },
	{ path: '', component: LayoutComponent, canActivate: [AppAuthGuard], children: [
		{ path: 'users', component: UserListComponent }
	] },

	// page not found redirect to initial page
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
	exports: [RouterModule]
})
export class AppRouting { }
