import { Injectable } from '@angular/core';
import { App, Animation, Events, PageTransition, Platform, MenuController, NavControllerBase, NavOptions, Loading, LoadingController, LoadingOptions, AlertController, AlertOptions, ModalController, ModalOptions, Modal, ToastController, ToastOptions } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Media, MediaObject } from '@ionic-native/media';
import { Pro } from '@ionic/pro';
import { Storage } from '@ionic/storage';
import * as _ from 'underscore';

declare var require: any;

let self: UIService;

@Injectable()
export class UIService {


    private json: any = require('../../package.json');
    version: string = null;

    public loading = {
        visible: false,
        element: null,
        content: null,
        ctrl: null,
        show(options?: { text?: string, css?: string }) {
            if (self.loading.visible) {
                if (!self.loading.element) {
                    let loading = document.getElementsByTagName('ion-loading');
                    _.each(loading, (el) => {
                        //console.log(el.attributes);
                        if (el.hasAttribute('role') && el.attributes['role'].value === 'dialog') {
                            //console.log('loading element:');
                            //console.log(el);
                            self.loading.element = el;
                            let content = el.getElementsByClassName('loading-content');
                            if (content.length) {
                                self.loading.content = content[0];
                            }
                            //console.log('loading content:');
                            //console.log(self.loading.content);
                        }
                    });
                    //self.loading.setSpinner('hide');
                    //console.log(self.loading);
                }

                if (options && options.text && self.loading.content) {
                    requestAnimationFrame(() => {
                        self.loading.content.innerHTML = options.text;
                    });
                }
                if (options && options.css) {
                    console.log('set css: ' + options.css);
                    self.loading.ctrl.setCssClass(options.css); //this fails to actually update the UI
                    self.loading.element.className += ' ' + options.css;
                }
                return Promise.resolve();
            } else {
                self.loading.ctrl = self.loadingCtrl.create({
                    //spinner: 'custom',
                    spinner: 'dots',
                    content: options && options.text ? options.text : 'Loading&hellip;',
                    cssClass: options && options.css ? 'loading-container ' + options.css : 'loading-container'
                    //dismissOnPageChange: true //causes Uncaught (in promise): removeView was not found
                });
                self.loading.visible = true;
                return self.loading.ctrl.present();
            }
        },
        hide() {
            self.loading.visible = false;
            self.loading.content = null;
            self.loading.element = null;
            return self.loading.ctrl.dismiss();
        }
    };

    public animation: string;
    public options: NativeTransitionOptions = {
        direction: 'left',
        duration: 400,
        slowdownfactor: 1,
        //slidePixels: 20,
        iosdelay: 0,
        androiddelay: 0,
        winphonedelay: 250,
        fixedPixelsTop: 0,
        fixedPixelsBottom: 0
    };

    public confirm: any = {
        ctrl: null,
        show: (options: AlertOptions) => {
            return new Promise((resolve, reject) => {
                self.confirm.ctrl = self.alertCtrl.create(options);
                self.confirm.ctrl.onDidDismiss(resolve);
                self.confirm.ctrl.present();
            });
        },
        hide: () => {
            self.confirm.ctrl.dismiss();
        }
    }

	public modal: any = {
		ctrl: null,
		show: (page: any, data?: any, opts?: ModalOptions) => {
			return new Promise((resolve, reject) => {
				self.modal.ctrl = self.modalCtrl.create(page, data, _.extend({
					enableBackdropDismiss: false
				}, opts));
				self.modal.ctrl.onDidDismiss(resolve);
				self.modal.ctrl.present();
			});
		},
		hide: () => {
			self.modal.ctrl.dismiss();
		}
	};

	public toast: any = {
		ctrl: null,
		show: (opts: ToastOptions) => {
			opts.duration = 0;
			opts.showCloseButton = true;
			self.toast.ctrl = self.toastCtrl.create(opts);
			self.toast.ctrl.present();
		},
		hide: () => {
			self.toast.ctrl.dismiss();
		}
	};

	public alert: any = {
		ctrl: null,
		show: (options: AlertOptions) => {
			//console.log('AlertController:');
			//console.log(self.alertCtrl);
			if(!options.enableBackdropDismiss) {
				options.enableBackdropDismiss = false;
			}
			self.alert.ctrl = self.alertCtrl.create(options);
			return self.alert.ctrl.present();
		},
		hide: () => {
			self.alert.ctrl.dismiss();
		}
	};

	public menu: MenuController = null;

    public page: string;

    public sound: { audio: HTMLAudioElement, enabled: boolean, load: Function, play: Function, save: Function } = {
        audio: null,
        enabled: true,
        load: () => {
            self.sound.audio = new Audio();
            self.sound.audio.src = '../../assets/audio/alert.mp3';
            self.storage.get('sound').then((sound) => {
                self.sound.enabled = sound;
            });
        },
        play: () => {
            try {
                if (!self.sound.audio) {
                    console.info('init sound');
                    self.sound.load();
                }
                self.sound.audio.play();
            } catch (ex) {
                console.error(ex.message);
                console.log(ex);
                alert(ex.message);
            }
		},
        save: () => {
            self.storage.set('sound', self.sound.enabled);
		}
    };

    constructor(
        public app: App,
        public platform: Platform,
        private events: Events,
        private loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        private media: Media,
		private menuCtrl: MenuController,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private transitions: NativePageTransitions,
        private storage: Storage
    ) {
        self = this;

        self.app.viewWillEnter.subscribe(() => {
            //if (!!window['cordova']) {
            //    //console.info('viewWillEnter with ' + self.animation + ' transition');
            //} else {
                //console.info('viewWillEnter with ' + self.animation + ' transition');
                switch (self.animation) {
                    case 'flip':
                        self.transitions.flip(self.options);
                        break;
                    case 'slide':
                        self.transitions.slide(self.options);
                        break;
                }
            //}
            self.animation = null;
		});

        self.menu = menuCtrl;

        self.storage.ready().then(() => {
            self.sound.load();
        });

        self.events.subscribe('time', (val) => {
            //console.info('time event');
            if (!!val && self.sound.enabled) {
                self.sound.play();
            }
        });

        console.info(`Version ${self.json.version}`);
        self.version = self.json.version;

        //Pro.deploy.getCurrentVersion().then(ver => {
        //    console.debug('Pro Deploy version:');
        //    console.log(ver);
        //    //self.version = version;
        //});
    }

    flip = _.debounce((page: string, params?: any, opts?: NativeTransitionOptions) => {
        self.options = _.extend(self.options, opts);
        self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
        self.animation = 'flip';
        //self.options.animate = false;
		//if (self.page == page) {
		//	return Promise.resolve({ message: 'same page' });
		//} else {
			self.page = page;
			let nav: NavControllerBase = self.app.getRootNavs()[0];
			//console.log('flip', nav);
			if (self.options.direction === 'left') {
				//console.info('nav.push');
				return nav.push(page, params, self.options);
			} else if (nav.canGoBack()) {
				//console.info('nav.pop');
				//return nav.pop(self.options)
				return nav.push(page, params,self.options).then(() => {
					let views = nav.getViews();
					nav.remove(views.length - 3, 2);
					console.log(views);
				});
			} else {
				console.info('nav.setRoot');
				return nav.setRoot(page, params, self.options);
			}
		//}
    }, 400, true);

    swap = _.debounce((page: string, params?: any, opts?: NavOptions) => {
        self.options = _.extend(self.options, opts);
        self.options.direction = opts && opts.direction ? opts.direction : 'left'; //default
        opts.animate = false;
        //self.animation = 'flip';
        //self.options.animate = false;
        //if (self.page == page) {
        //	return Promise.resolve({ message: 'same page' });
        //} else {
        self.page = page;
        let nav: NavControllerBase = self.app.getRootNavs()[0];
        //console.log('swap', nav);
        if (self.options.direction === 'left') {
            //console.info('nav.push');
            return nav.push(page, params, self.options);
        } else if (nav.canGoBack()) {
            //console.info('nav.pop');
            //return nav.pop(self.options)
            return nav.push(page, params, self.options).then(() => {
                let views = nav.getViews();
                nav.remove(views.length - 3, 2);
                console.log(views);
            });
        } else {
            console.info('nav.setRoot');
            return nav.setRoot(page, params, self.options);
        }
        //}
    }, 400, true);

    link(type: string) {
        self.events.publish('link', type);
    }

    settings() {
        self.modal.show('settings');
    }

    /**
     * Ionic Pro Deploy Update
     * return {Promise}
     */
    async update() {
        try {
            let next = await Pro.deploy.checkForUpdate();
            console.info('Pro.deploy.checkForUpdate:');
            console.info(JSON.stringify(next));
            if (next && next.available) {
                let opts: LoadingOptions = {
                        content: 'Loading update',
                        enableBackdropDismiss: false
                    },
                    loading: Loading = self.loadingCtrl.create(opts);
                loading.present();

                await Pro.deploy.downloadUpdate(progress => {
                    //console.log(progress);
                    loading.setContent(`Downloading update&hellip;${progress}%`);
                });

                await Pro.deploy.extractUpdate(progress => {
                    //console.log(progress);
                    loading.setContent(`Installing update&hellip;${progress}%`);
                });

                loading.dismiss();

                await Pro.deploy.reloadApp();
            }
		} catch (ex) {
			if (typeof ex === 'object' && ex.message) {
				console.error(ex.message);
				console.info(JSON.stringify(ex));
				self.toast.show({ message: ex.message, cssClass: 'error' });
			} else {
				console.error(ex);
				console.info(JSON.stringify(ex));
				self.toast.show({ message: ex, cssClass: 'error' });
			}
			console.log(ex);
			//Pro.monitoring.exception(ex);
		}
    }
}

export class PageFlip extends PageTransition {

    init() {
        super.init();

        //let since = new Date().getTime();
        //console.log('pagefade start: ' + since);
        let plt = this.plt,
            leavingView = this.leavingView,
            enteringView = this.enteringView,
            opts = this.opts,
            backDirection = (opts.direction === 'back');

        if (enteringView) {
            let enteringPage = new Animation(plt, enteringView.pageRef());

            if (backDirection) {
                //console.log('enteringView has backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.47,0,0.745,0.715)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-prev')
                    .afterRemoveClass('flip-enter-prev');
            } else {
                //console.log('enteringView not backDirection');
                //this.duration(opts.duration || 400).easing('cubic-bezier(0.36,0.66,0.04,1)');
                this.duration(opts.duration || 400);
                this.add(enteringPage);
                enteringPage
                    .beforeAddClass('flip-enter-next')
                    .afterRemoveClass('flip-enter-next');
            }

            enteringPage.beforeClearStyles(['opacity']);
        }

        // setup leaving view
        if (leavingView) {
            let leavingPage = new Animation(plt, leavingView.pageRef());

            if (backDirection) {
                //console.log('leavingView has backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-prev')
                    .afterRemoveClass('flip-leave-prev');
            } else {
                //console.log('leavingView not backDirection');
                this.duration(opts.duration || 400);
                this.add(leavingPage);
                leavingPage
                    .beforeAddClass('flip-leave-next')
                    .afterRemoveClass('flip-leave-next');
            };

            leavingPage.afterStyles({ 'opacity': 0 });
        }
    }
}
