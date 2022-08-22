const path = require('path');

module.export = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(--dirname, 'dist'),
	},
};
