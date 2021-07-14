const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

/**
 * 加载器
 * 加载 model 文件夹所有模型
 */
function load(dir, cb) {
	const modelDir = path.resolve(__dirname, dir);
	const files = fs.readdirSync(modelDir);
	files.forEach(filename => {
		filename = filename.replace('.js', '');
		const file = require(`${modelDir}/${filename}`);
		cb(filename, file);
	});
}

const loadModel = config => app => {
	mongoose.connect(config.db.url, config.db.options);
	const connection = mongoose.connection;
	connection.on('error', () => {
		console.error('连接失败');
	});
	app.$model = {};
	load('../model', (filename, { schema }) => {
		console.log('load model: ', filename, schema);
		app.$model[filename] = mongoose.model(filename, schema);
		console.log(app);
	});
};

module.exports = {
	loadModel
};
