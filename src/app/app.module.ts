import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';

import { AppRouting } from './app.routing';
import { environment } from '../environments/environment';

import { LoginAuthGuard } from './shared/services/auth/auth-login.guard';
import { HttpInterceptor } from './shared/services/http/http-interceptor.service';
import { CoreModule } from './core/core.module';


export function HttpInterceptorFactory(backend: XHRBackend, options: RequestOptions, router: Router, injector: Injector) {
	return new HttpInterceptor(backend, options, router, injector);
}

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpModule,
		HttpClientModule,
		AppRouting,
		CoreModule,
		SharedModule,
		UsersModule,
		FormsModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule		
	],
	declarations: [
		AppComponent				
	],
	providers: [
		{ provide: Http, useFactory: HttpInterceptorFactory, deps: [XHRBackend, RequestOptions, Router, Injector] }
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
