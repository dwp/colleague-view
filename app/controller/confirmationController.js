const confirmationController = async (req, res) => {
  const user = req.session.data.user;
  res.render("confirmation.html", { user });
};

module.exports = confirmationController;
