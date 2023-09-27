const engagementHistoryController = async (req, res) => {
  const user = req.session.data.user;
  res.render("engagementhistory.html", { user });
};

module.exports = engagementHistoryController;
