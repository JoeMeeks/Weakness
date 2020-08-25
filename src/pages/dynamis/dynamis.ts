import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { FFXIService } from '../../providers/ffxi';
import { UIService } from '../../providers/ui';
import * as _ from 'underscore';

let vm: DynamisPage;
declare var window;

@Component({
	selector: 'page-dynamis',
	templateUrl: 'dynamis.html'
})
export class DynamisPage {

	debug: boolean = false;
	mobile: boolean;
	orientation: number = 0;

	type: string;
	title: string;
	list: any[] = [];

	constructor(
		private params: NavParams,
		private ffxi: FFXIService,
		public ui: UIService
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
		vm.type = vm.params.data.type;
	}

	ionViewDidEnter() {

	}

	ionViewWillLeave() {
		//if (window['DeviceOrientationEvent']) {
		//	window.removeEventListener('deviceorientation', vm.tilt);
		//}
	}
}
