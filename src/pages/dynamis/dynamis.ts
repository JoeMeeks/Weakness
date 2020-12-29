import { Component } from '@angular/core';
import { Events, NavParams } from 'ionic-angular';
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
	ordelle: any[] = [];
	tukuku: any[] = [];
	byne: any[] = [];

	constructor(
		private events: Events,
		private params: NavParams,
		private ffxi: FFXIService,
		public ui: UIService
	) {
		vm = this;
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


	switch(mode?: string) {
		let hour:number = vm.ffxi.hour(),
			time: number = 0;
		if (hour < 8) {
			hour = 0;
		} else if (hour < 16) {
			time = 8;
		} else {
			time = 16;
		}
		//console.log(hour);
		
		vm.ordelle = _.filter(vm.ffxi.dynamis.ordelle, { time: time });
		vm.tukuku = _.filter(vm.ffxi.dynamis.tukuku, { time: time });
		vm.byne = _.filter(vm.ffxi.dynamis.byne, { time: time });

		if (mode) {
			vm.ui.link(mode);
		}
	}

	ionViewWillEnter() {
		//load
		vm.type = vm.params.data.type;
		vm.switch();

		vm.events.subscribe('time', () => {
			vm.switch(null);
		});
	}

	ionViewWillLeave() {
		//if (window['DeviceOrientationEvent']) {
		//	window.removeEventListener('deviceorientation', vm.tilt);
		//}
	}
}
