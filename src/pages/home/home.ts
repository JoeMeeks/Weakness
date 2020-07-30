import { Component } from '@angular/core';
import { Platform, ActionSheet, ActionSheetController, Alert, AlertController, Loading, LoadingController, Modal, ModalController } from 'ionic-angular';
import * as _ from 'underscore';

let vm: HomePage;
declare var window;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	debug: boolean = false;
	mobile: boolean;
	orientation: number = 0;
	
	private loading: Loading;
	private modal: Modal;
	private alert: Alert;

	constructor(
		private action: ActionSheetController,
		private ac: AlertController,
		private lc: LoadingController,
		private mod: ModalController,
		private platform: Platform
	) {
		vm = this;
	}

	private load() {

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
