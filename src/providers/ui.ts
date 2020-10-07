import { Injectable } from '@angular/core';
import { App, Animation, Events, PageTransition, Platform, MenuController, NavControllerBase, NavOptions, Loading, LoadingController, LoadingOptions, AlertController, AlertOptions, ModalController, ModalOptions, Modal, ToastController, ToastOptions } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { Media, MediaObject } from '@ionic-native/media';
//import { Pro } from '@ionic/pro';
import * as _ from 'underscore';

var self: UIService;

@Injectable()
export class UIService {

    progress = {
        download: 0,
        extract: 0
    };

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

    //public loader: any = {
    //    ctrl: null,
    //    show: (opts?: LoadingOptions) => {
    //        self.loading.ctrl = self.loadingCtrl.create(_.extend({
    //            content: 'Loading&hellip;'
    //        }, opts));
    //        self.loading.ctrl.present();
    //    },
    //    hide: () => {
    //        self.loading.ctrl.dismiss();
    //    }
    //};

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

    //public audio: MediaObject;
    public audio: any;
    public sound: boolean = true;

    private load() {
        self.audio = new Audio();
        self.audio.src = '../../assets/audio/alert.mp3';
        self.audio.load();
	}

    //public viewDidEnter = null;
    //public options;
    //public tabBarElement: any;
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
        private transitions: NativePageTransitions
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
        
        let sound = localStorage.getItem('sound');
        if (sound) {
            self.sound = JSON.parse(sound);
        } else {
            self.sound = true;
        }
        self.load();
        self.events.subscribe('time', (val) => {
            //console.info('time event');
            if (self.sound) {
                self.chime();
            }
        });
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

    chime = _.debounce(() => {
        try {
            if (!self.audio) {
                console.info('init sound');
                //self.audio = self.media.create('../../assets/audio/alert.mp3');
                //self.audio.onStatusUpdate.subscribe(status => console.info(status)); // fires when file status changes
                //self.audio.onSuccess.subscribe(() => console.log('Action is successful'));
                //self.audio.onError.subscribe(err => console.log('Error!', JSON.stringify(err)));

                //let path = window.cordova.file.applicationDirectory + "www/audio/alert.mp3";
                //if (self.platform.is('ios')) {
                //    try {
                //        window.resolveLocalFileSystemURL(path, function (fileEntry) {
                //            console.log('fileEntry:');
                //            console.log(fileEntry);
                //            fileEntry.file(function (file) {
                //                var audio = self.media.create(file.localURL);
                //                if (audio) {
                //                    //tkj.vm.set('sound', audio);
                //                    console.log('audio set: ' + audio);
                //                } else {
                //                    console.log('unable to load audio');
                //                }
                //            }, function (error) {
                //                console.log('file error:', error);
                //            });
                //        }, function (err) {
                //            console.log('resolveLocalFileSystemURL error: ' + JSON.stringify(err));
                //        });
                //    } catch (ex) {
                //        console.log('load iOS media error: ' + ex.message);
                //    }
                //} else {
                //    self.audio = self.media.create(path);
                //    if (self.audio) {
                //        self.audio.play();
                //    } else {
                //        console.log('unable to load audio');
                //    }
                //}
                self.load();
            }
            self.audio.play();
        } catch (ex) {
            console.error(ex.message);
            console.log(ex);
            alert(ex.message);
        }
    }, 1000, true);

    settings() {
        self.modal.show('settings');
    }

    toggle() {
        //self.sound = !self.sound;
        let msg = 'sound: ';
        msg += self.sound ? 'on' : 'off'
        console.info(msg);
        localStorage.setItem('sound', JSON.stringify(self.sound));
    }

    //#region ionic deploy update
    private download(progress: number) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.download) {
            self.progress.download = progress;
            self.loading.show({ text: 'Downloading update\r\n' + self.progress.download + '%' });
        }
    }

    private extract(progress: number) {
        //console.log(progress);
        if (self.progress.download === 0 || progress > self.progress.extract) {
            self.progress.extract = progress;
        }
        self.loading.show({ text: 'Installing update\r\n' + self.progress.extract + '%' });
    }

    /**
     * Ionic Pro Deploy Update
     * return {Promise}
     */
	/*
    update() {
		return new Promise((resolve, reject) => {
			try {
				Pro.deploy.getCurrentVersion().then((info) => {
					console.info('Pro.deploy.info:');
					console.log(info);
					Pro.deploy.checkForUpdate().then(update => {
						console.info('Pro.deploy.checkForUpdate:');
						console.info(JSON.stringify(update));
						if (update && update.available) {
							self.progress.download = 0;
							self.progress.extract = 0;
							self.confirm.show({
								title: 'Version Update Available',
								message: 'Click "Install" to proceed or "Later" to postpone',
								buttons: [
									{
										text: 'Install',
										handler: () => {
											Pro.deploy.downloadUpdate(self.download).then((res) => {
												console.info('Pro.deploy.downloadUpdate:');
												console.info(JSON.stringify(res));
												Pro.deploy.extractUpdate(self.extract).then((res) => {
													console.info('Pro.deploy.extractUpdate:');
													console.info(JSON.stringify(res));
													if (self.loading.visible) {
														self.loading.hide().then(() => {
															Pro.deploy.reloadApp().then(resolve).catch(reject);
														});
													} else {
														Pro.deploy.reloadApp().then(resolve).catch(reject);
													}
												}).catch(err => {
													console.error('Pro.deploy.extract error');
													console.info(JSON.stringify(err));
													//Pro.monitoring.exception(err);
													self.toast.show({ message: err, cssClass: 'error' });
													reject(err);
												});
											}).catch(err => {
												console.error('Pro.deploy.download error');
												console.info(JSON.stringify(err));
												//Pro.monitoring.exception(err);
												self.toast.show({ message: err, cssClass: 'error' });
												reject(err);
											});
										}
									},
									{
										text: 'Later',
										handler: resolve
									}
								],
								enableBackdropDismiss: false,
							});
						} else {
							resolve(update);
						}
					}).catch(err => {
						console.error(err);
						console.info(JSON.stringify(err));
						self.toast.show({ message: err.message, cssClass: 'error' });
						reject(err.message);
					});
				}).catch(err => {
					console.error(err);
					console.info(JSON.stringify(err));
					self.toast.show({ message: err.message, cssClass: 'error' });
					reject(err.message);
				});
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
				reject(ex);
			}
		});
    }
	*/
    //#endregion ionic deploy update
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

            //if (enteringView.hasNavbar()) {
            //    let enteringPageEle = enteringView.pageRef().nativeElement,
            //        enteringNavbarEle = enteringPageEle.querySelector('ion-navbar'),
            //        enteringNavBar = new Animation(plt, enteringNavbarEle);
            //    this.add(enteringNavBar);
            //}
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

            //if (leavingView.hasNavbar()) {
            //    let leavingPageEle = leavingView.pageRef().nativeElement,
            //        leavingNavbarEle = leavingPageEle.querySelector('ion-navbar'),
            //        leavingNavBar = new Animation(plt, leavingNavbarEle);
            //    this.add(leavingNavBar);
            //}
        }

        //this.onFinish(() => {
        //    let until = new Date().getTime(),
        //        total = until - since;
        //    console.log('pagefade finish: ' + until);
        //    console.warn('pagefade total: ' + total);
        //});
    }
}
