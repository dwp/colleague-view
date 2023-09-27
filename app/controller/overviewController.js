const overviewController = async (req, res) => {
  const user = req.session.data.user;
  res.render("overview.html", { user });
};

module.exports = overviewController;
