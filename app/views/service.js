const db = require("./db.json");

const getAwards = async (nino) => {
  return await db.awards.filter((award) => award.nino === nino);
};

const getPayments = async (nino) => {
  return await db.payments.filter((payment) => payment.nino === nino);
};

module.exports = {
  getAwards,
  getPayments,
};
