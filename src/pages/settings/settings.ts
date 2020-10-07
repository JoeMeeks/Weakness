import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FFXIService } from '../../providers/ffxi';
import { UIService } from '../../providers/ui';
import * as _ from 'underscore';

let vm: SettingsPage;
declare var window;

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {

	constructor(
		private view: ViewController,
		private ffxi: FFXIService,
		public ui: UIService
	) {
		vm = this;
	}

	close() {
		vm.view.dismiss();
	}

	//tips = _.debounce(() => {
	//	//let mv = vm.mo
	//	vm.modal = vm.mod.create(TipsPage, { seen: vm.seen }, { cssClass: 'tips', enableBackdropDismiss: false });
	//	vm.modal.onDidDismiss(() => {
	//		if (!vm.overlay) {
	//			vm.load();
	//		}
	//		if (!vm.seen) {
	//			vm.seen = true;
	//			vm.storage.create('settings').then((sso: SecureStorageObject) => {
	//				sso.set('seentips', 'true');
	//			});
	//		}
	//	});
	//	vm.modal.present();
	//}, 400, true);

	ionViewWillEnter() {
		//load
	}

	ionViewDidEnter() {
		//if ('proximity' in navigator) {
		//	//alert('ProximitySensor');
		//	let proximity: any = navigator['proximity'],
		//		onSuccess = (state) => {
		//			//alert('Proximity state: ' + (state ? 'near' : 'far'));
		//			console.info(state);
		//		};

		//	proximity.enableSensor();

		//	setInterval(function () {
		//		proximity.getProximityState(onSuccess);
		//	}, 1000);
		//}
	}

	ionViewWillLeave() {
		//if (window['DeviceOrientationEvent']) {
		//	window.removeEventListener('deviceorientation', vm.tilt);
		//}
	}
}
