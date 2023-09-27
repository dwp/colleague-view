const confirmQueryController = async (req, res) => {
  const benefitNumber = parseInt(req.params.benefitNumber);
  if (benefitNumber === 0) req.session.data.outcome = {};
  const user = req.session.data.user;
  const { benefits } = req.session.data;
  if (benefits) {
    benefits.forEach((el) => {
      if (req.session.data.enquiries[el] === undefined)
        req.session.data.enquiries[el] = {};
    });
    const name = benefits[benefitNumber];
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

    const isChecked = {
      "payment-enquiry": {},
      "award-enquiry": {},
      "other-enquiry": {},
    };

    for (enquiryType in enquiryTypes) {
      enquiryTypes[enquiryType].forEach((enquiry) => {
        if (req.session.data.enquiries[name][enquiryType]) {
          if (req.session.data.enquiries[name][enquiryType].includes(enquiry)) {
            isChecked[enquiryType][enquiry] = true;
          }
        }
      });
    }

    let destination =
      benefitNumber === benefits.length - 1
        ? "/outcome"
        : `/confirmquery/${benefitNumber + 1}`;
    res.render("confirmquery.html", {
      user,
      destination,
      name,
      isChecked,
      enquiryTypes,
      benefitNumber: benefitNumber + 1,
      totalNumberOfBenefits: benefits.length,
    });
  }
};

module.exports = confirmQueryController;
