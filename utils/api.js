module.exports = {
	/**
	 * 初始化，查询 model
	 */
	async init(ctx, next) {
		const model = ctx.app.$model[ctx.params.list];
		if (model) {
			ctx.list = model;
			await next();
		} else {
			ctx.body = 'no this model';
		}
	},
	/**
	 * 获取列表
	 */
	async list(ctx) {
		ctx.body = await ctx.list.find({});
	},
	/**
	 * 获取指定数据
	 */
	async get(ctx) {
		ctx.body = await ctx.list.findOne({
			_id: ctx.params.id
		});
	},
	/**
	 * 创建数据
	 */
	async create(ctx) {
		ctx.body = await ctx.list.create(ctx.request.body);
	},
	/**
	 * 更新数据
	 */
	async update(ctx) {
		ctx.body = await ctx.list.updateOne(
			{
				_id: ctx.params.id
			},
			ctx.request.body
		);
	},
	/**
	 * 删除数据
	 */
	async del(ctx) {
		ctx.body = await ctx.list.deleteOne({
			_id: ctx.params.id
		});
	}
};
