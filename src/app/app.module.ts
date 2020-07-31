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

@NgModule({
	declarations: [
		MyApp,
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
				{ component: HomePage, name: 'home', segment: '' }
			]
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
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
