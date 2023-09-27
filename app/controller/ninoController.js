const ninoController = async (req, res) => {
  const user = { ...req.session.data.user };
  req.session.data = {};
  req.session.data.user = user;
  res.render("nino.html", { user });
};

module.exports = ninoController;
