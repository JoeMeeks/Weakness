module.exports = {
	copyAssets: {
		src: ['{{SRC}}/assets/**/*'],
		dest: '{{WWW}}/assets'
	},
	copyIndexContent: {
		src: ['{{SRC}}/index.html', '{{SRC}}/service-worker.js', '{{SRC}}/manifest.json'],
		dest: '{{WWW}}'
	},
	copyFonts: {
		src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
		dest: '{{WWW}}/assets/fonts'
	},
	copyPolyfills: {
		src: [`{{ROOT}}/node_modules/ionic-angular/polyfills/${process.env.IONIC_POLYFILL_FILE_NAME}`],
		dest: '{{BUILD}}'
	},
	copyCordova: {
		src: ['{{ROOT}}/platforms/ios/platform_www/**/*'],
		dest: '{{WWW}}'
	},
	copySwToolbox: {
		src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
		dest: '{{BUILD}}'
	}
}