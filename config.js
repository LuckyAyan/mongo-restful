const { host, user, password } = require('./auth');

module.exports = {
	db: {
		url: `mongodb://${user}:${password}@${host}/test?authSource=admin`,
		options: { useNewUrlParser: true }
	}
};
