const queryController = async (req, res) => {
  const benefitNumber = parseInt(req.params.benefitNumber);
  const user = req.session.data.user;
  const { benefits } = req.session.data;
  const enquiryTypes = {
    "payment-enquiry": [
      "Next payment details",
      "Last payment details",
      "Historical payment details",
      "Payment issue",
    ],
    "award-enquiry": ["Award amount", "Award date"],
    "other-enquiry": [
      "Medical certificate date",
      "Next work capability assessment date",
      "Not listed above",
    ],
  };
  if (benefits) {
    benefits.forEach((el) => {
      if (req.session.data.enquiries[el] === undefined)
        req.session.data.enquiries[el] = {};
    });
    const name = benefits[benefitNumber];
    let destination =
      benefitNumber === benefits.length - 1
        ? "/overview"
        : `/query/${benefitNumber + 1}`;
    res.render("query.html", {
      user,
      destination,
      name,
      enquiryTypes,
      benefitNumber: benefitNumber + 1,
      totalNumberOfBenefits: benefits.length,
    });
  }
};

module.exports = queryController;
