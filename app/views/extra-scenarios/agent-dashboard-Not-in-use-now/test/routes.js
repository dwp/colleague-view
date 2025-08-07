





router.post('/extra-scenarios/agent-dashboard-Not-in-use-now/test/check-response', function (req, res) {
  var pageLength = '';

  pageLength = req.session.data['select-benefit'].length;

  var isEsa = req.session.data['select-benefit'].include('Employment support allowance');
  var isPip = req.session.data['select-benefit'].include('Personal independente allowance');
  var isCa = req.session.data['select-benefit'].include('Carer allowance');

  // var isEsa = 'govuk-!-display-none';
  // var isPip = 'govuk-!-display-none';
  // var isCa = 'govuk-!-display-none';

  if (req.session.data['select-benefit'].length == 1) {
    pageLength = 'Service 1 of 1';
  } else if (req.session.data['select-benefit'].length == 2) {
    pageLength = 'Service 1 of 2';
  } else {
    pageLength = 'Service 1 of 3';
  }

  isEsa = req.session.data['select-benefit'].length;
  isPip = req.session.data['select-benefit'].length(2);
  //   var isEsa = 'Employment support allowance';
  //   req.session.data['select-benefit'] = isEsa;
  //   // req.session.data['What-services-have-they-called-about'] = 'Employment and support allowance';
  // }
  // if (req.session.data['select-benefit'].include('Personal independente allowance')) {
  //   isPip = 'Personal independente allowance';
  //   req.session.data['select-benefit'] = isPip;
  //   // req.session.data['What-services-have-they-called-about'] = 'Employment and support allowance';
  // }
  // if (req.session.data['select-benefit'].include('Carer allowance')) {
  //   isCa = 'Carer allowance';
  //   req.session.data['select-benefit'] = isCa;
  //   // req.session.data['What-services-have-they-called-about'] = 'Employment and support allowance';
  // }

  // var isEsa = req.session.data['select-benefit'];
  // if (isEsa == "Employment and support allowance") {
  //   alert(isEsa);
  // } else {
  //   var notSeleced;
  //   notSeleced = "No benefit selected"
  // }

});


// Add your routes here - above the module.exports line

module.exports = router
