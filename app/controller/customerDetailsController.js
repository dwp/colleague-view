const customerDetailsController = async (req, res) => {
  const user = req.session.data.user;
  res.render("customerdetails.html", { user });
};

module.exports = customerDetailsController;
