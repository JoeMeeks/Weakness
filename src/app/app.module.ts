import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FFXIService } from '../providers/ffxi';
import { UIService } from '../providers/ui';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbysseaPage } from '../pages/abyssea/abyssea';
import { DynamisPage } from '../pages/dynamis/dynamis';
import { VoidwatchPage } from '../pages/voidwatch/voidwatch';

@NgModule({
	declarations: [
		MyApp,
		AbysseaPage,
		DynamisPage,
		VoidwatchPage,
		HomePage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp,
		{
			mode: 'ios',
			locationStrategy: 'path',
			swipeBackEnabled: false,
		}, {
			links: [
				{ component: HomePage, name: 'home', segment: '' },
				{ component: AbysseaPage, name: 'abyssea', segment: 'abyssea/:type' },
				{ component: DynamisPage, name: 'dynamis', segment: 'dynamis/:type' },
				{ component: VoidwatchPage, name: 'voidwatch', segment: 'voidwatch/:type' }
			]
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		AbysseaPage,
		DynamisPage,
		VoidwatchPage,
		HomePage
	],
	providers: [
		NativePageTransitions,
		SplashScreen,
		StatusBar,
		FFXIService,
		UIService,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
