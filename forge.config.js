module.exports = {
	packagerConfig: {
		executableName: 'CSGO-Hud',
	},
	makers: [
		{
			name: '@electron-forge/maker-squirrel',
			config: {
				authors: ['Peter Stather'],
				exe: 'CSGO-Hud.exe',
				name: 'CSGO-Hud',
			},
		},
		{
			name: '@electron-forge/maker-deb',
			config: {},
		},
	],
	plugins: [
		['@electron-forge/plugin-webpack', {
			mainConfig: './webpack.main.config.js',
			renderer: {
				config: './webpack.renderer.config.js',
				entryPoints: [{
					html: './src/index.html',
					js: './src/renderer/app.js',
					name: 'main',
				}],
			},
		}],
	],
}
