const express = require('express')
const router = express.Router()


router.post('/opt1/engagement-log-journey/what-service-called-about', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var completeSession = req.session.data['Do-you-want-to-complete-the-session-forDemo']

  // Check whether the variable matches a condition
  if (completeSession == "Yes") {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-service-called-about');
  } else {
    // Send user back to same page
    res.redirect('/prototype-sprint-wise/sprint22/opt1/home-page');
  }

});

// this is for NINO number for Demo prototype 
router.post('/opt1/engagement-type', function (req, res) {

  req.session.data['What-type-of-engagement-is-it-demo'] = '';
  req.session.data['Who-is-the-engagement-with-demo'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['What-services-have-they-called-about'] = '';
  req.session.data['esaPayment'] = '';
  req.session.data['pipPayment'] = '';
  req.session.data['caPayment'] = '';
  req.session.data['ca-payment'] = '';
  req.session.data['esa-payment'] = '';
  req.session.data['pip-payment'] = '';
  req.session.data['esa-process-chasing'] = '';
  req.session.data['pip-process-chasing'] = '';
  req.session.data['ca-process-chasing'] = '';
  req.session.data['esa-coc'] = '';
  req.session.data['pip-coc'] = '';
  req.session.data['ca-coc'] = '';
  req.session.data['esa-general'] = '';
  req.session.data['pip-general'] = '';
  req.session.data['ca-general'] = '';

  if (req.session.data['national-insurance-number-for-demo'] == 'QQ123456Q' || req.session.data['national-insurance-number-for-demo'] == 'qq123456q') {
    // Send user to next page
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-type')
  } else {
    var errMsg = "";
    if (req.session.data['national-insurance-number-for-demo'] == '' || req.session.data['national-insurance-number-for-demo'] == undefined) {
      errMsg = "National Insurance Number is mandatory";
    } else {
      errMsg = "Enter a National Insurance number in the correct format";
    }
    // Send user to error page
    res.render('prototype-sprint-wise/sprint22/opt1/error-NINO-number', { "errMsg": errMsg });
  }
})

// this is for radio selection
router.post('/prototype-sprint-wise/sprint22/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it-demo'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls == "Outgoing telephone call") {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/sprint22/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it-demo'] = '';
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for engagement with radio selection
router.post('/prototype-sprint-wise/sprint22/home-page', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var engagemetWith = req.session.data['Who-is-the-engagement-with-demo']

  // Check whether the variable matches a condition
  if (engagemetWith == "Not Listed above") {
    // Send user back to same page
    res.redirect('back');
  } else {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/sprint22/home-page');
  }

})

// router.post('/opt1/engagement-log-journey/what-service-called-about', function (req, res) {
//   // Make a variable and give it the value from 'how-many-balls'
//   var completeSession = req.session.data['Do-you-want-to-complete-the-session-forDemo']

//   // Check whether the variable matches a condition
//   if (completeSession == "Yes") {
//     // Send user to next page
//     res.redirect('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-service-called-about');
//   } else {
//     // Send user back to same page
//     res.redirect('/prototype-sprint-wise/sprint22/opt1/home-page');
//   }
// });


// NINO validation for sprint27/opt2


router.post('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/benefitPages', function (req, res) {
  var pageLength = '';
  var isEsa = req.session.data['What-services-have-they-called-about'].includes('esa');
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  if (req.session.data['What-services-have-they-called-about'].length == 1) {
    pageLength = 'Services 1 of 1';
  } else if (req.session.data['What-services-have-they-called-about'].length == 2) {
    pageLength = 'Services 1 of 2';
  } else {
    pageLength = 'Services 1 of 3';
  }
  
  if (isEsa && isPip) {
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-ESA', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP',
      "pageLength": pageLength
    });
  }
  if (isEsa && isCa && !isPip) {
    // console.log('considition executed isEsa && isCa && !isPip');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-ESA', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength": pageLength
    });
  }
  if (isEsa && !isPip && !isCa) {
    // console.log('considition executed isEsa && !isPip && !isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-ESA', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/outcome-queries',
      "pageLength": pageLength
  
    });
  }
  if (!isEsa && isPip && isCa) {
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength": pageLength
    });
  }
  if (!isEsa && isPip && !isCa) {
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/outcome-queries',
      "pageLength": pageLength
    });
  }
  if (!isEsa && !isPip && isCa) {
    // console.log('considition executed !isEsa && !isPip && isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/outcome-queries',
      "pageLength": pageLength
    });
  }
  });
  
  router.post('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP', function (req, res) {
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  var pageLength = '';
  if (req.session.data['What-services-have-they-called-about'].length == 1) {
    pageLength = 'Services 1 of 1';
  } else if (req.session.data['What-services-have-they-called-about'].length == 2) {
    pageLength = 'Services 2 of 2';
  } else {
    pageLength = 'Services 2 of 3';
  }
  if (isPip && isCa) {
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength": pageLength
    });
  }
  if (isPip && !isCa) {
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-PIP', {
      "nextUrl": '/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/outcome-queries',
      "pageLength": pageLength
    });
  }
  });
  
  router.post('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA', function (req, res) {
  var pageLength = '';
  if (req.session.data['What-services-have-they-called-about'].length == 1) {
    pageLength = 'Services 1 of 1';
  } else if (req.session.data['What-services-have-they-called-about'].length == 2) {
    pageLength = 'Services 2 of 2';
  } else {
    pageLength = 'Services 3 of 3';
  }
  res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/what-queries-dealt-with-CA', {
    "pageLength": pageLength
  });
  });
  
  router.post('/opt1/engagement-log-journey/outcome-queries', function (req, res) {
  
  // console.log('Value of the data outcome route:--------------->',req.session.data);
  var isEsa = 'govuk-!-display-none';
  var isPip = 'govuk-!-display-none';
  var isCa = 'govuk-!-display-none';
  if (req.session.data['What-services-have-they-called-about'].includes('esa')) {
    isEsa = 'govuk-!-display-block';
    // req.session.data['What-services-have-they-called-about'] = 'Employment and support allowance';
  }
  if (req.session.data['What-services-have-they-called-about'].includes('pip')) {
    isPip = 'govuk-!-display-block';
  }
  if (req.session.data['What-services-have-they-called-about'].includes('ca')) {
    isCa = 'govuk-!-display-block';
  }
  //For esa Payment
  var esaPayment = 'govuk-!-display-none';
  var esaMissingPayment = 'govuk-!-display-none';
  var esaNextPaymentDate = 'govuk-!-display-none';
  var esaNextPaymentAmount = 'govuk-!-display-none';
  if (req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Date')) {
    esaNextPaymentDate = 'govuk-!-display-block';
    esaPayment = 'govuk-!-display-block';
  }
  if (req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Amount')) {
    esaNextPaymentAmount = 'govuk-!-display-block';
    esaPayment = 'govuk-!-display-block';
  }
  if (req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Missing Payment')) {
    esaMissingPayment = 'govuk-!-display-block';
    esaPayment = 'govuk-!-display-block';
  }
  
  //For esa Process Chasing
  var esaProcessChasing = 'govuk-!-display-none';
  var esaNewClaim = 'govuk-!-display-none';
  var esaClaimClosureContact = 'govuk-!-display-none';
  var esaExplanation = 'govuk-!-display-none';
  var esaAppealReconsiSupSOS = 'govuk-!-display-none';
  var esaInterventionsPlanned = 'govuk-!-display-none';
  var esaInterventionsUnplanned = 'govuk-!-display-none';
  var esaSevereDisablementPremium = 'govuk-!-display-none';
  
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('New Claim')) {
    esaNewClaim = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Claim Closure Contact')) {
    esaClaimClosureContact = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Explanation')) {
    esaExplanation = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')) {
    esaAppealReconsiSupSOS = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Planned (Award Reviews)')) {
    esaInterventionsPlanned = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')) {
    esaInterventionsUnplanned = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Severe Disablement Premium (SDP)')) {
    esaSevereDisablementPremium = 'govuk-!-display-block';
    esaProcessChasing = 'govuk-!-display-block';
  }
  
  var esaCoc = 'govuk-!-display-none';
  var esaSpcAccAdmis = 'govuk-!-display-none';
  var esaChangeofAddress = 'govuk-!-display-none';
  var esaChangeHospitalStatus = 'govuk-!-display-none';
  var esaSavingsInvestments = 'govuk-!-display-none';
  var esaChangeCarerStatus = 'govuk-!-display-none';
  var esaCareHomeAdmission = 'govuk-!-display-none';
  var esaChangesEarnings = 'govuk-!-display-none';
  var esaChangeBankDetails = 'govuk-!-display-none';
  var esaChangeFamilyUnit = 'govuk-!-display-none';
  var esaChangeMedicalCondition = 'govuk-!-display-none';
  //For esa CoC
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Special Accommodation Admission/Discharge')) {
    esaSpcAccAdmis = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change of Address')) {
    esaChangeofAddress = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Hospital Status')) {
    esaChangeHospitalStatus = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Savings and Investments')) {
    esaSavingsInvestments = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Carer’s Status')) {
    esaChangeCarerStatus = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Care Home Admission')) {
    esaCareHomeAdmission = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Changes to Earnings')) {
    esaChangesEarnings = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Bank Details')) {
    esaChangeBankDetails = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Family Unit')) {
    esaChangeFamilyUnit = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  if (req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Medical Condition')) {
    esaChangeMedicalCondition = 'govuk-!-display-block';
    esaCoc = 'govuk-!-display-block';
  }
  
  var esaLoe = 'govuk-!-display-none';
  var esaLoeRequest = 'govuk-!-display-none';
  
  if (req.session.data['esa-loe'] && req.session.data['esa-loe'].includes('LoE Request')) {
    esaLoeRequest = 'govuk-!-display-block';
    esaLoe = 'govuk-!-display-block';
  }
  
  var esaGeneral = 'govuk-!-display-none';
  var esaMedicalEvidenceEnquiry = 'govuk-!-display-none';
  var esaJobcentreAppointmentEnquiry = 'govuk-!-display-none';
  var esaGeneralEnquiry = 'govuk-!-display-none';
  
  if (req.session.data['esa-general'] && req.session.data['esa-general'].includes('Medical Evidence Enquiry')) {
    esaMedicalEvidenceEnquiry = 'govuk-!-display-block';
    esaGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['esa-general'] && req.session.data['esa-general'].includes('Jobcentre Appointment or Enquiry')) {
    esaJobcentreAppointmentEnquiry = 'govuk-!-display-block';
    esaGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['esa-general'] && req.session.data['esa-general'].includes('General Enquiry')) {
    esaGeneralEnquiry = 'govuk-!-display-block';
    esaGeneral = 'govuk-!-display-block';
  }
  
  
  
  //For pip Payment
  var pipPayment = 'govuk-!-display-none';
  var pipMissingPayment = 'govuk-!-display-none';
  var pipNextPaymentDate = 'govuk-!-display-none';
  var pipNextPaymentAmount = 'govuk-!-display-none';
  if (req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Date')) {
    pipNextPaymentDate = 'govuk-!-display-block';
    pipPayment = 'govuk-!-display-block';
  }
  if (req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Amount')) {
    pipNextPaymentAmount = 'govuk-!-display-block';
    pipPayment = 'govuk-!-display-block';
  }
  if (req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Missing Payment')) {
    pipMissingPayment = 'govuk-!-display-block';
    pipPayment = 'govuk-!-display-block';
  }
  
  //For pip Process Chasing
  var pipProcessChasing = 'govuk-!-display-none';
  var pipNewClaim = 'govuk-!-display-none';
  var pipClaimClosureContact = 'govuk-!-display-none';
  var pipExplanation = 'govuk-!-display-none';
  var pipAppealReconsiSupSOS = 'govuk-!-display-none';
  var pipInterventionsPlanned = 'govuk-!-display-none';
  var pipInterventionsUnplanned = 'govuk-!-display-none';
  var pipSevereDisablementPremium = 'govuk-!-display-none';
  
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('New Claim')) {
    pipNewClaim = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Claim Closure Contact')) {
    pipClaimClosureContact = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Explanation')) {
    pipExplanation = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')) {
    pipAppealReconsiSupSOS = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Planned (Award Reviews)')) {
    pipInterventionsPlanned = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')) {
    pipInterventionsUnplanned = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Severe Disablement Premium (SDP)')) {
    pipSevereDisablementPremium = 'govuk-!-display-block';
    pipProcessChasing = 'govuk-!-display-block';
  }
  
  var pipCoc = 'govuk-!-display-none';
  var pipSpcAccAdmis = 'govuk-!-display-none';
  var pipChangeofAddress = 'govuk-!-display-none';
  var pipChangeHospitalStatus = 'govuk-!-display-none';
  var pipSavingsInvestments = 'govuk-!-display-none';
  var pipChangeCarerStatus = 'govuk-!-display-none';
  var pipCareHomeAdmission = 'govuk-!-display-none';
  var pipChangesEarnings = 'govuk-!-display-none';
  var pipChangeBankDetails = 'govuk-!-display-none';
  var pipChangeFamilyUnit = 'govuk-!-display-none';
  var pipChangeMedicalCondition = 'govuk-!-display-none';
  //For pip CoC
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Special Accommodation Admission/Discharge')) {
    pipSpcAccAdmis = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change of Address')) {
    pipChangeofAddress = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Hospital Status')) {
    pipChangeHospitalStatus = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Savings and Investments')) {
    pipSavingsInvestments = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Carer’s Status')) {
    pipChangeCarerStatus = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Care Home Admission')) {
    pipCareHomeAdmission = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Changes to Earnings')) {
    pipChangesEarnings = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Bank Details')) {
    pipChangeBankDetails = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Family Unit')) {
    pipChangeFamilyUnit = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  if (req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Medical Condition')) {
    pipChangeMedicalCondition = 'govuk-!-display-block';
    pipCoc = 'govuk-!-display-block';
  }
  
  var pipLoe = 'govuk-!-display-none';
  var pipLoeRequest = 'govuk-!-display-none';
  
  if (req.session.data['pip-loe'] && req.session.data['pip-loe'].includes('LoE Request')) {
    pipLoeRequest = 'govuk-!-display-block';
    pipLoe = 'govuk-!-display-block';
  }
  
  var pipGeneral = 'govuk-!-display-none';
  var pipMedicalEvidenceEnquiry = 'govuk-!-display-none';
  var pipJobcentreAppointmentEnquiry = 'govuk-!-display-none';
  var pipGeneralEnquiry = 'govuk-!-display-none';
  
  if (req.session.data['pip-general'] && req.session.data['pip-general'].includes('Medical Evidence Enquiry')) {
    pipMedicalEvidenceEnquiry = 'govuk-!-display-block';
    pipGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['pip-general'] && req.session.data['pip-general'].includes('Jobcentre Appointment or Enquiry')) {
    pipJobcentreAppointmentEnquiry = 'govuk-!-display-block';
    pipGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['pip-general'] && req.session.data['pip-general'].includes('General Enquiry')) {
    pipGeneralEnquiry = 'govuk-!-display-block';
    pipGeneral = 'govuk-!-display-block';
  }
  
  
  //For ca
  var caPayment = 'govuk-!-display-none';
  var caMissingPayment = 'govuk-!-display-none';
  var caNextPaymentDate = 'govuk-!-display-none';
  var caNextPaymentAmount = 'govuk-!-display-none';
  if (req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Date')) {
    caNextPaymentDate = 'govuk-!-display-block';
    caPayment = 'govuk-!-display-block';
  }
  if (req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Amount')) {
    caNextPaymentAmount = 'govuk-!-display-block';
    caPayment = 'govuk-!-display-block';
  }
  if (req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Missing Payment')) {
    caMissingPayment = 'govuk-!-display-block';
    caPayment = 'govuk-!-display-block';
  }
  
  //For pip Process Chasing
  var caProcessChasing = 'govuk-!-display-none';
  var caNewClaim = 'govuk-!-display-none';
  var caClaimClosureContact = 'govuk-!-display-none';
  var caExplanation = 'govuk-!-display-none';
  var caAppealReconsiSupSOS = 'govuk-!-display-none';
  var caInterventionsPlanned = 'govuk-!-display-none';
  var caInterventionsUnplanned = 'govuk-!-display-none';
  var caSevereDisablementPremium = 'govuk-!-display-none';
  
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('New Claim')) {
    caNewClaim = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Claim Closure Contact')) {
    caClaimClosureContact = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Explanation')) {
    caExplanation = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')) {
    caAppealReconsiSupSOS = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Planned (Award Reviews)')) {
    caInterventionsPlanned = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')) {
    caInterventionsUnplanned = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  if (req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Severe Disablement Premium (SDP)')) {
    caSevereDisablementPremium = 'govuk-!-display-block';
    caProcessChasing = 'govuk-!-display-block';
  }
  
  var caCoc = 'govuk-!-display-none';
  var caSpcAccAdmis = 'govuk-!-display-none';
  var caChangeofAddress = 'govuk-!-display-none';
  var caChangeHospitalStatus = 'govuk-!-display-none';
  var caSavingsInvestments = 'govuk-!-display-none';
  var caChangeCarerStatus = 'govuk-!-display-none';
  var caCareHomeAdmission = 'govuk-!-display-none';
  var caChangesEarnings = 'govuk-!-display-none';
  var caChangeBankDetails = 'govuk-!-display-none';
  var caChangeFamilyUnit = 'govuk-!-display-none';
  var caChangeMedicalCondition = 'govuk-!-display-none';
  //For pip CoC
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Special Accommodation Admission/Discharge')) {
    caSpcAccAdmis = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change of Address')) {
    caChangeofAddress = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Hospital Status')) {
    caChangeHospitalStatus = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Savings and Investments')) {
    caSavingsInvestments = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Carer’s Status')) {
    caChangeCarerStatus = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Care Home Admission')) {
    caCareHomeAdmission = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Changes to Earnings')) {
    caChangesEarnings = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Bank Details')) {
    caChangeBankDetails = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Family Unit')) {
    caChangeFamilyUnit = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  if (req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Medical Condition')) {
    caChangeMedicalCondition = 'govuk-!-display-block';
    caCoc = 'govuk-!-display-block';
  }
  
  var caLoe = 'govuk-!-display-none';
  var caLoeRequest = 'govuk-!-display-none';
  
  if (req.session.data['ca-loe'] && req.session.data['ca-loe'].includes('LoE Request')) {
    caLoeRequest = 'govuk-!-display-block';
    caLoe = 'govuk-!-display-block';
  }
  
  var caGeneral = 'govuk-!-display-none';
  var caMedicalEvidenceEnquiry = 'govuk-!-display-none';
  var caJobcentreAppointmentEnquiry = 'govuk-!-display-none';
  var caGeneralEnquiry = 'govuk-!-display-none';
  
  if (req.session.data['ca-general'] && req.session.data['ca-general'].includes('Medical Evidence Enquiry')) {
    caMedicalEvidenceEnquiry = 'govuk-!-display-block';
    caGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['ca-general'] && req.session.data['ca-general'].includes('Jobcentre Appointment or Enquiry')) {
    caJobcentreAppointmentEnquiry = 'govuk-!-display-block';
    caGeneral = 'govuk-!-display-block';
  }
  if (req.session.data['ca-general'] && req.session.data['ca-general'].includes('General Enquiry')) {
    caGeneralEnquiry = 'govuk-!-display-block';
    caGeneral = 'govuk-!-display-block';
  }
  
  
  //For notes
  var esaNextPaymentDateAddNotes = 'govuk-!-display-none';
  var esaNextPaymentDateEditNotes = 'govuk-!-display-none';
  var esaNextPaymentAmountAddNotes = 'govuk-!-display-none';
  var esaNextPaymentAmountEditNotes = 'govuk-!-display-none';
  var esaMissingPaymentAddNotes = 'govuk-!-display-none';
  var esaMissingPaymentEditNotes = 'govuk-!-display-none';
  var esaPcOption1AddNotes = 'govuk-!-display-none';
  var esaPcOption1EditNotes = 'govuk-!-display-none';
  var esaPcOption2AddNotes = 'govuk-!-display-none';
  var esaPcOption2EditNotes = 'govuk-!-display-none';
  var esaPcOption3AddNotes = 'govuk-!-display-none';
  var esaPcOption3EditNotes = 'govuk-!-display-none';
  var esaPcOption4AddNotes = 'govuk-!-display-none';
  var esaPcOption4EditNotes = 'govuk-!-display-none';
  var esaPcOption5AddNotes = 'govuk-!-display-none';
  var esaPcOption5EditNotes = 'govuk-!-display-none';
  var esaPcOption6AddNotes = 'govuk-!-display-none';
  var esaPcOption6EditNotes = 'govuk-!-display-none';
  var esaPcOption7AddNotes = 'govuk-!-display-none';
  var esaPcOption7EditNotes = 'govuk-!-display-none';
  var esaCocOption1AddNotes = 'govuk-!-display-none';
  var esaCocOption1EditNotes = 'govuk-!-display-none';
  var esaCocOption2AddNotes = 'govuk-!-display-none';
  var esaCocOption2EditNotes = 'govuk-!-display-none';
  var esaCocOption3AddNotes = 'govuk-!-display-none';
  var esaCocOption3EditNotes = 'govuk-!-display-none';
  var esaCocOption4AddNotes = 'govuk-!-display-none';
  var esaCocOption4EditNotes = 'govuk-!-display-none';
  var esaCocOption5AddNotes = 'govuk-!-display-none';
  var esaCocOption5EditNotes = 'govuk-!-display-none';
  var esaCocOption6AddNotes = 'govuk-!-display-none';
  var esaCocOption6EditNotes = 'govuk-!-display-none';
  var esaCocOption7AddNotes = 'govuk-!-display-none';
  var esaCocOption7EditNotes = 'govuk-!-display-none';
  var esaCocOption8AddNotes = 'govuk-!-display-none';
  var esaCocOption8EditNotes = 'govuk-!-display-none';
  var esaCocOption9AddNotes = 'govuk-!-display-none';
  var esaCocOption9EditNotes = 'govuk-!-display-none';
  var esaCocOption10AddNotes = 'govuk-!-display-none';
  var esaCocOption10EditNotes = 'govuk-!-display-none';
  var esaLoeOption1AddNotes = 'govuk-!-display-none';
  var esaLoeOption1EditNotes = 'govuk-!-display-none';
  var esaGeneralOption1AddNotes = 'govuk-!-display-none';
  var esaGeneralOption1EditNotes = 'govuk-!-display-none';
  var esaGeneralOption2AddNotes = 'govuk-!-display-none';
  var esaGeneralOption2EditNotes = 'govuk-!-display-none';
  var esaGeneralOption3AddNotes = 'govuk-!-display-none';
  var esaGeneralOption3EditNotes = 'govuk-!-display-none';
  
  //pip
  var pipNextPaymentDateAddNotes = 'govuk-!-display-none';
  var pipNextPaymentDateEditNotes = 'govuk-!-display-none';
  var pipNextPaymentAmountAddNotes = 'govuk-!-display-none';
  var pipNextPaymentAmountEditNotes = 'govuk-!-display-none';
  var pipMissingPaymentAddNotes = 'govuk-!-display-none';
  var pipMissingPaymentEditNotes = 'govuk-!-display-none';
  var pipPcOption1AddNotes = 'govuk-!-display-none';
  var pipPcOption1EditNotes = 'govuk-!-display-none';
  var pipPcOption2AddNotes = 'govuk-!-display-none';
  var pipPcOption2EditNotes = 'govuk-!-display-none';
  var pipPcOption3AddNotes = 'govuk-!-display-none';
  var pipPcOption3EditNotes = 'govuk-!-display-none';
  var pipPcOption4AddNotes = 'govuk-!-display-none';
  var pipPcOption4EditNotes = 'govuk-!-display-none';
  var pipPcOption5AddNotes = 'govuk-!-display-none';
  var pipPcOption5EditNotes = 'govuk-!-display-none';
  var pipPcOption6AddNotes = 'govuk-!-display-none';
  var pipPcOption6EditNotes = 'govuk-!-display-none';
  var pipPcOption7AddNotes = 'govuk-!-display-none';
  var pipPcOption7EditNotes = 'govuk-!-display-none';
  var pipCocOption1AddNotes = 'govuk-!-display-none';
  var pipCocOption1EditNotes = 'govuk-!-display-none';
  var pipCocOption2AddNotes = 'govuk-!-display-none';
  var pipCocOption2EditNotes = 'govuk-!-display-none';
  var pipCocOption3AddNotes = 'govuk-!-display-none';
  var pipCocOption3EditNotes = 'govuk-!-display-none';
  var pipCocOption4AddNotes = 'govuk-!-display-none';
  var pipCocOption4EditNotes = 'govuk-!-display-none';
  var pipCocOption5AddNotes = 'govuk-!-display-none';
  var pipCocOption5EditNotes = 'govuk-!-display-none';
  var pipCocOption6AddNotes = 'govuk-!-display-none';
  var pipCocOption6EditNotes = 'govuk-!-display-none';
  var pipCocOption7AddNotes = 'govuk-!-display-none';
  var pipCocOption7EditNotes = 'govuk-!-display-none';
  var pipCocOption8AddNotes = 'govuk-!-display-none';
  var pipCocOption8EditNotes = 'govuk-!-display-none';
  var pipCocOption9AddNotes = 'govuk-!-display-none';
  var pipCocOption9EditNotes = 'govuk-!-display-none';
  var pipCocOption10AddNotes = 'govuk-!-display-none';
  var pipCocOption10EditNotes = 'govuk-!-display-none';
  var pipLoeOption1AddNotes = 'govuk-!-display-none';
  var pipLoeOption1EditNotes = 'govuk-!-display-none';
  var pipGeneralOption1AddNotes = 'govuk-!-display-none';
  var pipGeneralOption1EditNotes = 'govuk-!-display-none';
  var pipGeneralOption2AddNotes = 'govuk-!-display-none';
  var pipGeneralOption2EditNotes = 'govuk-!-display-none';
  var pipGeneralOption3AddNotes = 'govuk-!-display-none';
  var pipGeneralOption3EditNotes = 'govuk-!-display-none';
  
  //CA
  var caNextPaymentDateAddNotes = 'govuk-!-display-none';
  var caNextPaymentDateEditNotes = 'govuk-!-display-none';
  var caNextPaymentAmountAddNotes = 'govuk-!-display-none';
  var caNextPaymentAmountEditNotes = 'govuk-!-display-none';
  var caMissingPaymentAddNotes = 'govuk-!-display-none';
  var caMissingPaymentEditNotes = 'govuk-!-display-none';
  var caPcOption1AddNotes = 'govuk-!-display-none';
  var caPcOption1EditNotes = 'govuk-!-display-none';
  var caPcOption2AddNotes = 'govuk-!-display-none';
  var caPcOption2EditNotes = 'govuk-!-display-none';
  var caPcOption3AddNotes = 'govuk-!-display-none';
  var caPcOption3EditNotes = 'govuk-!-display-none';
  var caPcOption4AddNotes = 'govuk-!-display-none';
  var caPcOption4EditNotes = 'govuk-!-display-none';
  var caPcOption5AddNotes = 'govuk-!-display-none';
  var caPcOption5EditNotes = 'govuk-!-display-none';
  var caPcOption6AddNotes = 'govuk-!-display-none';
  var caPcOption6EditNotes = 'govuk-!-display-none';
  var caPcOption7AddNotes = 'govuk-!-display-none';
  var caPcOption7EditNotes = 'govuk-!-display-none';
  var caCocOption1AddNotes = 'govuk-!-display-none';
  var caCocOption1EditNotes = 'govuk-!-display-none';
  var caCocOption2AddNotes = 'govuk-!-display-none';
  var caCocOption2EditNotes = 'govuk-!-display-none';
  var caCocOption3AddNotes = 'govuk-!-display-none';
  var caCocOption3EditNotes = 'govuk-!-display-none';
  var caCocOption4AddNotes = 'govuk-!-display-none';
  var caCocOption4EditNotes = 'govuk-!-display-none';
  var caCocOption5AddNotes = 'govuk-!-display-none';
  var caCocOption5EditNotes = 'govuk-!-display-none';
  var caCocOption6AddNotes = 'govuk-!-display-none';
  var caCocOption6EditNotes = 'govuk-!-display-none';
  var caCocOption7AddNotes = 'govuk-!-display-none';
  var caCocOption7EditNotes = 'govuk-!-display-none';
  var caCocOption8AddNotes = 'govuk-!-display-none';
  var caCocOption8EditNotes = 'govuk-!-display-none';
  var caCocOption9AddNotes = 'govuk-!-display-none';
  var caCocOption9EditNotes = 'govuk-!-display-none';
  var caCocOption10AddNotes = 'govuk-!-display-none';
  var caCocOption10EditNotes = 'govuk-!-display-none';
  var caLoeOption1AddNotes = 'govuk-!-display-none';
  var caLoeOption1EditNotes = 'govuk-!-display-none';
  var caGeneralOption1AddNotes = 'govuk-!-display-none';
  var caGeneralOption1EditNotes = 'govuk-!-display-none';
  var caGeneralOption2AddNotes = 'govuk-!-display-none';
  var caGeneralOption2EditNotes = 'govuk-!-display-none';
  var caGeneralOption3AddNotes = 'govuk-!-display-none';
  var caGeneralOption3EditNotes = 'govuk-!-display-none';
  
  if (req.session.data['esaNextPaymentDateNotes'] == '' || req.session.data['esaNextPaymentDateNotes'] == undefined) { esaNextPaymentDateAddNotes = 'govuk-!-display-block'; } else { esaNextPaymentDateEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaNextPaymentAmountNotes'] == '' || req.session.data['esaNextPaymentAmountNotes'] == undefined) { esaNextPaymentAmountAddNotes = 'govuk-!-display-block'; } else { esaNextPaymentAmountEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaMissingPaymentNotes'] == '' || req.session.data['esaMissingPaymentNotes'] == undefined) { esaMissingPaymentAddNotes = 'govuk-!-display-block'; } else { esaMissingPaymentEditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['esaPcOption1'] == '' || req.session.data['esaPcOption1'] == undefined) { esaPcOption1AddNotes = 'govuk-!-display-block'; } else { esaPcOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption2'] == '' || req.session.data['esaPcOption2'] == undefined) { esaPcOption2AddNotes = 'govuk-!-display-block'; } else { esaPcOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption3'] == '' || req.session.data['esaPcOption3'] == undefined) { esaPcOption3AddNotes = 'govuk-!-display-block'; } else { esaPcOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption4'] == '' || req.session.data['esaPcOption4'] == undefined) { esaPcOption4AddNotes = 'govuk-!-display-block'; } else { esaPcOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption5'] == '' || req.session.data['esaPcOption5'] == undefined) { esaPcOption5AddNotes = 'govuk-!-display-block'; } else { esaPcOption5AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption6'] == '' || req.session.data['esaPcOption6'] == undefined) { esaPcOption6AddNotes = 'govuk-!-display-block'; } else { esaPcOption6AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaPcOption7'] == '' || req.session.data['esaPcOption7'] == undefined) { esaPcOption7AddNotes = 'govuk-!-display-block'; } else { esaPcOption7EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['esaCocOption1'] == '' || req.session.data['esaCocOption1'] == undefined) { esaCocOption1AddNotes = 'govuk-!-display-block'; } else { esaCocOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption2'] == '' || req.session.data['esaCocOption2'] == undefined) { esaCocOption2AddNotes = 'govuk-!-display-block'; } else { esaCocOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption3'] == '' || req.session.data['esaCocOption3'] == undefined) { esaCocOption3AddNotes = 'govuk-!-display-block'; } else { esaCocOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption4'] == '' || req.session.data['esaCocOption4'] == undefined) { esaCocOption4AddNotes = 'govuk-!-display-block'; } else { esaCocOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption5'] == '' || req.session.data['esaCocOption5'] == undefined) { esaCocOption5AddNotes = 'govuk-!-display-block'; } else { esaCocOption5EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption6'] == '' || req.session.data['esaCocOption6'] == undefined) { esaCocOption6AddNotes = 'govuk-!-display-block'; } else { esaCocOption6EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption7'] == '' || req.session.data['esaCocOption7'] == undefined) { esaCocOption7AddNotes = 'govuk-!-display-block'; } else { esaCocOption7EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption8'] == '' || req.session.data['esaCocOption8'] == undefined) { esaCocOption8AddNotes = 'govuk-!-display-block'; } else { esaCocOption8EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption9'] == '' || req.session.data['esaCocOption9'] == undefined) { esaCocOption9AddNotes = 'govuk-!-display-block'; } else { esaCocOption9EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaCocOption10'] == '' || req.session.data['esaCocOption10'] == undefined) { esaCocOption10AddNotes = 'govuk-!-display-block'; } else { esaCocOption10EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['esaLoeOption1'] == '' || req.session.data['esaLoeOption1'] == undefined) { esaLoeOption1AddNotes = 'govuk-!-display-block'; } else { esaLoeOption1EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['esaGeneralOption1'] == '' || req.session.data['esaGeneralOption1'] == undefined) { esaGeneralOption1AddNotes = 'govuk-!-display-block'; } else { esaGeneralOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaGeneralOption2'] == '' || req.session.data['esaGeneralOption2'] == undefined) { esaGeneralOption2AddNotes = 'govuk-!-display-block'; } else { esaGeneralOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['esaGeneralOption3'] == '' || req.session.data['esaGeneralOption3'] == undefined) { esaGeneralOption3AddNotes = 'govuk-!-display-block'; } else { esaGeneralOption3EditNotes = 'govuk-!-display-block'; }
  
  
  //pip
  if (req.session.data['pipNextPaymentDateNotes'] == '' || req.session.data['pipNextPaymentDateNotes'] == undefined) { pipNextPaymentDateAddNotes = 'govuk-!-display-block'; } else { pipNextPaymentDateEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipNextPaymentAmountNotes'] == '' || req.session.data['pipNextPaymentAmountNotes'] == undefined) { pipNextPaymentAmountAddNotes = 'govuk-!-display-block'; } else { pipNextPaymentAmountEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipMissingPaymentNotes'] == '' || req.session.data['pipMissingPaymentNotes'] == undefined) { pipMissingPaymentAddNotes = 'govuk-!-display-block'; } else { pipMissingPaymentEditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['pipPcOption1'] == '' || req.session.data['pipPcOption1'] == undefined) { pipPcOption1AddNotes = 'govuk-!-display-block'; } else { pipPcOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption2'] == '' || req.session.data['pipPcOption2'] == undefined) { pipPcOption2AddNotes = 'govuk-!-display-block'; } else { pipPcOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption3'] == '' || req.session.data['pipPcOption3'] == undefined) { pipPcOption3AddNotes = 'govuk-!-display-block'; } else { pipPcOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption4'] == '' || req.session.data['pipPcOption4'] == undefined) { pipPcOption4AddNotes = 'govuk-!-display-block'; } else { pipPcOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption5'] == '' || req.session.data['pipPcOption5'] == undefined) { pipPcOption5AddNotes = 'govuk-!-display-block'; } else { pipPcOption5AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption6'] == '' || req.session.data['pipPcOption6'] == undefined) { pipPcOption6AddNotes = 'govuk-!-display-block'; } else { pipPcOption6AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipPcOption7'] == '' || req.session.data['pipPcOption7'] == undefined) { pipPcOption7AddNotes = 'govuk-!-display-block'; } else { pipPcOption7EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['pipCocOption1'] == '' || req.session.data['pipCocOption1'] == undefined) { pipCocOption1AddNotes = 'govuk-!-display-block'; } else { pipCocOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption2'] == '' || req.session.data['pipCocOption2'] == undefined) { pipCocOption2AddNotes = 'govuk-!-display-block'; } else { pipCocOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption3'] == '' || req.session.data['pipCocOption3'] == undefined) { pipCocOption3AddNotes = 'govuk-!-display-block'; } else { pipCocOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption4'] == '' || req.session.data['pipCocOption4'] == undefined) { pipCocOption4AddNotes = 'govuk-!-display-block'; } else { pipCocOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption5'] == '' || req.session.data['pipCocOption5'] == undefined) { pipCocOption5AddNotes = 'govuk-!-display-block'; } else { pipCocOption5EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption6'] == '' || req.session.data['pipCocOption6'] == undefined) { pipCocOption6AddNotes = 'govuk-!-display-block'; } else { pipCocOption6EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption7'] == '' || req.session.data['pipCocOption7'] == undefined) { pipCocOption7AddNotes = 'govuk-!-display-block'; } else { pipCocOption7EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption8'] == '' || req.session.data['pipCocOption8'] == undefined) { pipCocOption8AddNotes = 'govuk-!-display-block'; } else { pipCocOption8EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption9'] == '' || req.session.data['pipCocOption9'] == undefined) { pipCocOption9AddNotes = 'govuk-!-display-block'; } else { pipCocOption9EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipCocOption10'] == '' || req.session.data['pipCocOption10'] == undefined) { pipCocOption10AddNotes = 'govuk-!-display-block'; } else { pipCocOption10EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['pipLoeOption1'] == '' || req.session.data['pipLoeOption1'] == undefined) { pipLoeOption1AddNotes = 'govuk-!-display-block'; } else { pipLoeOption1EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['pipGeneralOption1'] == '' || req.session.data['pipGeneralOption1'] == undefined) { pipGeneralOption1AddNotes = 'govuk-!-display-block'; } else { pipGeneralOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipGeneralOption2'] == '' || req.session.data['pipGeneralOption2'] == undefined) { pipGeneralOption2AddNotes = 'govuk-!-display-block'; } else { pipGeneralOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['pipGeneralOption3'] == '' || req.session.data['pipGeneralOption3'] == undefined) { pipGeneralOption3AddNotes = 'govuk-!-display-block'; } else { pipGeneralOption3EditNotes = 'govuk-!-display-block'; }
  
  //CA
  if (req.session.data['caNextPaymentDateNotes'] == '' || req.session.data['caNextPaymentDateNotes'] == undefined) { caNextPaymentDateAddNotes = 'govuk-!-display-block'; } else { caNextPaymentDateEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caNextPaymentAmountNotes'] == '' || req.session.data['caNextPaymentAmountNotes'] == undefined) { caNextPaymentAmountAddNotes = 'govuk-!-display-block'; } else { caNextPaymentAmountEditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caMissingPaymentNotes'] == '' || req.session.data['caMissingPaymentNotes'] == undefined) { caMissingPaymentAddNotes = 'govuk-!-display-block'; } else { caMissingPaymentEditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['caPcOption1'] == '' || req.session.data['caPcOption1'] == undefined) { caPcOption1AddNotes = 'govuk-!-display-block'; } else { caPcOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption2'] == '' || req.session.data['caPcOption2'] == undefined) { caPcOption2AddNotes = 'govuk-!-display-block'; } else { caPcOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption3'] == '' || req.session.data['caPcOption3'] == undefined) { caPcOption3AddNotes = 'govuk-!-display-block'; } else { caPcOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption4'] == '' || req.session.data['caPcOption4'] == undefined) { caPcOption4AddNotes = 'govuk-!-display-block'; } else { caPcOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption5'] == '' || req.session.data['caPcOption5'] == undefined) { caPcOption5AddNotes = 'govuk-!-display-block'; } else { caPcOption5AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption6'] == '' || req.session.data['caPcOption6'] == undefined) { caPcOption6AddNotes = 'govuk-!-display-block'; } else { caPcOption6AddNotes = 'govuk-!-display-block'; }
  if (req.session.data['caPcOption7'] == '' || req.session.data['caPcOption7'] == undefined) { caPcOption7AddNotes = 'govuk-!-display-block'; } else { caPcOption7EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['caCocOption1'] == '' || req.session.data['caCocOption1'] == undefined) { caCocOption1AddNotes = 'govuk-!-display-block'; } else { caCocOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption2'] == '' || req.session.data['caCocOption2'] == undefined) { caCocOption2AddNotes = 'govuk-!-display-block'; } else { caCocOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption3'] == '' || req.session.data['caCocOption3'] == undefined) { caCocOption3AddNotes = 'govuk-!-display-block'; } else { caCocOption3EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption4'] == '' || req.session.data['caCocOption4'] == undefined) { caCocOption4AddNotes = 'govuk-!-display-block'; } else { caCocOption4EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption5'] == '' || req.session.data['caCocOption5'] == undefined) { caCocOption5AddNotes = 'govuk-!-display-block'; } else { caCocOption5EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption6'] == '' || req.session.data['caCocOption6'] == undefined) { caCocOption6AddNotes = 'govuk-!-display-block'; } else { caCocOption6EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption7'] == '' || req.session.data['caCocOption7'] == undefined) { caCocOption7AddNotes = 'govuk-!-display-block'; } else { caCocOption7EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption8'] == '' || req.session.data['caCocOption8'] == undefined) { caCocOption8AddNotes = 'govuk-!-display-block'; } else { caCocOption8EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption9'] == '' || req.session.data['caCocOption9'] == undefined) { caCocOption9AddNotes = 'govuk-!-display-block'; } else { caCocOption9EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caCocOption10'] == '' || req.session.data['caCocOption10'] == undefined) { caCocOption10AddNotes = 'govuk-!-display-block'; } else { caCocOption10EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['caLoeOption1'] == '' || req.session.data['caLoeOption1'] == undefined) { caLoeOption1AddNotes = 'govuk-!-display-block'; } else { caLoeOption1EditNotes = 'govuk-!-display-block'; }
  
  if (req.session.data['caGeneralOption1'] == '' || req.session.data['caGeneralOption1'] == undefined) { caGeneralOption1AddNotes = 'govuk-!-display-block'; } else { caGeneralOption1EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caGeneralOption2'] == '' || req.session.data['caGeneralOption2'] == undefined) { caGeneralOption2AddNotes = 'govuk-!-display-block'; } else { caGeneralOption2EditNotes = 'govuk-!-display-block'; }
  if (req.session.data['caGeneralOption3'] == '' || req.session.data['caGeneralOption3'] == undefined) { caGeneralOption3AddNotes = 'govuk-!-display-block'; } else { caGeneralOption3EditNotes = 'govuk-!-display-block'; }
  
  res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/outcome-queries', {
  
    "isEsa": isEsa,
    "isPip": isPip,
    "isCa": isCa,
  
    //For esa
    "esaPayment": esaPayment,
    "esaNextPaymentDate": esaNextPaymentDate,
    "esaNextPaymentAmount": esaNextPaymentAmount,
    "esaMissingPayment": esaMissingPayment,
    //processing chasing
    "esaProcessChasing": esaProcessChasing,
    "esaNewClaim": esaNewClaim,
    "esaClaimClosureContact": esaClaimClosureContact,
    "esaExplanation": esaExplanation,
    "esaAppealReconsiSupSOS": esaAppealReconsiSupSOS,
    "esaInterventionsPlanned": esaInterventionsPlanned,
    "esaInterventionsUnplanned": esaInterventionsUnplanned,
    "esaSevereDisablementPremium": esaSevereDisablementPremium,
    //coc
    "esaCoc": esaCoc,
    "esaSpcAccAdmis": esaSpcAccAdmis,
    "esaChangeofAddress": esaChangeofAddress,
    "esaChangeHospitalStatus": esaChangeHospitalStatus,
    "esaSavingsInvestments": esaSavingsInvestments,
    "esaChangeCarerStatus": esaChangeCarerStatus,
    "esaCareHomeAdmission": esaCareHomeAdmission,
    "esaChangesEarnings": esaChangesEarnings,
    "esaChangeBankDetails": esaChangeBankDetails,
    "esaChangeFamilyUnit": esaChangeFamilyUnit,
    "esaChangeMedicalCondition": esaChangeMedicalCondition,
    //loe
    "esaLoe": esaLoe,
    "esaLoeRequest": esaLoeRequest,
    //general
    "esaGeneral": esaGeneral,
    "esaMedicalEvidenceEnquiry": esaMedicalEvidenceEnquiry,
    "esaJobcentreAppointmentEnquiry": esaJobcentreAppointmentEnquiry,
    "esaGeneralEnquiry": esaGeneralEnquiry,
  
  
    //For pip
    "pipPayment": pipPayment,
    "pipNextPaymentDate": pipNextPaymentDate,
    "pipNextPaymentAmount": pipNextPaymentAmount,
    "pipMissingPayment": pipMissingPayment,
    //processing chasing
    "pipProcessChasing": pipProcessChasing,
    "pipNewClaim": pipNewClaim,
    "pipClaimClosureContact": pipClaimClosureContact,
    "pipExplanation": pipExplanation,
    "pipAppealReconsiSupSOS": pipAppealReconsiSupSOS,
    "pipInterventionsPlanned": pipInterventionsPlanned,
    "pipInterventionsUnplanned": pipInterventionsUnplanned,
    "pipSevereDisablementPremium": pipSevereDisablementPremium,
    //coc
    "pipCoc": pipCoc,
    "pipSpcAccAdmis": pipSpcAccAdmis,
    "pipChangeofAddress": pipChangeofAddress,
    "pipChangeHospitalStatus": pipChangeHospitalStatus,
    "pipSavingsInvestments": pipSavingsInvestments,
    "pipChangeCarerStatus": pipChangeCarerStatus,
    "pipCareHomeAdmission": pipCareHomeAdmission,
    "pipChangesEarnings": pipChangesEarnings,
    "pipChangeBankDetails": pipChangeBankDetails,
    "pipChangeFamilyUnit": pipChangeFamilyUnit,
    "pipChangeMedicalCondition": pipChangeMedicalCondition,
    //loe
    "pipLoe": pipLoe,
    "pipLoeRequest": pipLoeRequest,
    //general
    "pipGeneral": pipGeneral,
    "pipMedicalEvidenceEnquiry": pipMedicalEvidenceEnquiry,
    "pipJobcentreAppointmentEnquiry": pipJobcentreAppointmentEnquiry,
    "pipGeneralEnquiry": pipGeneralEnquiry,
  
  
    //For ca
    "caPayment": caPayment,
    "caNextPaymentDate": caNextPaymentDate,
    "caNextPaymentAmount": caNextPaymentAmount,
    "caMissingPayment": caMissingPayment,
    //processing chasing
    "caProcessChasing": caProcessChasing,
    "caNewClaim": caNewClaim,
    "caClaimClosureContact": caClaimClosureContact,
    "caExplanation": caExplanation,
    "caAppealReconsiSupSOS": caAppealReconsiSupSOS,
    "caInterventionsPlanned": caInterventionsPlanned,
    "caInterventionsUnplanned": caInterventionsUnplanned,
    "caSevereDisablementPremium": caSevereDisablementPremium,
    //coc
    "caCoc": caCoc,
    "caSpcAccAdmis": caSpcAccAdmis,
    "caChangeofAddress": caChangeofAddress,
    "caChangeHospitalStatus": caChangeHospitalStatus,
    "caSavingsInvestments": caSavingsInvestments,
    "caChangeCarerStatus": caChangeCarerStatus,
    "caCareHomeAdmission": caCareHomeAdmission,
    "caChangesEarnings": caChangesEarnings,
    "caChangeBankDetails": caChangeBankDetails,
    "caChangeFamilyUnit": caChangeFamilyUnit,
    "caChangeMedicalCondition": caChangeMedicalCondition,
    //loe
    "caLoe": caLoe,
    "caLoeRequest": caLoeRequest,
    //general
    "caGeneral": caGeneral,
    "caMedicalEvidenceEnquiry": caMedicalEvidenceEnquiry,
    "caJobcentreAppointmentEnquiry": caJobcentreAppointmentEnquiry,
    "caGeneralEnquiry": caGeneralEnquiry,
  
    //for notes
    "esaNextPaymentDateNotes": req.session.data['esaNextPaymentDateNotes'],
    "esaNextPaymentAmountNotes": req.session.data['esaNextPaymentAmountNotes'],
    "esaMissingPaymentNotes": req.session.data['esaMissingPaymentNotes'],
  
    "esaPcOption1": req.session.data['esaPcOption1'],
    "esaPcOption2": req.session.data['esaPcOption2'],
    "esaPcOption3": req.session.data['esaPcOption3'],
    "esaPcOption4": req.session.data['esaPcOption4'],
    "esaPcOption5": req.session.data['esaPcOption5'],
    "esaPcOption6": req.session.data['esaPcOption6'],
    "esaPcOption7": req.session.data['esaPcOption7'],
  
    "esaCocOption1": req.session.data['esaCocOption1'],
    "esaCocOption2": req.session.data['esaCocOption2'],
    "esaCocOption3": req.session.data['esaCocOption3'],
    "esaCocOption4": req.session.data['esaCocOption4'],
    "esaCocOption5": req.session.data['esaCocOption5'],
    "esaCocOption6": req.session.data['esaCocOption6'],
    "esaCocOption7": req.session.data['esaCocOption7'],
    "esaCocOption8": req.session.data['esaCocOption8'],
    "esaCocOption9": req.session.data['esaCocOption9'],
    "esaCocOption10": req.session.data['esaCocOption10'],
  
    "esaLoeOption1": req.session.data['esaLoeOption1'],
  
    "esaGeneralOption1": req.session.data['esaGeneralOption1'],
    "esaGeneralOption2": req.session.data['esaGeneralOption2'],
    "esaGeneralOption3": req.session.data['esaGeneralOption3'],
  
    "esaNextPaymentDateAddNotes": esaNextPaymentDateAddNotes,
    "esaNextPaymentDateEditNotes": esaNextPaymentDateEditNotes,
    "esaNextPaymentAmountAddNotes": esaNextPaymentAmountAddNotes,
    "esaNextPaymentAmountEditNotes": esaNextPaymentAmountEditNotes,
    "esaMissingPaymentAddNotes": esaMissingPaymentAddNotes,
    "esaMissingPaymentEditNotes": esaMissingPaymentEditNotes,
  
    "esaPcOption1AddNotes": esaPcOption1AddNotes,
    "esaPcOption1EditNotes": esaPcOption1EditNotes,
    "esaPcOption2AddNotes": esaPcOption2AddNotes,
    "esaPcOption2EditNotes": esaPcOption2EditNotes,
    "esaPcOption3AddNotes": esaPcOption3AddNotes,
    "esaPcOption3EditNotes": esaPcOption3EditNotes,
    "esaPcOption4AddNotes": esaPcOption4AddNotes,
    "esaPcOption4EditNotes": esaPcOption4EditNotes,
    "esaPcOption5AddNotes": esaPcOption5AddNotes,
    "esaPcOption5EditNotes": esaPcOption5EditNotes,
    "esaPcOption6AddNotes": esaPcOption6AddNotes,
    "esaPcOption6EditNotes": esaPcOption6EditNotes,
    "esaPcOption7AddNotes": esaPcOption7AddNotes,
    "esaPcOption7EditNotes": esaPcOption7EditNotes,
  
    "esaCocOption1AddNotes": esaCocOption1AddNotes,
    "esaCocOption1EditNotes": esaCocOption1EditNotes,
    "esaCocOption2AddNotes": esaCocOption2AddNotes,
    "esaCocOption2EditNotes": esaCocOption2EditNotes,
    "esaCocOption3AddNotes": esaCocOption3AddNotes,
    "esaCocOption3EditNotes": esaCocOption3EditNotes,
    "esaCocOption4AddNotes": esaCocOption4AddNotes,
    "esaCocOption4EditNotes": esaCocOption4EditNotes,
    "esaCocOption5AddNotes": esaCocOption5AddNotes,
    "esaCocOption5EditNotes": esaCocOption5EditNotes,
    "esaCocOption6AddNotes": esaCocOption6AddNotes,
    "esaCocOption6EditNotes": esaCocOption6EditNotes,
    "esaCocOption7AddNotes": esaCocOption7AddNotes,
    "esaCocOption7EditNotes": esaCocOption7EditNotes,
    "esaCocOption8AddNotes": esaCocOption8AddNotes,
    "esaCocOption8EditNotes": esaCocOption8EditNotes,
    "esaCocOption9AddNotes": esaCocOption9AddNotes,
    "esaCocOption9EditNotes": esaCocOption9EditNotes,
    "esaCocOption10AddNotes": esaCocOption10AddNotes,
    "esaCocOption10EditNotes": esaCocOption10EditNotes,
  
    "esaLoeOption1AddNotes": esaLoeOption1AddNotes,
    "esaLoeOption1EditNotes": esaLoeOption1EditNotes,
  
    "esaGeneralOption1AddNotes": esaGeneralOption1AddNotes,
    "esaGeneralOption1EditNotes": esaGeneralOption1EditNotes,
    "esaGeneralOption2AddNotes": esaGeneralOption2AddNotes,
    "esaGeneralOption2EditNotes": esaGeneralOption2EditNotes,
    "esaGeneralOption3AddNotes": esaGeneralOption3AddNotes,
    "esaGeneralOption3EditNotes": esaGeneralOption3EditNotes,
  
    //pip
    "pipNextPaymentDateNotes": req.session.data['pipNextPaymentDateNotes'],
    "pipNextPaymentAmountNotes": req.session.data['pipNextPaymentAmountNotes'],
    "pipMissingPaymentNotes": req.session.data['pipMissingPaymentNotes'],
  
    "pipPcOption1": req.session.data['pipPcOption1'],
    "pipPcOption2": req.session.data['pipPcOption2'],
    "pipPcOption3": req.session.data['pipPcOption3'],
    "pipPcOption4": req.session.data['pipPcOption4'],
    "pipPcOption5": req.session.data['pipPcOption5'],
    "pipPcOption6": req.session.data['pipPcOption6'],
    "pipPcOption7": req.session.data['pipPcOption7'],
  
    "pipCocOption1": req.session.data['pipCocOption1'],
    "pipCocOption2": req.session.data['pipCocOption2'],
    "pipCocOption3": req.session.data['pipCocOption3'],
    "pipCocOption4": req.session.data['pipCocOption4'],
    "pipCocOption5": req.session.data['pipCocOption5'],
    "pipCocOption6": req.session.data['pipCocOption6'],
    "pipCocOption7": req.session.data['pipCocOption7'],
    "pipCocOption8": req.session.data['pipCocOption8'],
    "pipCocOption9": req.session.data['pipCocOption9'],
    "pipCocOption10": req.session.data['pipCocOption10'],
  
    "pipLoeOption1": req.session.data['pipLoeOption1'],
  
    "pipGeneralOption1": req.session.data['pipGeneralOption1'],
    "pipGeneralOption2": req.session.data['pipGeneralOption2'],
    "pipGeneralOption3": req.session.data['pipGeneralOption3'],
  
    "pipNextPaymentDateAddNotes": pipNextPaymentDateAddNotes,
    "pipNextPaymentDateEditNotes": pipNextPaymentDateEditNotes,
    "pipNextPaymentAmountAddNotes": pipNextPaymentAmountAddNotes,
    "pipNextPaymentAmountEditNotes": pipNextPaymentAmountEditNotes,
    "pipMissingPaymentAddNotes": pipMissingPaymentAddNotes,
    "pipMissingPaymentEditNotes": pipMissingPaymentEditNotes,
  
    "pipPcOption1AddNotes": pipPcOption1AddNotes,
    "pipPcOption1EditNotes": pipPcOption1EditNotes,
    "pipPcOption2AddNotes": pipPcOption2AddNotes,
    "pipPcOption2EditNotes": pipPcOption2EditNotes,
    "pipPcOption3AddNotes": pipPcOption3AddNotes,
    "pipPcOption3EditNotes": pipPcOption3EditNotes,
    "pipPcOption4AddNotes": pipPcOption4AddNotes,
    "pipPcOption4EditNotes": pipPcOption4EditNotes,
    "pipPcOption5AddNotes": pipPcOption5AddNotes,
    "pipPcOption5EditNotes": pipPcOption5EditNotes,
    "pipPcOption6AddNotes": pipPcOption6AddNotes,
    "pipPcOption6EditNotes": pipPcOption6EditNotes,
    "pipPcOption7AddNotes": pipPcOption7AddNotes,
    "pipPcOption7EditNotes": pipPcOption7EditNotes,
  
    "pipCocOption1AddNotes": pipCocOption1AddNotes,
    "pipCocOption1EditNotes": pipCocOption1EditNotes,
    "pipCocOption2AddNotes": pipCocOption2AddNotes,
    "pipCocOption2EditNotes": pipCocOption2EditNotes,
    "pipCocOption3AddNotes": pipCocOption3AddNotes,
    "pipCocOption3EditNotes": pipCocOption3EditNotes,
    "pipCocOption4AddNotes": pipCocOption4AddNotes,
    "pipCocOption4EditNotes": pipCocOption4EditNotes,
    "pipCocOption5AddNotes": pipCocOption5AddNotes,
    "pipCocOption5EditNotes": pipCocOption5EditNotes,
    "pipCocOption6AddNotes": pipCocOption6AddNotes,
    "pipCocOption6EditNotes": pipCocOption6EditNotes,
    "pipCocOption7AddNotes": pipCocOption7AddNotes,
    "pipCocOption7EditNotes": pipCocOption7EditNotes,
    "pipCocOption8AddNotes": pipCocOption8AddNotes,
    "pipCocOption8EditNotes": pipCocOption8EditNotes,
    "pipCocOption9AddNotes": pipCocOption9AddNotes,
    "pipCocOption9EditNotes": pipCocOption9EditNotes,
    "pipCocOption10AddNotes": pipCocOption10AddNotes,
    "pipCocOption10EditNotes": pipCocOption10EditNotes,
  
    "pipLoeOption1AddNotes": pipLoeOption1AddNotes,
    "pipLoeOption1EditNotes": pipLoeOption1EditNotes,
  
    "pipGeneralOption1AddNotes": pipGeneralOption1AddNotes,
    "pipGeneralOption1EditNotes": pipGeneralOption1EditNotes,
    "pipGeneralOption2AddNotes": pipGeneralOption2AddNotes,
    "pipGeneralOption2EditNotes": pipGeneralOption2EditNotes,
    "pipGeneralOption3AddNotes": pipGeneralOption3AddNotes,
    "pipGeneralOption3EditNotes": pipGeneralOption3EditNotes,
  
    //CA
    "caNextPaymentDateNotes": req.session.data['caNextPaymentDateNotes'],
    "caNextPaymentAmountNotes": req.session.data['caNextPaymentAmountNotes'],
    "caMissingPaymentNotes": req.session.data['caMissingPaymentNotes'],
  
    "caPcOption1": req.session.data['caPcOption1'],
    "caPcOption2": req.session.data['caPcOption2'],
    "caPcOption3": req.session.data['caPcOption3'],
    "caPcOption4": req.session.data['caPcOption4'],
    "caPcOption5": req.session.data['caPcOption5'],
    "caPcOption6": req.session.data['caPcOption6'],
    "caPcOption7": req.session.data['caPcOption7'],
  
    "caCocOption1": req.session.data['caCocOption1'],
    "caCocOption2": req.session.data['caCocOption2'],
    "caCocOption3": req.session.data['caCocOption3'],
    "caCocOption4": req.session.data['caCocOption4'],
    "caCocOption5": req.session.data['caCocOption5'],
    "caCocOption6": req.session.data['caCocOption6'],
    "caCocOption7": req.session.data['caCocOption7'],
    "caCocOption8": req.session.data['caCocOption8'],
    "caCocOption9": req.session.data['caCocOption9'],
    "caCocOption10": req.session.data['caCocOption10'],
  
    "caLoeOption1": req.session.data['caLoeOption1'],
  
    "caGeneralOption1": req.session.data['caGeneralOption1'],
    "caGeneralOption2": req.session.data['caGeneralOption2'],
    "caGeneralOption3": req.session.data['caGeneralOption3'],
  
    "caNextPaymentDateAddNotes": caNextPaymentDateAddNotes,
    "caNextPaymentDateEditNotes": caNextPaymentDateEditNotes,
    "caNextPaymentAmountAddNotes": caNextPaymentAmountAddNotes,
    "caNextPaymentAmountEditNotes": caNextPaymentAmountEditNotes,
    "caMissingPaymentAddNotes": caMissingPaymentAddNotes,
    "caMissingPaymentEditNotes": caMissingPaymentEditNotes,
  
    "caPcOption1AddNotes": caPcOption1AddNotes,
    "caPcOption1EditNotes": caPcOption1EditNotes,
    "caPcOption2AddNotes": caPcOption2AddNotes,
    "caPcOption2EditNotes": caPcOption2EditNotes,
    "caPcOption3AddNotes": caPcOption3AddNotes,
    "caPcOption3EditNotes": caPcOption3EditNotes,
    "caPcOption4AddNotes": caPcOption4AddNotes,
    "caPcOption4EditNotes": caPcOption4EditNotes,
    "caPcOption5AddNotes": caPcOption5AddNotes,
    "caPcOption5EditNotes": caPcOption5EditNotes,
    "caPcOption6AddNotes": caPcOption6AddNotes,
    "caPcOption6EditNotes": caPcOption6EditNotes,
    "caPcOption7AddNotes": caPcOption7AddNotes,
    "caPcOption7EditNotes": caPcOption7EditNotes,
  
    "caCocOption1AddNotes": caCocOption1AddNotes,
    "caCocOption1EditNotes": caCocOption1EditNotes,
    "caCocOption2AddNotes": caCocOption2AddNotes,
    "caCocOption2EditNotes": caCocOption2EditNotes,
    "caCocOption3AddNotes": caCocOption3AddNotes,
    "caCocOption3EditNotes": caCocOption3EditNotes,
    "caCocOption4AddNotes": caCocOption4AddNotes,
    "caCocOption4EditNotes": caCocOption4EditNotes,
    "caCocOption5AddNotes": caCocOption5AddNotes,
    "caCocOption5EditNotes": caCocOption5EditNotes,
    "caCocOption6AddNotes": caCocOption6AddNotes,
    "caCocOption6EditNotes": caCocOption6EditNotes,
    "caCocOption7AddNotes": caCocOption7AddNotes,
    "caCocOption7EditNotes": caCocOption7EditNotes,
    "caCocOption8AddNotes": caCocOption8AddNotes,
    "caCocOption8EditNotes": caCocOption8EditNotes,
    "caCocOption9AddNotes": caCocOption9AddNotes,
    "caCocOption9EditNotes": caCocOption9EditNotes,
    "caCocOption10AddNotes": caCocOption10AddNotes,
    "caCocOption10EditNotes": caCocOption10EditNotes,
  
    "caLoeOption1AddNotes": caLoeOption1AddNotes,
    "caLoeOption1EditNotes": caLoeOption1EditNotes,
  
    "caGeneralOption1AddNotes": caGeneralOption1AddNotes,
    "caGeneralOption1EditNotes": caGeneralOption1EditNotes,
    "caGeneralOption2AddNotes": caGeneralOption2AddNotes,
    "caGeneralOption2EditNotes": caGeneralOption2EditNotes,
    "caGeneralOption3AddNotes": caGeneralOption3AddNotes,
    "caGeneralOption3EditNotes": caGeneralOption3EditNotes,
  });
  });
  
  router.get('/prototype-sprint-wise/sprint22/opt1/engagement-log-journey/add-note/:name', function (req, res) {
  // console.log(' Add Notes route is called - GET: ',req.params.name);
  res.render('prototype-sprint-wise/sprint22/opt1/engagement-log-journey/add-note', {
    "notesName": req.params.name,
    "notesValue": req.session.data[req.params.name]
  });
  });
  
// End of sprint22 here

module.exports = router