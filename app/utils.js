const mapPaymentToTable = (payment) => {
  const calculatePaymentFrequency = () => {
    if (payment.paymentFrequencyInDays <= 7) return "Weekly";
    if (payment.paymentFrequencyInDays <= 14) return "Every 2 weeks";
    return "Monthly";
  };
  return {
    awardAmount: payment.awardComponents.reduce(
      (a, b) => a + b.amountInPounds,
      0
    ),
    paymentFrequency: calculatePaymentFrequency(),
    lastPaidDate: payment.payments[0].
    lastPaymentAmount:
    nextPaymentDate:
  };
};
