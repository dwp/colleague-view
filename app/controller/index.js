const benefitController = require("./benefitController");
const confirmationController = require("./confirmationController");
const confirmQueryController = require("./confirmQueryController");
const customerDetailsController = require("./customerDetailsController");
const engagementHistoryController = require("./engagementHistoryController");
const identifierController = require("./identifierController");
const ninoController = require("./ninoController");
const outcomeController = require("./outcomeController");
const overviewController = require("./overviewController");
const paymentController = require("./paymentController");
const queryController = require("./queryController");

module.exports = {
  paymentController,
  customerDetailsController,
  engagementHistoryController,
  overviewController,
  ninoController,
  identifierController,
  benefitController,
  queryController,
  confirmQueryController,
  outcomeController,
  confirmationController,
};
