import { Component } from '@angular/core';
import { Platform, LoadingController, LoadingOptions, Loading } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	constructor(platform: Platform, status: StatusBar, splash: SplashScreen, lc: LoadingController) {
		platform.ready().then(() => {
			console.log('platform ready');
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			status.overlaysWebView(true);
			status.styleLightContent();
			splash.hide();
			//0x00000000
			//this.update(lc);

			platform.resume.subscribe((e) => {
				console.log('resume');
				//this.update(lc);
			});

			platform.pause.subscribe((e) => {
				console.log('pause');
			});
		});
	}
	
	//private async update(lc: LoadingController) {
	//	try {
	//		//let ver = await Pro.deploy.getCurrentVersion();
	//		//console.debug('Pro Deploy version:');
	//		//console.log(ver);
	//		let next = await Pro.deploy.checkForUpdate();
	//		if (next && next.available) {
	//			let opts: LoadingOptions = {
	//					content: 'Loading update',
	//					enableBackdropDismiss: false
	//				},
	//				loading: Loading = lc.create(opts);
	//			loading.present();

	//			await Pro.deploy.downloadUpdate((progress) => {
	//				//console.log(progress);
	//				loading.setContent(`Downloading update&hellip;${progress}%`);
	//			});

	//			await Pro.deploy.extractUpdate((progress) => {
	//				//console.log(progress);
	//				loading.setContent(`Installing update&hellip;${progress}%`);
	//			});

	//			loading.dismiss();

	//			await Pro.deploy.reloadApp();
	//		}
	//	} catch (ex) {
	//		// We encountered an error.
	//		console.error(`Pro Deploy update exception: ${ex.message}`);
	//		console.log(ex);
	//	}
	//}
}

