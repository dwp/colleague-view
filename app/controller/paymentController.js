const paymentController = async (req, res) => {
  const user = req.session.data.user;
  res.render("payments.html", { user });
};

module.exports = paymentController;
