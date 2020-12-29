import { Component } from '@angular/core';
import { Events, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FFXIService } from '../providers/ffxi';
import { UIService } from '../providers/ui';
import { HomePage } from '../pages/home/home';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	rootPage: any = HomePage;

	copyright: string;
	active: string;

	menu: {
		title: string,
		items: {
			order: number,
			title: string,
			icon: string,
			name: string,
			type: string
		}[]
	}[] = [
		{
			title: "Abyssea",
			items: [
				{ order: 1, title: "Weapon Skills", icon: "assets/images/proc/red16.png", name: "abyssea", type: "red" },
				{ order: 2, title: "Magic Spells", icon: "assets/images/proc/yellow16.png", name: "abyssea", type: "yellow" },
				{ order: 3, title: "6:00&ndash;13:59 Piercing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-piercing" },
				{ order: 4, title: "14:00&ndash;21:59 Slashing", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-slashing" },
				{ order: 5, title: "22:00&ndash;5:59 Blunt", icon: "assets/images/proc/blue16.png", name: "abyssea", type: "blue-blunt" }
			]
		}, {
			title: "Dynamis",
			items: [
				{ order: 1, title: "Beastmen", icon: "assets/images/type/beastmen.png", name: "dynamis", type: "beastmen" },
				{ order: 2, title: "O. Bronzepiece", icon: "assets/images/currency/ordelle.png", name: "dynamis", type: "ordelle" },
				{ order: 2, title: "T. Whiteshell", icon: "assets/images/currency/tukuku.png", name: "dynamis", type: "tukuku" },
				{ order: 4, title: "1 Byne Bill", icon: "assets/images/currency/byne.png", name: "dynamis", type: "byne" }
			]
		}, {
			title: "Voidwatch",
			items: [
				{ order: 1, title: "Job Ability", icon: "assets/images/type/JA.png", name: "voidwatch", type: "job-ability" },
				{ order: 2, title: "Black Magic", icon: "assets/images/type/BLM.png", name: "voidwatch", type: "black-magic" },
				{ order: 3, title: "White Magic", icon: "assets/images/type/WHM.png", name: "voidwatch", type: "white-magic" },
				{ order: 4, title: "Ninjutsu", icon: "assets/images/type/NIN.png", name: "voidwatch", type: "ninjutsu" },
				{ order: 5, title: "Bard Songs", icon: "assets/images/type/BRD.png", name: "voidwatch", type: "bard-songs" },
				{ order: 6, title: "Blue Magic", icon: "assets/images/type/BLU.png", name: "voidwatch", type: "blue-magic" }
			]
		},
		{
			title: "About",
			items: [
				{ order: 1, title: "FFXI PROC", icon: "assets/images/proc/white16.png", name: "home", type: "index" }
			]
		}
	];

	constructor(
		private events: Events,
		private platform: Platform,
		private status: StatusBar,
		private splash: SplashScreen,
		private ffxi: FFXIService,
		public ui: UIService,
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
			if (platform.is('cordova')) this.ui.update();

			platform.resume.subscribe((e) => {
				console.info('resume');
				events.publish('time', null);
				if (platform.is('cordova')) this.ui.update();
				//this.update(lc);
			});

			platform.pause.subscribe((e) => {
				console.info('pause');
			});

			//this.version = `Version ${this.json.version}`;
			//this.version = `Version 1.5.0`;
			//process.env.npm_package_version
			//this.copyright = `&copy; ${new Date().getFullYear()} ${process.env.npm_package_author}`;
			this.copyright = `&copy; ${new Date().getFullYear()} RARE BEAR SOFTWARE LTD`;

			ui.page = 'home';
			this.active = 'index';
			this.events.subscribe('link', val => this.active = val);
			//this.events.subscribe('time', val => { this.ui.chime(); });
		});
	}

	link(item: any) {
		this.active = item.type;
		this.ui.swap(item.name, { type: item.type }, { animate: false })
	}

	blur() {
		let active: any = document.activeElement;
		if (active && active.blur) active.blur();
	}

	timer() {
		console.debug('show timer modal');
		//this.ui.modal
	}
}

