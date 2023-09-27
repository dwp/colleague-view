const identifierController = async (req, res) => {
  const user = req.session.data.user;
  res.render("identifier.html", { user });
};

module.exports = identifierController;
