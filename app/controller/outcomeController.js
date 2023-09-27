const outcomeController = async (req, res) => {
  const user = req.session.data.user;
  const enquiries = { ...req.session.data.enquiries };
  const outcome = req.session.data.outcome;
  for (benefit in enquiries) {
    if (!outcome[benefit]) outcome[benefit] = {};
    for (enquiryType in enquiries[benefit]) {
      if (!outcome[benefit][enquiryType]) outcome[benefit][enquiryType] = {};
    }
  }
  res.render("outcome.html", { user, enquiries });
};

module.exports = outcomeController;
