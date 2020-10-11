import { Component } from '@angular/core';
import { Platform, ViewController } from 'ionic-angular';
import { FFXIService } from '../../providers/ffxi';
import { UIService } from '../../providers/ui';

let vm: SettingsPage;
declare var window;
declare var admob;

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {

	id: string;

	constructor(
		private platform: Platform,
		private view: ViewController,
		public ui: UIService
	) {
		vm = this;
	}

	load(e) {
		console.info('banner load');
		console.info(JSON.stringify(e));
	}

	fail(e) {
		console.error('banner fail');
		console.info(JSON.stringify(e));
	}

	close() {
		vm.view.dismiss();
	}

	ionViewDidEnter() {
		//vm.admob.setDevMode(true);
		//document.addEventListener('admob.banner.load', vm.load);
		//document.addEventListener('admob.banner.load_fail', vm.fail);

		admob.setDevMode(true);
		if (vm.platform.is('android')) {
			//vm.id = 'ca-app-pub-3940256099942544/6300978111' //prod banner
			vm.id = 'ca-app-pub-3940256099942544/6300978111' //test banner
		} else if (vm.platform.is('ios')) {
			//vm.id = 'ca-app-pub-1450135138875904/3285023796' //prod banner
			vm.id = 'ca-app-pub-3940256099942544/2934735716' //test banner
		}

		let opt: any = 
		//console.info(JSON.stringify(window.cordova));
		//console.info(`${vm.platform.width()}x${vm.platform.width() * (250 / 300)}`);
		admob.banner.show({
			id: vm.id,
			size: {
				width: 300,
				height: 250
			}
		}).then((res) => {
			//console.info('banner show success');
			//console.info(JSON.stringify(res));
		}).catch(err => {
			console.error('banner show failure');
			//console.error(err.message);
			console.info(JSON.stringify(err));
		});
	}

	ionViewWillLeave() {
		//document.removeEventListener('admob.banner.load', vm.load);
		//document.addEventListener('admob.banner.load_fail', vm.fail);
		//vm.admob.banner.hide({ id: 'ca-app-pub-3940256099942544/2934735716' }); //test banner
		//vm.admob.banner.hide(); //Error: adUnitID is missing 
		admob.banner.hide(vm.id);
	}
}
