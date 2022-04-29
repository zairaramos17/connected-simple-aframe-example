var fs = require("fs");

module.exports = {
	cert: fs.readFileSync(__dirname + "/localhost.pem"),
	key: fs.readFileSync(__dirname + "/key.pem")
};