module.exports = (app) => {
	app.get("/ex03/logout.js", (req, res) => {
		req.session.destroy();
		res.send();
	});
}
