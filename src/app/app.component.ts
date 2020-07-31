import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FFXIService } from '../providers/ffxi';
import { UIService } from '../providers/ui';
import { HomePage } from '../pages/home/home';
//import * as config from '../../../package.json'
import * as json from '../../package.json';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	version: string;
	copyright: string;

	menu: {
		title: string,
		items: {
			order: number,
			title: string,
			icon: string,
			name: string
		}[]
	}[] = [
		{
			title: "Abyssea",
			items: [
				{ order: 1, title: "Weapon Skills", icon: "assets/images/proc/red16.png", name: "abyssea-red" },
				{ order: 2, title: "Magic Spells", icon: "assets/images/proc/yellow16.png", name: "abyssea-yellow" },
				{ order: 3, title: "6:00&ndash;13:59 Piercing", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-piercing" },
				{ order: 4, title: "14:00&ndash;21:59 Slashing", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-slashing" },
				{ order: 5, title: "22:00&ndash;5:59 Blunt", icon: "assets/images/proc/blue16.png", name: "abyssea-blue-blunt" }
			]
		}, {
			title: "Dynamis",
			items: [
				{ order: 1, title: "Beastmen", icon: "assets/images/type/beastmen.png", name: "dynamis-beastmen" },
				{ order: 2, title: "O. Bronzepiece", icon: "assets/images/currency/ordelle.png", name: "dynamis-ordelle" },
				{ order: 2, title: "T. Whiteshell", icon: "assets/images/currency/tukuku.png", name: "dynamis-tukuku" },
				{ order: 4, title: "1 Byne Bill", icon: "assets/images/currency/byne.png", name: "dynamis-byne" }
			]
		}, {
			title: "Voidwatch",
			items: [
				{ order: 1, title: "Job Ability", icon: "assets/images/type/JA16.png", name: "voidwatch-job-ability" },
				{ order: 2, title: "Black Magic", icon: "assets/images/type/BLM16.png", name: "voidwatch-black-magic" },
				{ order: 3, title: "White Magic", icon: "assets/images/type/WHM16.png", name: "voidwatch-white-magic" },
				{ order: 4, title: "Ninjutsu", icon: "assets/images/type/NIN16.png", name: "voidwatch-ninjutsu" },
				{ order: 5, title: "Bard Songs", icon: "assets/images/type/BRD16.png", name: "voidwatch-bard-songs" },
				{ order: 6, title: "Blue Magic", icon: "assets/images/type/BLU16.png", name: "voidwatch-blue-magic" }
			]
		},
		{
			title: "About",
			items: [
				{ order: 1, title: "FFXI PROC", icon: "assets/images/proc/white16.png", name: "home" }
			]
		}
	];

	constructor(
		private platform: Platform,
		private status: StatusBar,
		private splash: SplashScreen,
		private ffxi: FFXIService,
		private ui: UIService,
		public mc: MenuController
	) {
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

			this.version = `Version ${json.version}`;
			this.copyright = `&copy; ${new Date().getFullYear()} RARE BEAR SOFTWARE LTD`;
		});
	}

	timer() {
		console.debug('show timer modal');
		//this.ui.modal
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

