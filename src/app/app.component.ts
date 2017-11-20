import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	lang: string = 'pt';

	constructor(
		public translate: TranslateService
	) {
		translate.addLangs(['en', 'pt']);
		translate.setDefaultLang('pt');
		this.refreshSystemLanguage();
	}

	ngOnInit() {
	}

	refreshSystemLanguage() {
		this.lang = (localStorage.getItem('preferedLang') ? localStorage.getItem('preferedLang') : this.translate.getBrowserLang());
		this.translate.use(this.lang.match(/en|pt/) ? this.lang : 'pt');
	}
}
