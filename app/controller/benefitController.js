const benefitController = async (req, res) => {
  const user = req.session.data.user;
  res.render("benefit.html", { user });
};

module.exports = benefitController;
