const Koa = require('koa');
const app = new Koa();

/**
 * 加载模型
 * 并将模型内容挂载至 app.$model
 */
const config = require('./config');
const { loadModel } = require('./utils/loader');
loadModel(config)(app);

/**
 * 注册路由
 */
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const restful = require('./utils/router');
app.use(restful);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`app start: ${PORT}`);
});
