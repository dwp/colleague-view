const express = require('express')
const router = express.Router()


// this is for date input
router.post('/question-3', function (req, res) {
  if (req.session.data['effective-year'] >= '1990'){
  res.redirect('too-young');
} else {
  res.redirect('/question-3');
}
})




// this is for radio selection
router.post('/enter-NINO-number', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['where-do-you-live']

  // Check whether the variable matches a condition
  if (howManyBalls == "Employed"){
    // Send user to next page
    res.redirect('/enter-NINO-number');
  } else {
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for NINO number for UR round4 option-1
router.post('/sprint16/opt1/engagement-type', function (req, res) {

req.session.data['What-type-of-engagement-is-it']='';
  req.session.data['Who-is-the-engagement-with']='';
  req.session.data['Do-you-want-to-complete-the-session']='';
  req.session.data['What-services-have-they-called-about']='';
  req.session.data['esaPayment']='';
  req.session.data['pipPayment']='';
  req.session.data['caPayment']='';
  req.session.data['ca-payment']='';
  req.session.data['esa-payment']='';
  req.session.data['pip-payment']='';
  req.session.data['esa-process-chasing']='';
  req.session.data['pip-process-chasing']='';
  req.session.data['ca-process-chasing']='';
  req.session.data['esa-coc']='';
  req.session.data['pip-coc']='';
  req.session.data['ca-coc']='';
  req.session.data['esa-general']='';
  req.session.data['pip-general']='';
  req.session.data['ca-general']='';

  if (req.session.data['national-insurance-number-for-ur4'] == "QQ123456Q"){
  // Send user to next page
  res.render('sprint16/opt1/engagement-type')
} else {
    var errMsg = "";
  if (req.session.data['national-insurance-number-for-ur4'] == '' || req.session.data['national-insurance-number-for-ur4'] == undefined){
    errMsg ="National Insurance Number is mandatory";
  }else{
    errMsg ="Enter a National Insurance number in the correct format";
  }
  // Send user to error page
  res.render('sprint16/opt1/error-NINO-number',{"errMsg":errMsg});
}
})


// this is for NINO number for UR round4 option-2
router.post('/sprint16/opt2/engagement-type', function (req, res) {

req.session.data['What-type-of-engagement-is-it']='';
  req.session.data['Who-is-the-engagement-with']='';
  req.session.data['Do-you-want-to-complete-the-session']='';
  req.session.data['What-services-have-they-called-about']='';
  req.session.data['esaPayment']='';
  req.session.data['pipPayment']='';
  req.session.data['caPayment']='';
  req.session.data['ca-payment']='';
  req.session.data['esa-payment']='';
  req.session.data['pip-payment']='';
  req.session.data['esa-process-chasing']='';
  req.session.data['pip-process-chasing']='';
  req.session.data['ca-process-chasing']='';
  req.session.data['esa-coc']='';
  req.session.data['pip-coc']='';
  req.session.data['ca-coc']='';
  req.session.data['esa-general']='';
  req.session.data['pip-general']='';
  req.session.data['ca-general']='';

  if (req.session.data['national-insurance-number-for-ur4_2'] == "QQ123456Q"){
  // Send user to next page
  res.render('sprint16/opt2/engagement-type')
} else {
    var errMsg = "";
  if (req.session.data['national-insurance-number-for-ur4_2'] == '' || req.session.data['national-insurance-number-for-ur4_2'] == undefined){
    errMsg ="National Insurance Number is mandatory";
  }else{
    errMsg ="Enter a National Insurance number in the correct format";
  }
  // Send user to error page
  res.render('sprint16/opt2/error-NINO-number',{"errMsg":errMsg});
}
})





router.post('/question-3', function (req, res) {
  if (req.session.data['effective-year'] >= '1990'){
  res.redirect('too-young');
} else {
  res.redirect('/question-3');
}
})


// this is for radio selection
router.post('/sprint13/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls== "Outgoing telephone call"){
    // Send user to next page
    res.redirect('/sprint13/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it']='';
    // Send user back to same page
    res.redirect('back');
  }

})


// this is for engagement with radio selection
router.post('/sprint13/home-page', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var engagemetWith = req.session.data['Who-is-the-engagement-with']

  // Check whether the variable matches a condition
  if (engagemetWith == "Christopher Fox"||"Jane Doe") {
    // Send user to next page
    res.redirect('/sprint13/home-page');
  } else {
    // Send user back to same page
    res.redirect('/sprint13/wrong-option-selected');
  }

})

// this is for radio selection  - for ur round 4 (opt1)
router.post('/sprint16/opt1/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it-ur4'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls== "Outgoing telephone call"){
    // Send user to next page
    res.redirect('/sprint16/opt1/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it-ur4']='';
    // Send user back to same page
    res.redirect('back');
  }
})

// this is for radio selection  - for ur round 4 (opt2)
router.post('/sprint16/opt2/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it-ur4-2'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls== "Outgoing telephone call"){
    // Send user to next page
    res.redirect('/sprint16/opt2/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it-ur4-2']='';
    // Send user back to same page
    res.redirect('back');
  }
})


// this is for engagement with radio selection - for ur round 4 (opt1)
router.post('/sprint16/opt1/home-page', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var engagemetWith = req.session.data['Who-is-the-engagement-with-ur4']

  // Check whether the variable matches a condition
  if (engagemetWith == "Christopher Fox"||"Jane Doe") {
    // Send user to next page
    res.redirect('/sprint16/opt1/home-page');
  } else {
    // Send user back to same page
    // res.redirect('/sprint13/wrong-option-selected');
    req.session.data['Who-is-the-engagement-with-ur4'] ='';
    res.redirect('back');
  }

})

// this is for engagement with radio selection - for ur round 4 (opt2)
router.post('/sprint16/opt2/home-page', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var engagemetWith = req.session.data['Who-is-the-engagement-with-ur4-2']

  // Check whether the variable matches a condition
  if (engagemetWith == "Christopher Fox"||"Jane Doe") {
    // Send user to next page
    res.redirect('/sprint16/opt2/home-page');
  } else {
    // Send user back to same page
    // res.redirect('/sprint13/wrong-option-selected');
    req.session.data['Who-is-the-engagement-with-ur4-2'] ='';
    res.redirect('back');
  }

})

router.post('/sprint13/home-page-first-time', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  if (req.session.data['Who-is-the-engagement-with'] == "Christopher Fox"|| req.session.data['Who-is-the-engagement-with'] =="Jane Doe") {
    // Send user to next page
    req.session.data['Who-is-the-engagement-with'] = "with "+req.session.data['Who-is-the-engagement-with'];
    res.redirect('/sprint13/home-page-first-time');
  } else {
    // Send user back to same page
    // res.redirect('/sprint13/wrong-option-selected');
    req.session.data['Who-is-the-engagement-with'] ='';
    res.redirect('back');
  }

})

router.post('/sprint13/engagement-log-journey/confirmation-complete-session.html',function(req,res){
  res.redirect('/sprint13/engagement-log-journey/confirmation-complete-session');
});

// this is for radio selection
router.post('/sprint13/engagement-log-journey/what-service-called-about', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['Do-you-want-to-complete-the-session']

  // Check whether the variable matches a condition
  if (howManyBalls == "Yes"){
    // Send user to next page
    res.redirect('/sprint13/engagement-log-journey/what-service-called-about');
  } else {
    // Send user back to same page
    // res.redirect('back');
    res.redirect('/sprint13/home-page');
  }

});


router.post('/sprint27/opt1/engagement-log-journey/benefitPages',function (req,res){
  var pageLength = '';
  var isEsa = req.session.data['What-services-have-they-called-about'].includes('esa');
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 1 of 2';
  }else{
    pageLength='Services 1 of 3';
  }

  if(isEsa && isPip){
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-ESA',{
        "nextUrl":'/sprint13/engagement-log-journey/what-queries-dealt-with-PIP',
        "pageLength":pageLength
    });
  }
  if(isEsa && isCa && !isPip){
    // console.log('considition executed isEsa && isCa && !isPip');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isEsa && !isPip && !isCa){
    // console.log('considition executed isEsa && !isPip && !isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && !isPip && isCa){
    // console.log('considition executed !isEsa && !isPip && isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-CA',{
      "nextUrl":'/sprint13/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});


router.post('/sprint13/engagement-log-journey/what-queries-dealt-with-PIP',function (req,res){
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  if(isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});

router.post('/sprint13/engagement-log-journey/what-queries-dealt-with-CA',function (req,res){
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  res.render('sprint13/engagement-log-journey/what-queries-dealt-with-CA',{
    "pageLength":pageLength
  });
});


router.post('/sprint13/engagement-log-journey/outcome-queries',function (req,res){

  // console.log('Value of the data outcome route:--------------->',req.session.data);
  var isEsa = 'govuk-visually-hidden';
  var isPip = 'govuk-visually-hidden';
  var isCa = 'govuk-visually-hidden';
  if(req.session.data['What-services-have-they-called-about'].includes('esa')){
    isEsa ='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('pip')){
    isPip='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('ca')){
    isCa='';
  }
  //For esa Payment
  var esaPayment ='govuk-visually-hidden';
  var esaMissingPayment = 'govuk-visually-hidden';
  var esaNextPaymentDate = 'govuk-visually-hidden';
  var esaNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Date')){
    esaNextPaymentDate ='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Amount')){
    esaNextPaymentAmount='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Missing Payment')){
    esaMissingPayment='';
    esaPayment='';
  }

  //For esa Process Chasing
  var esaProcessChasing = 'govuk-visually-hidden';
  var esaNewClaim = 'govuk-visually-hidden';
  var esaClaimClosureContact = 'govuk-visually-hidden';
  var esaExplanation = 'govuk-visually-hidden';
  var esaAppealReconsiSupSOS = 'govuk-visually-hidden';
  var esaInterventionsPlanned = 'govuk-visually-hidden';
  var esaInterventionsUnplanned = 'govuk-visually-hidden';
  var esaSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('New Claim')){
    esaNewClaim ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Claim Closure Contact')){
    esaClaimClosureContact ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Explanation')){
    esaExplanation ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    esaAppealReconsiSupSOS ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    esaInterventionsPlanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    esaInterventionsUnplanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    esaSevereDisablementPremium ='';
    esaProcessChasing='';
  }

  var esaCoc = 'govuk-visually-hidden';
  var esaSpcAccAdmis = 'govuk-visually-hidden';
  var esaChangeofAddress = 'govuk-visually-hidden';
  var esaChangeHospitalStatus = 'govuk-visually-hidden';
  var esaSavingsInvestments = 'govuk-visually-hidden';
  var esaChangeCarerStatus = 'govuk-visually-hidden';
  var esaCareHomeAdmission = 'govuk-visually-hidden';
  var esaChangesEarnings = 'govuk-visually-hidden';
  var esaChangeBankDetails = 'govuk-visually-hidden';
  var esaChangeFamilyUnit = 'govuk-visually-hidden';
  var esaChangeMedicalCondition = 'govuk-visually-hidden';
  //For esa CoC
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Special Accommodation Admission/Discharge')){
    esaSpcAccAdmis ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change of Address')){
    esaChangeofAddress ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Hospital Status')){
    esaChangeHospitalStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Savings and Investments')){
    esaSavingsInvestments ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Carer’s Status')){
    esaChangeCarerStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Care Home Admission')){
    esaCareHomeAdmission ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Changes to Earnings')){
    esaChangesEarnings ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Bank Details')){
    esaChangeBankDetails ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Family Unit')){
    esaChangeFamilyUnit ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Medical Condition')){
    esaChangeMedicalCondition ='';
    esaCoc='';
  }

  var esaLoe = 'govuk-visually-hidden';
  var esaLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['esa-loe'] && req.session.data['esa-loe'].includes('LoE Request')){
    esaLoeRequest ='';
    esaLoe='';
  }

  var esaGeneral = 'govuk-visually-hidden';
  var esaMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var esaJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var esaGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Medical Evidence Enquiry')){
    esaMedicalEvidenceEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Jobcentre Appointment or Enquiry')){
    esaJobcentreAppointmentEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('General Enquiry')){
    esaGeneralEnquiry ='';
    esaGeneral='';
  }



  //For pip Payment
  var pipPayment ='govuk-visually-hidden';
  var pipMissingPayment = 'govuk-visually-hidden';
  var pipNextPaymentDate = 'govuk-visually-hidden';
  var pipNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Date')){
    pipNextPaymentDate ='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Amount')){
    pipNextPaymentAmount='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Missing Payment')){
    pipMissingPayment='';
    pipPayment='';
  }

  //For pip Process Chasing
  var pipProcessChasing = 'govuk-visually-hidden';
  var pipNewClaim = 'govuk-visually-hidden';
  var pipClaimClosureContact = 'govuk-visually-hidden';
  var pipExplanation = 'govuk-visually-hidden';
  var pipAppealReconsiSupSOS = 'govuk-visually-hidden';
  var pipInterventionsPlanned = 'govuk-visually-hidden';
  var pipInterventionsUnplanned = 'govuk-visually-hidden';
  var pipSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('New Claim')){
    pipNewClaim ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Claim Closure Contact')){
    pipClaimClosureContact ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Explanation')){
    pipExplanation ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    pipAppealReconsiSupSOS ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    pipInterventionsPlanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    pipInterventionsUnplanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    pipSevereDisablementPremium ='';
    pipProcessChasing='';
  }

  var pipCoc = 'govuk-visually-hidden';
  var pipSpcAccAdmis = 'govuk-visually-hidden';
  var pipChangeofAddress = 'govuk-visually-hidden';
  var pipChangeHospitalStatus = 'govuk-visually-hidden';
  var pipSavingsInvestments = 'govuk-visually-hidden';
  var pipChangeCarerStatus = 'govuk-visually-hidden';
  var pipCareHomeAdmission = 'govuk-visually-hidden';
  var pipChangesEarnings = 'govuk-visually-hidden';
  var pipChangeBankDetails = 'govuk-visually-hidden';
  var pipChangeFamilyUnit = 'govuk-visually-hidden';
  var pipChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Special Accommodation Admission/Discharge')){
    pipSpcAccAdmis ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change of Address')){
    pipChangeofAddress ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Hospital Status')){
    pipChangeHospitalStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Savings and Investments')){
    pipSavingsInvestments ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Carer’s Status')){
    pipChangeCarerStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Care Home Admission')){
    pipCareHomeAdmission ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Changes to Earnings')){
    pipChangesEarnings ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Bank Details')){
    pipChangeBankDetails ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Family Unit')){
    pipChangeFamilyUnit ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Medical Condition')){
    pipChangeMedicalCondition ='';
    pipCoc='';
  }

  var pipLoe = 'govuk-visually-hidden';
  var pipLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['pip-loe'] && req.session.data['pip-loe'].includes('LoE Request')){
    pipLoeRequest ='';
    pipLoe='';
  }

  var pipGeneral = 'govuk-visually-hidden';
  var pipMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var pipJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var pipGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Medical Evidence Enquiry')){
    pipMedicalEvidenceEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Jobcentre Appointment or Enquiry')){
    pipJobcentreAppointmentEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('General Enquiry')){
    pipGeneralEnquiry ='';
    pipGeneral='';
  }


  //For ca
  var caPayment ='govuk-visually-hidden';
  var caMissingPayment = 'govuk-visually-hidden';
  var caNextPaymentDate = 'govuk-visually-hidden';
  var caNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Date')){
    caNextPaymentDate ='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Amount')){
    caNextPaymentAmount='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Missing Payment')){
    caMissingPayment='';
    caPayment='';
  }

  //For pip Process Chasing
  var caProcessChasing = 'govuk-visually-hidden';
  var caNewClaim = 'govuk-visually-hidden';
  var caClaimClosureContact = 'govuk-visually-hidden';
  var caExplanation = 'govuk-visually-hidden';
  var caAppealReconsiSupSOS = 'govuk-visually-hidden';
  var caInterventionsPlanned = 'govuk-visually-hidden';
  var caInterventionsUnplanned = 'govuk-visually-hidden';
  var caSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('New Claim')){
    caNewClaim ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Claim Closure Contact')){
    caClaimClosureContact ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Explanation')){
    caExplanation ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    caAppealReconsiSupSOS ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    caInterventionsPlanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    caInterventionsUnplanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    caSevereDisablementPremium ='';
    caProcessChasing='';
  }

  var caCoc = 'govuk-visually-hidden';
  var caSpcAccAdmis = 'govuk-visually-hidden';
  var caChangeofAddress = 'govuk-visually-hidden';
  var caChangeHospitalStatus = 'govuk-visually-hidden';
  var caSavingsInvestments = 'govuk-visually-hidden';
  var caChangeCarerStatus = 'govuk-visually-hidden';
  var caCareHomeAdmission = 'govuk-visually-hidden';
  var caChangesEarnings = 'govuk-visually-hidden';
  var caChangeBankDetails = 'govuk-visually-hidden';
  var caChangeFamilyUnit = 'govuk-visually-hidden';
  var caChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Special Accommodation Admission/Discharge')){
    caSpcAccAdmis ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change of Address')){
    caChangeofAddress ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Hospital Status')){
    caChangeHospitalStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Savings and Investments')){
    caSavingsInvestments ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Carer’s Status')){
    caChangeCarerStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Care Home Admission')){
    caCareHomeAdmission ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Changes to Earnings')){
    caChangesEarnings ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Bank Details')){
    caChangeBankDetails ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Family Unit')){
    caChangeFamilyUnit ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Medical Condition')){
    caChangeMedicalCondition ='';
    caCoc='';
  }

  var caLoe = 'govuk-visually-hidden';
  var caLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['ca-loe'] && req.session.data['ca-loe'].includes('LoE Request')){
    caLoeRequest ='';
    caLoe='';
  }

  var caGeneral = 'govuk-visually-hidden';
  var caMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var caJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var caGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Medical Evidence Enquiry')){
    caMedicalEvidenceEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Jobcentre Appointment or Enquiry')){
    caJobcentreAppointmentEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('General Enquiry')){
    caGeneralEnquiry ='';
    caGeneral='';
  }


  res.render('sprint13/engagement-log-journey/outcome-queries',{

    "isEsa":isEsa,
    "isPip":isPip,
    "isCa":isCa,

    //For esa
    "esaPayment":esaPayment,
    "esaNextPaymentDate":esaNextPaymentDate,
    "esaNextPaymentAmount":esaNextPaymentAmount,
    "esaMissingPayment":esaMissingPayment,
    //processing chasing
    "esaProcessChasing":esaProcessChasing,
    "esaNewClaim":esaNewClaim,
    "esaClaimClosureContact":esaClaimClosureContact,
    "esaExplanation":esaExplanation,
    "esaAppealReconsiSupSOS":esaAppealReconsiSupSOS,
    "esaInterventionsPlanned":esaInterventionsPlanned,
    "esaInterventionsUnplanned":esaInterventionsUnplanned,
    "esaSevereDisablementPremium":esaSevereDisablementPremium,
    //coc
    "esaCoc":esaCoc,
    "esaSpcAccAdmis":esaSpcAccAdmis,
    "esaChangeofAddress":esaChangeofAddress,
    "esaChangeHospitalStatus":esaChangeHospitalStatus,
    "esaSavingsInvestments":esaSavingsInvestments,
    "esaChangeCarerStatus":esaChangeCarerStatus,
    "esaCareHomeAdmission":esaCareHomeAdmission,
    "esaChangesEarnings":esaChangesEarnings,
    "esaChangeBankDetails":esaChangeBankDetails,
    "esaChangeFamilyUnit":esaChangeFamilyUnit,
    "esaChangeMedicalCondition":esaChangeMedicalCondition,
    //loe
    "esaLoe":esaLoe,
    "esaLoeRequest":esaLoeRequest,
    //general
    "esaGeneral":esaGeneral,
    "esaMedicalEvidenceEnquiry":esaMedicalEvidenceEnquiry,
    "esaJobcentreAppointmentEnquiry":esaJobcentreAppointmentEnquiry,
    "esaGeneralEnquiry":esaGeneralEnquiry,


    //For pip
    "pipPayment":pipPayment,
    "pipNextPaymentDate":pipNextPaymentDate,
    "pipNextPaymentAmount":pipNextPaymentAmount,
    "pipMissingPayment":pipMissingPayment,
    //processing chasing
    "pipProcessChasing":pipProcessChasing,
    "pipNewClaim":pipNewClaim,
    "pipClaimClosureContact":pipClaimClosureContact,
    "pipExplanation":pipExplanation,
    "pipAppealReconsiSupSOS":pipAppealReconsiSupSOS,
    "pipInterventionsPlanned":pipInterventionsPlanned,
    "pipInterventionsUnplanned":pipInterventionsUnplanned,
    "pipSevereDisablementPremium":pipSevereDisablementPremium,
    //coc
    "pipCoc":pipCoc,
    "pipSpcAccAdmis":pipSpcAccAdmis,
    "pipChangeofAddress":pipChangeofAddress,
    "pipChangeHospitalStatus":pipChangeHospitalStatus,
    "pipSavingsInvestments":pipSavingsInvestments,
    "pipChangeCarerStatus":pipChangeCarerStatus,
    "pipCareHomeAdmission":pipCareHomeAdmission,
    "pipChangesEarnings":pipChangesEarnings,
    "pipChangeBankDetails":pipChangeBankDetails,
    "pipChangeFamilyUnit":pipChangeFamilyUnit,
    "pipChangeMedicalCondition":pipChangeMedicalCondition,
    //loe
    "pipLoe":pipLoe,
    "pipLoeRequest":pipLoeRequest,
    //general
    "pipGeneral":pipGeneral,
    "pipMedicalEvidenceEnquiry":pipMedicalEvidenceEnquiry,
    "pipJobcentreAppointmentEnquiry":pipJobcentreAppointmentEnquiry,
    "pipGeneralEnquiry":pipGeneralEnquiry,


    //For ca
    "caPayment":caPayment,
    "caNextPaymentDate":caNextPaymentDate,
    "caNextPaymentAmount":caNextPaymentAmount,
    "caMissingPayment":caMissingPayment,
    //processing chasing
    "caProcessChasing":caProcessChasing,
    "caNewClaim":caNewClaim,
    "caClaimClosureContact":caClaimClosureContact,
    "caExplanation":caExplanation,
    "caAppealReconsiSupSOS":caAppealReconsiSupSOS,
    "caInterventionsPlanned":caInterventionsPlanned,
    "caInterventionsUnplanned":caInterventionsUnplanned,
    "caSevereDisablementPremium":caSevereDisablementPremium,
    //coc
    "caCoc":caCoc,
    "caSpcAccAdmis":caSpcAccAdmis,
    "caChangeofAddress":caChangeofAddress,
    "caChangeHospitalStatus":caChangeHospitalStatus,
    "caSavingsInvestments":caSavingsInvestments,
    "caChangeCarerStatus":caChangeCarerStatus,
    "caCareHomeAdmission":caCareHomeAdmission,
    "caChangesEarnings":caChangesEarnings,
    "caChangeBankDetails":caChangeBankDetails,
    "caChangeFamilyUnit":caChangeFamilyUnit,
    "caChangeMedicalCondition":caChangeMedicalCondition,
    //loe
    "caLoe":caLoe,
    "caLoeRequest":caLoeRequest,
    //general
    "caGeneral":caGeneral,
    "caMedicalEvidenceEnquiry":caMedicalEvidenceEnquiry,
    "caJobcentreAppointmentEnquiry":caJobcentreAppointmentEnquiry,
    "caGeneralEnquiry":caGeneralEnquiry

  });
});



// this is all about opt1

// this is for NINO number
router.post('/sprint13/opt1/engagement-type', function (req, res) {

req.session.data['What-type-of-engagement-is-it']='';
  req.session.data['Who-is-the-engagement-with']='';
  req.session.data['Do-you-want-to-complete-the-session']='';
  req.session.data['What-services-have-they-called-about']='';
  req.session.data['esaPayment']='';
  req.session.data['pipPayment']='';
  req.session.data['caPayment']='';
  req.session.data['ca-payment']='';
  req.session.data['esa-payment']='';
  req.session.data['pip-payment']='';
  req.session.data['esa-process-chasing']='';
  req.session.data['pip-process-chasing']='';
  req.session.data['ca-process-chasing']='';
  req.session.data['esa-coc']='';
  req.session.data['pip-coc']='';
  req.session.data['ca-coc']='';
  req.session.data['esa-general']='';
  req.session.data['pip-general']='';
  req.session.data['ca-general']='';

  if (req.session.data['national-insurance-number'] == 'QQ123456Q'){
  // Send user to next page
  res.render('sprint13/opt1/engagement-type')
} else {
    var errMsg = "";
  if (req.session.data['national-insurance-number'] == '' || req.session.data['national-insurance-number'] == undefined){
    errMsg ="National Insurance Number is mandatory";
  }else{
    errMsg ="Enter a National Insurance number in the correct format";
  }
  // Send user to error page
  res.render('sprint13/opt1/error-NINO-number',{"errMsg":errMsg});
}
})


// this is for radio selection
router.post('/sprint13/opt1/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls== "Outgoing telephone call"){
    // Send user to next page
    res.redirect('/sprint13/opt1/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it']='';
    // Send user back to same page
    res.redirect('back');
  }

})


router.post('/sprint13/opt1/home-page-first-time', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  if (req.session.data['Who-is-the-engagement-with'] == "Christopher Fox"|| req.session.data['Who-is-the-engagement-with'] =="Jane Doe") {
    // Send user to next page
    req.session.data['Who-is-the-engagement-with'] = "with "+req.session.data['Who-is-the-engagement-with'];
    res.redirect('/sprint13/opt1/home-page-first-time');
  } else {
    // Send user back to same page
    // res.redirect('/sprint13/opt1/wrong-option-selected');
    req.session.data['Who-is-the-engagement-with'] ='';
    res.redirect('back');
  }

})

router.post('/sprint13/opt1/engagement-log-journey/confirmation-complete-session.html',function(req,res){
  res.redirect('/sprint13/opt1/engagement-log-journey/confirmation-complete-session');
});

// this is for radio selection
router.post('/sprint13/opt1/engagement-log-journey/what-service-called-about', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['Do-you-want-to-complete-the-session']

  // Check whether the variable matches a condition
  if (howManyBalls == "Yes"){
    // Send user to next page
    res.redirect('/sprint13/opt1/engagement-log-journey/what-service-called-about');
  } else {
    // Send user back to same page
    // res.redirect('back');
    res.redirect('/sprint13/opt1/home-page');
  }

});


router.post('/sprint27/opt1/engagement-log-journey/benefitPages',function (req,res){
  var pageLength = '';
  var isEsa = req.session.data['What-services-have-they-called-about'].includes('esa');
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 1 of 2';
  }else{
    pageLength='Services 1 of 3';
  }

  if(isEsa && isPip){
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-ESA',{
        "nextUrl":'/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',
        "pageLength":pageLength
    });
  }
  if(isEsa && isCa && !isPip){
    // console.log('considition executed isEsa && isCa && !isPip');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isEsa && !isPip && !isCa){
    // console.log('considition executed isEsa && !isPip && !isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && !isPip && isCa){
    // console.log('considition executed !isEsa && !isPip && isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});


router.post('/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',function (req,res){
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  if(isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt1/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});

router.post('/sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',function (req,res){
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  res.render('sprint13/opt1/engagement-log-journey/what-queries-dealt-with-CA',{
    "pageLength":pageLength
  });
});


router.post('/sprint13/opt1/engagement-log-journey/outcome-queries',function (req,res){

  // console.log('Value of the data outcome route:--------------->',req.session.data);
  var isEsa = 'govuk-visually-hidden';
  var isPip = 'govuk-visually-hidden';
  var isCa = 'govuk-visually-hidden';
  if(req.session.data['What-services-have-they-called-about'].includes('esa')){
    isEsa ='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('pip')){
    isPip='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('ca')){
    isCa='';
  }
  //For esa Payment
  var esaPayment ='govuk-visually-hidden';
  var esaMissingPayment = 'govuk-visually-hidden';
  var esaNextPaymentDate = 'govuk-visually-hidden';
  var esaNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Date')){
    esaNextPaymentDate ='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Amount')){
    esaNextPaymentAmount='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Missing Payment')){
    esaMissingPayment='';
    esaPayment='';
  }

  //For esa Process Chasing
  var esaProcessChasing = 'govuk-visually-hidden';
  var esaNewClaim = 'govuk-visually-hidden';
  var esaClaimClosureContact = 'govuk-visually-hidden';
  var esaExplanation = 'govuk-visually-hidden';
  var esaAppealReconsiSupSOS = 'govuk-visually-hidden';
  var esaInterventionsPlanned = 'govuk-visually-hidden';
  var esaInterventionsUnplanned = 'govuk-visually-hidden';
  var esaSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('New Claim')){
    esaNewClaim ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Claim Closure Contact')){
    esaClaimClosureContact ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Explanation')){
    esaExplanation ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    esaAppealReconsiSupSOS ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    esaInterventionsPlanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    esaInterventionsUnplanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    esaSevereDisablementPremium ='';
    esaProcessChasing='';
  }

  var esaCoc = 'govuk-visually-hidden';
  var esaSpcAccAdmis = 'govuk-visually-hidden';
  var esaChangeofAddress = 'govuk-visually-hidden';
  var esaChangeHospitalStatus = 'govuk-visually-hidden';
  var esaSavingsInvestments = 'govuk-visually-hidden';
  var esaChangeCarerStatus = 'govuk-visually-hidden';
  var esaCareHomeAdmission = 'govuk-visually-hidden';
  var esaChangesEarnings = 'govuk-visually-hidden';
  var esaChangeBankDetails = 'govuk-visually-hidden';
  var esaChangeFamilyUnit = 'govuk-visually-hidden';
  var esaChangeMedicalCondition = 'govuk-visually-hidden';
  //For esa CoC
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Special Accommodation Admission/Discharge')){
    esaSpcAccAdmis ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change of Address')){
    esaChangeofAddress ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Hospital Status')){
    esaChangeHospitalStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Savings and Investments')){
    esaSavingsInvestments ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Carer’s Status')){
    esaChangeCarerStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Care Home Admission')){
    esaCareHomeAdmission ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Changes to Earnings')){
    esaChangesEarnings ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Bank Details')){
    esaChangeBankDetails ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Family Unit')){
    esaChangeFamilyUnit ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Medical Condition')){
    esaChangeMedicalCondition ='';
    esaCoc='';
  }

  var esaLoe = 'govuk-visually-hidden';
  var esaLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['esa-loe'] && req.session.data['esa-loe'].includes('LoE Request')){
    esaLoeRequest ='';
    esaLoe='';
  }

  var esaGeneral = 'govuk-visually-hidden';
  var esaMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var esaJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var esaGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Medical Evidence Enquiry')){
    esaMedicalEvidenceEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Jobcentre Appointment or Enquiry')){
    esaJobcentreAppointmentEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('General Enquiry')){
    esaGeneralEnquiry ='';
    esaGeneral='';
  }



  //For pip Payment
  var pipPayment ='govuk-visually-hidden';
  var pipMissingPayment = 'govuk-visually-hidden';
  var pipNextPaymentDate = 'govuk-visually-hidden';
  var pipNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Date')){
    pipNextPaymentDate ='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Amount')){
    pipNextPaymentAmount='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Missing Payment')){
    pipMissingPayment='';
    pipPayment='';
  }

  //For pip Process Chasing
  var pipProcessChasing = 'govuk-visually-hidden';
  var pipNewClaim = 'govuk-visually-hidden';
  var pipClaimClosureContact = 'govuk-visually-hidden';
  var pipExplanation = 'govuk-visually-hidden';
  var pipAppealReconsiSupSOS = 'govuk-visually-hidden';
  var pipInterventionsPlanned = 'govuk-visually-hidden';
  var pipInterventionsUnplanned = 'govuk-visually-hidden';
  var pipSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('New Claim')){
    pipNewClaim ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Claim Closure Contact')){
    pipClaimClosureContact ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Explanation')){
    pipExplanation ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    pipAppealReconsiSupSOS ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    pipInterventionsPlanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    pipInterventionsUnplanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    pipSevereDisablementPremium ='';
    pipProcessChasing='';
  }

  var pipCoc = 'govuk-visually-hidden';
  var pipSpcAccAdmis = 'govuk-visually-hidden';
  var pipChangeofAddress = 'govuk-visually-hidden';
  var pipChangeHospitalStatus = 'govuk-visually-hidden';
  var pipSavingsInvestments = 'govuk-visually-hidden';
  var pipChangeCarerStatus = 'govuk-visually-hidden';
  var pipCareHomeAdmission = 'govuk-visually-hidden';
  var pipChangesEarnings = 'govuk-visually-hidden';
  var pipChangeBankDetails = 'govuk-visually-hidden';
  var pipChangeFamilyUnit = 'govuk-visually-hidden';
  var pipChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Special Accommodation Admission/Discharge')){
    pipSpcAccAdmis ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change of Address')){
    pipChangeofAddress ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Hospital Status')){
    pipChangeHospitalStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Savings and Investments')){
    pipSavingsInvestments ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Carer’s Status')){
    pipChangeCarerStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Care Home Admission')){
    pipCareHomeAdmission ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Changes to Earnings')){
    pipChangesEarnings ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Bank Details')){
    pipChangeBankDetails ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Family Unit')){
    pipChangeFamilyUnit ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Medical Condition')){
    pipChangeMedicalCondition ='';
    pipCoc='';
  }

  var pipLoe = 'govuk-visually-hidden';
  var pipLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['pip-loe'] && req.session.data['pip-loe'].includes('LoE Request')){
    pipLoeRequest ='';
    pipLoe='';
  }

  var pipGeneral = 'govuk-visually-hidden';
  var pipMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var pipJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var pipGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Medical Evidence Enquiry')){
    pipMedicalEvidenceEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Jobcentre Appointment or Enquiry')){
    pipJobcentreAppointmentEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('General Enquiry')){
    pipGeneralEnquiry ='';
    pipGeneral='';
  }


  //For ca
  var caPayment ='govuk-visually-hidden';
  var caMissingPayment = 'govuk-visually-hidden';
  var caNextPaymentDate = 'govuk-visually-hidden';
  var caNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Date')){
    caNextPaymentDate ='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Amount')){
    caNextPaymentAmount='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Missing Payment')){
    caMissingPayment='';
    caPayment='';
  }

  //For pip Process Chasing
  var caProcessChasing = 'govuk-visually-hidden';
  var caNewClaim = 'govuk-visually-hidden';
  var caClaimClosureContact = 'govuk-visually-hidden';
  var caExplanation = 'govuk-visually-hidden';
  var caAppealReconsiSupSOS = 'govuk-visually-hidden';
  var caInterventionsPlanned = 'govuk-visually-hidden';
  var caInterventionsUnplanned = 'govuk-visually-hidden';
  var caSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('New Claim')){
    caNewClaim ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Claim Closure Contact')){
    caClaimClosureContact ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Explanation')){
    caExplanation ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    caAppealReconsiSupSOS ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    caInterventionsPlanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    caInterventionsUnplanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    caSevereDisablementPremium ='';
    caProcessChasing='';
  }

  var caCoc = 'govuk-visually-hidden';
  var caSpcAccAdmis = 'govuk-visually-hidden';
  var caChangeofAddress = 'govuk-visually-hidden';
  var caChangeHospitalStatus = 'govuk-visually-hidden';
  var caSavingsInvestments = 'govuk-visually-hidden';
  var caChangeCarerStatus = 'govuk-visually-hidden';
  var caCareHomeAdmission = 'govuk-visually-hidden';
  var caChangesEarnings = 'govuk-visually-hidden';
  var caChangeBankDetails = 'govuk-visually-hidden';
  var caChangeFamilyUnit = 'govuk-visually-hidden';
  var caChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Special Accommodation Admission/Discharge')){
    caSpcAccAdmis ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change of Address')){
    caChangeofAddress ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Hospital Status')){
    caChangeHospitalStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Savings and Investments')){
    caSavingsInvestments ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Carer’s Status')){
    caChangeCarerStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Care Home Admission')){
    caCareHomeAdmission ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Changes to Earnings')){
    caChangesEarnings ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Bank Details')){
    caChangeBankDetails ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Family Unit')){
    caChangeFamilyUnit ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Medical Condition')){
    caChangeMedicalCondition ='';
    caCoc='';
  }

  var caLoe = 'govuk-visually-hidden';
  var caLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['ca-loe'] && req.session.data['ca-loe'].includes('LoE Request')){
    caLoeRequest ='';
    caLoe='';
  }

  var caGeneral = 'govuk-visually-hidden';
  var caMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var caJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var caGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Medical Evidence Enquiry')){
    caMedicalEvidenceEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Jobcentre Appointment or Enquiry')){
    caJobcentreAppointmentEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('General Enquiry')){
    caGeneralEnquiry ='';
    caGeneral='';
  }


  res.render('sprint13/opt1/engagement-log-journey/outcome-queries',{

    "isEsa":isEsa,
    "isPip":isPip,
    "isCa":isCa,

    //For esa
    "esaPayment":esaPayment,
    "esaNextPaymentDate":esaNextPaymentDate,
    "esaNextPaymentAmount":esaNextPaymentAmount,
    "esaMissingPayment":esaMissingPayment,
    //processing chasing
    "esaProcessChasing":esaProcessChasing,
    "esaNewClaim":esaNewClaim,
    "esaClaimClosureContact":esaClaimClosureContact,
    "esaExplanation":esaExplanation,
    "esaAppealReconsiSupSOS":esaAppealReconsiSupSOS,
    "esaInterventionsPlanned":esaInterventionsPlanned,
    "esaInterventionsUnplanned":esaInterventionsUnplanned,
    "esaSevereDisablementPremium":esaSevereDisablementPremium,
    //coc
    "esaCoc":esaCoc,
    "esaSpcAccAdmis":esaSpcAccAdmis,
    "esaChangeofAddress":esaChangeofAddress,
    "esaChangeHospitalStatus":esaChangeHospitalStatus,
    "esaSavingsInvestments":esaSavingsInvestments,
    "esaChangeCarerStatus":esaChangeCarerStatus,
    "esaCareHomeAdmission":esaCareHomeAdmission,
    "esaChangesEarnings":esaChangesEarnings,
    "esaChangeBankDetails":esaChangeBankDetails,
    "esaChangeFamilyUnit":esaChangeFamilyUnit,
    "esaChangeMedicalCondition":esaChangeMedicalCondition,
    //loe
    "esaLoe":esaLoe,
    "esaLoeRequest":esaLoeRequest,
    //general
    "esaGeneral":esaGeneral,
    "esaMedicalEvidenceEnquiry":esaMedicalEvidenceEnquiry,
    "esaJobcentreAppointmentEnquiry":esaJobcentreAppointmentEnquiry,
    "esaGeneralEnquiry":esaGeneralEnquiry,


    //For pip
    "pipPayment":pipPayment,
    "pipNextPaymentDate":pipNextPaymentDate,
    "pipNextPaymentAmount":pipNextPaymentAmount,
    "pipMissingPayment":pipMissingPayment,
    //processing chasing
    "pipProcessChasing":pipProcessChasing,
    "pipNewClaim":pipNewClaim,
    "pipClaimClosureContact":pipClaimClosureContact,
    "pipExplanation":pipExplanation,
    "pipAppealReconsiSupSOS":pipAppealReconsiSupSOS,
    "pipInterventionsPlanned":pipInterventionsPlanned,
    "pipInterventionsUnplanned":pipInterventionsUnplanned,
    "pipSevereDisablementPremium":pipSevereDisablementPremium,
    //coc
    "pipCoc":pipCoc,
    "pipSpcAccAdmis":pipSpcAccAdmis,
    "pipChangeofAddress":pipChangeofAddress,
    "pipChangeHospitalStatus":pipChangeHospitalStatus,
    "pipSavingsInvestments":pipSavingsInvestments,
    "pipChangeCarerStatus":pipChangeCarerStatus,
    "pipCareHomeAdmission":pipCareHomeAdmission,
    "pipChangesEarnings":pipChangesEarnings,
    "pipChangeBankDetails":pipChangeBankDetails,
    "pipChangeFamilyUnit":pipChangeFamilyUnit,
    "pipChangeMedicalCondition":pipChangeMedicalCondition,
    //loe
    "pipLoe":pipLoe,
    "pipLoeRequest":pipLoeRequest,
    //general
    "pipGeneral":pipGeneral,
    "pipMedicalEvidenceEnquiry":pipMedicalEvidenceEnquiry,
    "pipJobcentreAppointmentEnquiry":pipJobcentreAppointmentEnquiry,
    "pipGeneralEnquiry":pipGeneralEnquiry,


    //For ca
    "caPayment":caPayment,
    "caNextPaymentDate":caNextPaymentDate,
    "caNextPaymentAmount":caNextPaymentAmount,
    "caMissingPayment":caMissingPayment,
    //processing chasing
    "caProcessChasing":caProcessChasing,
    "caNewClaim":caNewClaim,
    "caClaimClosureContact":caClaimClosureContact,
    "caExplanation":caExplanation,
    "caAppealReconsiSupSOS":caAppealReconsiSupSOS,
    "caInterventionsPlanned":caInterventionsPlanned,
    "caInterventionsUnplanned":caInterventionsUnplanned,
    "caSevereDisablementPremium":caSevereDisablementPremium,
    //coc
    "caCoc":caCoc,
    "caSpcAccAdmis":caSpcAccAdmis,
    "caChangeofAddress":caChangeofAddress,
    "caChangeHospitalStatus":caChangeHospitalStatus,
    "caSavingsInvestments":caSavingsInvestments,
    "caChangeCarerStatus":caChangeCarerStatus,
    "caCareHomeAdmission":caCareHomeAdmission,
    "caChangesEarnings":caChangesEarnings,
    "caChangeBankDetails":caChangeBankDetails,
    "caChangeFamilyUnit":caChangeFamilyUnit,
    "caChangeMedicalCondition":caChangeMedicalCondition,
    //loe
    "caLoe":caLoe,
    "caLoeRequest":caLoeRequest,
    //general
    "caGeneral":caGeneral,
    "caMedicalEvidenceEnquiry":caMedicalEvidenceEnquiry,
    "caJobcentreAppointmentEnquiry":caJobcentreAppointmentEnquiry,
    "caGeneralEnquiry":caGeneralEnquiry

  });
});

// This is all about opt2

// this is for NINO number
router.post('/sprint13/opt2/engagement-type', function (req, res) {

req.session.data['What-type-of-engagement-is-it']='';
  req.session.data['Who-is-the-engagement-with']='';
  req.session.data['Do-you-want-to-complete-the-session']='';
  req.session.data['What-services-have-they-called-about']='';
  req.session.data['esaPayment']='';
  req.session.data['pipPayment']='';
  req.session.data['caPayment']='';
  req.session.data['ca-payment']='';
  req.session.data['esa-payment']='';
  req.session.data['pip-payment']='';
  req.session.data['esa-process-chasing']='';
  req.session.data['pip-process-chasing']='';
  req.session.data['ca-process-chasing']='';
  req.session.data['esa-coc']='';
  req.session.data['pip-coc']='';
  req.session.data['ca-coc']='';
  req.session.data['esa-general']='';
  req.session.data['pip-general']='';
  req.session.data['ca-general']='';

  if (req.session.data['national-insurance-number'] == 'QQ123456Q'){
  // Send user to next page
  res.render('sprint13/opt2/engagement-type')
} else {
    var errMsg = "";
  if (req.session.data['national-insurance-number'] == '' || req.session.data['national-insurance-number'] == undefined){
    errMsg ="National Insurance Number is mandatory";
  }else{
    errMsg ="Enter a National Insurance number in the correct format";
  }
  // Send user to error page
  res.render('sprint13/opt2/error-NINO-number',{"errMsg":errMsg});
}
})


// this is for radio selection
router.post('/sprint13/opt2/engagement-with', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls== "Outgoing telephone call"){
    // Send user to next page
    res.redirect('/sprint13/opt2/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it']='';
    // Send user back to same page
    res.redirect('back');
  }

})


router.post('/sprint13/opt2/home-page-first-time', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  if (req.session.data['Who-is-the-engagement-with'] == "Christopher Fox"|| req.session.data['Who-is-the-engagement-with'] =="Jane Doe") {
    // Send user to next page
    req.session.data['Who-is-the-engagement-with'] = "with "+req.session.data['Who-is-the-engagement-with'];
    res.redirect('/sprint13/opt2/home-page-first-time');
  } else {
    // Send user back to same page
    // res.redirect('/sprint13/opt2/wrong-option-selected');
    req.session.data['Who-is-the-engagement-with'] ='';
    res.redirect('back');
  }

})

router.post('/sprint13/opt2/engagement-log-journey/confirmation-complete-session.html',function(req,res){
  res.redirect('/sprint13/opt2/engagement-log-journey/confirmation-complete-session');
});

// this is for radio selection
router.post('/sprint13/opt2/engagement-log-journey/what-service-called-about', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['Do-you-want-to-complete-the-session']

  // Check whether the variable matches a condition
  if (howManyBalls == "Yes"){
    // Send user to next page
    res.redirect('/sprint13/opt2/engagement-log-journey/what-service-called-about');
  } else {
    // Send user back to same page
    // res.redirect('back');
    res.redirect('/sprint13/opt2/home-page');
  }

});


router.post('/sprint13/opt2/engagement-log-journey/benefitPages',function (req,res){
  var pageLength = '';
  var isEsa = req.session.data['What-services-have-they-called-about'].includes('esa');
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 1 of 2';
  }else{
    pageLength='Services 1 of 3';
  }

  if(isEsa && isPip){
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-ESA',{
        "nextUrl":'/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',
        "pageLength":pageLength
    });
  }
  if(isEsa && isCa && !isPip){
    // console.log('considition executed isEsa && isCa && !isPip');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isEsa && !isPip && !isCa){
    // console.log('considition executed isEsa && !isPip && !isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-ESA',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(!isEsa && isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
  if(!isEsa && !isPip && isCa){
    // console.log('considition executed !isEsa && !isPip && isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});


router.post('/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',function (req,res){
  var isPip = req.session.data['What-services-have-they-called-about'].includes('pip');
  var isCa = req.session.data['What-services-have-they-called-about'].includes('ca');
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  if(isPip && isCa){
    // console.log('considition executed !isEsa && isPip && isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',
      "pageLength":pageLength
    });
  }
  if(isPip && !isCa){
    // console.log('considition executed !isEsa && isPip && !isCa');
    res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-PIP',{
      "nextUrl":'/sprint13/opt2/engagement-log-journey/outcome-queries',
      "pageLength":pageLength
    });
  }
});

router.post('/sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',function (req,res){
  var pageLength = '';
  if(req.session.data['What-services-have-they-called-about'].length == 1){
    pageLength='Services 1 of 1';
  } else if(req.session.data['What-services-have-they-called-about'].length == 2){
    pageLength='Services 2 of 2';
  }else{
    pageLength='Services 2 of 3';
  }
  res.render('sprint13/opt2/engagement-log-journey/what-queries-dealt-with-CA',{
    "pageLength":pageLength
  });
});


router.post('/sprint13/opt2/engagement-log-journey/outcome-queries',function (req,res){

  // console.log('Value of the data outcome route:--------------->',req.session.data);
  var isEsa = 'govuk-visually-hidden';
  var isPip = 'govuk-visually-hidden';
  var isCa = 'govuk-visually-hidden';
  if(req.session.data['What-services-have-they-called-about'].includes('esa')){
    isEsa ='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('pip')){
    isPip='';
  }
  if(req.session.data['What-services-have-they-called-about'].includes('ca')){
    isCa='';
  }
  //For esa Payment
  var esaPayment ='govuk-visually-hidden';
  var esaMissingPayment = 'govuk-visually-hidden';
  var esaNextPaymentDate = 'govuk-visually-hidden';
  var esaNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Date')){
    esaNextPaymentDate ='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Next Payment Amount')){
    esaNextPaymentAmount='';
    esaPayment='';
  }
  if(req.session.data['esa-payment'] && req.session.data['esa-payment'].includes('Missing Payment')){
    esaMissingPayment='';
    esaPayment='';
  }

  //For esa Process Chasing
  var esaProcessChasing = 'govuk-visually-hidden';
  var esaNewClaim = 'govuk-visually-hidden';
  var esaClaimClosureContact = 'govuk-visually-hidden';
  var esaExplanation = 'govuk-visually-hidden';
  var esaAppealReconsiSupSOS = 'govuk-visually-hidden';
  var esaInterventionsPlanned = 'govuk-visually-hidden';
  var esaInterventionsUnplanned = 'govuk-visually-hidden';
  var esaSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('New Claim')){
    esaNewClaim ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Claim Closure Contact')){
    esaClaimClosureContact ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Explanation')){
    esaExplanation ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    esaAppealReconsiSupSOS ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    esaInterventionsPlanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    esaInterventionsUnplanned ='';
    esaProcessChasing='';
  }
  if(req.session.data['esa-process-chasing'] && req.session.data['esa-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    esaSevereDisablementPremium ='';
    esaProcessChasing='';
  }

  var esaCoc = 'govuk-visually-hidden';
  var esaSpcAccAdmis = 'govuk-visually-hidden';
  var esaChangeofAddress = 'govuk-visually-hidden';
  var esaChangeHospitalStatus = 'govuk-visually-hidden';
  var esaSavingsInvestments = 'govuk-visually-hidden';
  var esaChangeCarerStatus = 'govuk-visually-hidden';
  var esaCareHomeAdmission = 'govuk-visually-hidden';
  var esaChangesEarnings = 'govuk-visually-hidden';
  var esaChangeBankDetails = 'govuk-visually-hidden';
  var esaChangeFamilyUnit = 'govuk-visually-hidden';
  var esaChangeMedicalCondition = 'govuk-visually-hidden';
  //For esa CoC
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Special Accommodation Admission/Discharge')){
    esaSpcAccAdmis ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change of Address')){
    esaChangeofAddress ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Hospital Status')){
    esaChangeHospitalStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Savings and Investments')){
    esaSavingsInvestments ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Carer’s Status')){
    esaChangeCarerStatus ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Care Home Admission')){
    esaCareHomeAdmission ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Changes to Earnings')){
    esaChangesEarnings ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Bank Details')){
    esaChangeBankDetails ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Family Unit')){
    esaChangeFamilyUnit ='';
    esaCoc='';
  }
  if(req.session.data['esa-coc'] && req.session.data['esa-coc'].includes('Change to Medical Condition')){
    esaChangeMedicalCondition ='';
    esaCoc='';
  }

  var esaLoe = 'govuk-visually-hidden';
  var esaLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['esa-loe'] && req.session.data['esa-loe'].includes('LoE Request')){
    esaLoeRequest ='';
    esaLoe='';
  }

  var esaGeneral = 'govuk-visually-hidden';
  var esaMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var esaJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var esaGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Medical Evidence Enquiry')){
    esaMedicalEvidenceEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('Jobcentre Appointment or Enquiry')){
    esaJobcentreAppointmentEnquiry ='';
    esaGeneral='';
  }
  if(req.session.data['esa-general'] && req.session.data['esa-general'].includes('General Enquiry')){
    esaGeneralEnquiry ='';
    esaGeneral='';
  }



  //For pip Payment
  var pipPayment ='govuk-visually-hidden';
  var pipMissingPayment = 'govuk-visually-hidden';
  var pipNextPaymentDate = 'govuk-visually-hidden';
  var pipNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Date')){
    pipNextPaymentDate ='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Next Payment Amount')){
    pipNextPaymentAmount='';
    pipPayment='';
  }
  if(req.session.data['pip-payment'] && req.session.data['pip-payment'].includes('Missing Payment')){
    pipMissingPayment='';
    pipPayment='';
  }

  //For pip Process Chasing
  var pipProcessChasing = 'govuk-visually-hidden';
  var pipNewClaim = 'govuk-visually-hidden';
  var pipClaimClosureContact = 'govuk-visually-hidden';
  var pipExplanation = 'govuk-visually-hidden';
  var pipAppealReconsiSupSOS = 'govuk-visually-hidden';
  var pipInterventionsPlanned = 'govuk-visually-hidden';
  var pipInterventionsUnplanned = 'govuk-visually-hidden';
  var pipSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('New Claim')){
    pipNewClaim ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Claim Closure Contact')){
    pipClaimClosureContact ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Explanation')){
    pipExplanation ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    pipAppealReconsiSupSOS ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    pipInterventionsPlanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    pipInterventionsUnplanned ='';
    pipProcessChasing='';
  }
  if(req.session.data['pip-process-chasing'] && req.session.data['pip-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    pipSevereDisablementPremium ='';
    pipProcessChasing='';
  }

  var pipCoc = 'govuk-visually-hidden';
  var pipSpcAccAdmis = 'govuk-visually-hidden';
  var pipChangeofAddress = 'govuk-visually-hidden';
  var pipChangeHospitalStatus = 'govuk-visually-hidden';
  var pipSavingsInvestments = 'govuk-visually-hidden';
  var pipChangeCarerStatus = 'govuk-visually-hidden';
  var pipCareHomeAdmission = 'govuk-visually-hidden';
  var pipChangesEarnings = 'govuk-visually-hidden';
  var pipChangeBankDetails = 'govuk-visually-hidden';
  var pipChangeFamilyUnit = 'govuk-visually-hidden';
  var pipChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Special Accommodation Admission/Discharge')){
    pipSpcAccAdmis ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change of Address')){
    pipChangeofAddress ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Hospital Status')){
    pipChangeHospitalStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Savings and Investments')){
    pipSavingsInvestments ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Carer’s Status')){
    pipChangeCarerStatus ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Care Home Admission')){
    pipCareHomeAdmission ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Changes to Earnings')){
    pipChangesEarnings ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Bank Details')){
    pipChangeBankDetails ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Family Unit')){
    pipChangeFamilyUnit ='';
    pipCoc='';
  }
  if(req.session.data['pip-coc'] && req.session.data['pip-coc'].includes('Change to Medical Condition')){
    pipChangeMedicalCondition ='';
    pipCoc='';
  }

  var pipLoe = 'govuk-visually-hidden';
  var pipLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['pip-loe'] && req.session.data['pip-loe'].includes('LoE Request')){
    pipLoeRequest ='';
    pipLoe='';
  }

  var pipGeneral = 'govuk-visually-hidden';
  var pipMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var pipJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var pipGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Medical Evidence Enquiry')){
    pipMedicalEvidenceEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('Jobcentre Appointment or Enquiry')){
    pipJobcentreAppointmentEnquiry ='';
    pipGeneral='';
  }
  if(req.session.data['pip-general'] && req.session.data['pip-general'].includes('General Enquiry')){
    pipGeneralEnquiry ='';
    pipGeneral='';
  }


  //For ca
  var caPayment ='govuk-visually-hidden';
  var caMissingPayment = 'govuk-visually-hidden';
  var caNextPaymentDate = 'govuk-visually-hidden';
  var caNextPaymentAmount = 'govuk-visually-hidden';
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Date')){
    caNextPaymentDate ='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Next Payment Amount')){
    caNextPaymentAmount='';
    caPayment='';
  }
  if(req.session.data['ca-payment'] && req.session.data['ca-payment'].includes('Missing Payment')){
    caMissingPayment='';
    caPayment='';
  }

  //For pip Process Chasing
  var caProcessChasing = 'govuk-visually-hidden';
  var caNewClaim = 'govuk-visually-hidden';
  var caClaimClosureContact = 'govuk-visually-hidden';
  var caExplanation = 'govuk-visually-hidden';
  var caAppealReconsiSupSOS = 'govuk-visually-hidden';
  var caInterventionsPlanned = 'govuk-visually-hidden';
  var caInterventionsUnplanned = 'govuk-visually-hidden';
  var caSevereDisablementPremium = 'govuk-visually-hidden';

  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('New Claim')){
    caNewClaim ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Claim Closure Contact')){
    caClaimClosureContact ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Explanation')){
    caExplanation ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Appeal, Reconsideration, Supersessions, SOS')){
    caAppealReconsiSupSOS ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Planned (Award Reviews)')){
    caInterventionsPlanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Interventions - Unplanned (CoC Reviews)')){
    caInterventionsUnplanned ='';
    caProcessChasing='';
  }
  if(req.session.data['ca-process-chasing'] && req.session.data['ca-process-chasing'].includes('Severe Disablement Premium (SDP)')){
    caSevereDisablementPremium ='';
    caProcessChasing='';
  }

  var caCoc = 'govuk-visually-hidden';
  var caSpcAccAdmis = 'govuk-visually-hidden';
  var caChangeofAddress = 'govuk-visually-hidden';
  var caChangeHospitalStatus = 'govuk-visually-hidden';
  var caSavingsInvestments = 'govuk-visually-hidden';
  var caChangeCarerStatus = 'govuk-visually-hidden';
  var caCareHomeAdmission = 'govuk-visually-hidden';
  var caChangesEarnings = 'govuk-visually-hidden';
  var caChangeBankDetails = 'govuk-visually-hidden';
  var caChangeFamilyUnit = 'govuk-visually-hidden';
  var caChangeMedicalCondition = 'govuk-visually-hidden';
  //For pip CoC
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Special Accommodation Admission/Discharge')){
    caSpcAccAdmis ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change of Address')){
    caChangeofAddress ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Hospital Status')){
    caChangeHospitalStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Savings and Investments')){
    caSavingsInvestments ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Carer’s Status')){
    caChangeCarerStatus ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Care Home Admission')){
    caCareHomeAdmission ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Changes to Earnings')){
    caChangesEarnings ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Bank Details')){
    caChangeBankDetails ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Family Unit')){
    caChangeFamilyUnit ='';
    caCoc='';
  }
  if(req.session.data['ca-coc'] && req.session.data['ca-coc'].includes('Change to Medical Condition')){
    caChangeMedicalCondition ='';
    caCoc='';
  }

  var caLoe = 'govuk-visually-hidden';
  var caLoeRequest = 'govuk-visually-hidden';

  if(req.session.data['ca-loe'] && req.session.data['ca-loe'].includes('LoE Request')){
    caLoeRequest ='';
    caLoe='';
  }

  var caGeneral = 'govuk-visually-hidden';
  var caMedicalEvidenceEnquiry = 'govuk-visually-hidden';
  var caJobcentreAppointmentEnquiry = 'govuk-visually-hidden';
  var caGeneralEnquiry = 'govuk-visually-hidden';

  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Medical Evidence Enquiry')){
    caMedicalEvidenceEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('Jobcentre Appointment or Enquiry')){
    caJobcentreAppointmentEnquiry ='';
    caGeneral='';
  }
  if(req.session.data['ca-general'] && req.session.data['ca-general'].includes('General Enquiry')){
    caGeneralEnquiry ='';
    caGeneral='';
  }


  res.render('sprint13/opt2/engagement-log-journey/outcome-queries',{

    "isEsa":isEsa,
    "isPip":isPip,
    "isCa":isCa,

    //For esa
    "esaPayment":esaPayment,
    "esaNextPaymentDate":esaNextPaymentDate,
    "esaNextPaymentAmount":esaNextPaymentAmount,
    "esaMissingPayment":esaMissingPayment,
    //processing chasing
    "esaProcessChasing":esaProcessChasing,
    "esaNewClaim":esaNewClaim,
    "esaClaimClosureContact":esaClaimClosureContact,
    "esaExplanation":esaExplanation,
    "esaAppealReconsiSupSOS":esaAppealReconsiSupSOS,
    "esaInterventionsPlanned":esaInterventionsPlanned,
    "esaInterventionsUnplanned":esaInterventionsUnplanned,
    "esaSevereDisablementPremium":esaSevereDisablementPremium,
    //coc
    "esaCoc":esaCoc,
    "esaSpcAccAdmis":esaSpcAccAdmis,
    "esaChangeofAddress":esaChangeofAddress,
    "esaChangeHospitalStatus":esaChangeHospitalStatus,
    "esaSavingsInvestments":esaSavingsInvestments,
    "esaChangeCarerStatus":esaChangeCarerStatus,
    "esaCareHomeAdmission":esaCareHomeAdmission,
    "esaChangesEarnings":esaChangesEarnings,
    "esaChangeBankDetails":esaChangeBankDetails,
    "esaChangeFamilyUnit":esaChangeFamilyUnit,
    "esaChangeMedicalCondition":esaChangeMedicalCondition,
    //loe
    "esaLoe":esaLoe,
    "esaLoeRequest":esaLoeRequest,
    //general
    "esaGeneral":esaGeneral,
    "esaMedicalEvidenceEnquiry":esaMedicalEvidenceEnquiry,
    "esaJobcentreAppointmentEnquiry":esaJobcentreAppointmentEnquiry,
    "esaGeneralEnquiry":esaGeneralEnquiry,


    //For pip
    "pipPayment":pipPayment,
    "pipNextPaymentDate":pipNextPaymentDate,
    "pipNextPaymentAmount":pipNextPaymentAmount,
    "pipMissingPayment":pipMissingPayment,
    //processing chasing
    "pipProcessChasing":pipProcessChasing,
    "pipNewClaim":pipNewClaim,
    "pipClaimClosureContact":pipClaimClosureContact,
    "pipExplanation":pipExplanation,
    "pipAppealReconsiSupSOS":pipAppealReconsiSupSOS,
    "pipInterventionsPlanned":pipInterventionsPlanned,
    "pipInterventionsUnplanned":pipInterventionsUnplanned,
    "pipSevereDisablementPremium":pipSevereDisablementPremium,
    //coc
    "pipCoc":pipCoc,
    "pipSpcAccAdmis":pipSpcAccAdmis,
    "pipChangeofAddress":pipChangeofAddress,
    "pipChangeHospitalStatus":pipChangeHospitalStatus,
    "pipSavingsInvestments":pipSavingsInvestments,
    "pipChangeCarerStatus":pipChangeCarerStatus,
    "pipCareHomeAdmission":pipCareHomeAdmission,
    "pipChangesEarnings":pipChangesEarnings,
    "pipChangeBankDetails":pipChangeBankDetails,
    "pipChangeFamilyUnit":pipChangeFamilyUnit,
    "pipChangeMedicalCondition":pipChangeMedicalCondition,
    //loe
    "pipLoe":pipLoe,
    "pipLoeRequest":pipLoeRequest,
    //general
    "pipGeneral":pipGeneral,
    "pipMedicalEvidenceEnquiry":pipMedicalEvidenceEnquiry,
    "pipJobcentreAppointmentEnquiry":pipJobcentreAppointmentEnquiry,
    "pipGeneralEnquiry":pipGeneralEnquiry,


    //For ca
    "caPayment":caPayment,
    "caNextPaymentDate":caNextPaymentDate,
    "caNextPaymentAmount":caNextPaymentAmount,
    "caMissingPayment":caMissingPayment,
    //processing chasing
    "caProcessChasing":caProcessChasing,
    "caNewClaim":caNewClaim,
    "caClaimClosureContact":caClaimClosureContact,
    "caExplanation":caExplanation,
    "caAppealReconsiSupSOS":caAppealReconsiSupSOS,
    "caInterventionsPlanned":caInterventionsPlanned,
    "caInterventionsUnplanned":caInterventionsUnplanned,
    "caSevereDisablementPremium":caSevereDisablementPremium,
    //coc
    "caCoc":caCoc,
    "caSpcAccAdmis":caSpcAccAdmis,
    "caChangeofAddress":caChangeofAddress,
    "caChangeHospitalStatus":caChangeHospitalStatus,
    "caSavingsInvestments":caSavingsInvestments,
    "caChangeCarerStatus":caChangeCarerStatus,
    "caCareHomeAdmission":caCareHomeAdmission,
    "caChangesEarnings":caChangesEarnings,
    "caChangeBankDetails":caChangeBankDetails,
    "caChangeFamilyUnit":caChangeFamilyUnit,
    "caChangeMedicalCondition":caChangeMedicalCondition,
    //loe
    "caLoe":caLoe,
    "caLoeRequest":caLoeRequest,
    //general
    "caGeneral":caGeneral,
    "caMedicalEvidenceEnquiry":caMedicalEvidenceEnquiry,
    "caJobcentreAppointmentEnquiry":caJobcentreAppointmentEnquiry,
    "caGeneralEnquiry":caGeneralEnquiry

  });
});


// Add your routes here - above the module.exports line

module.exports = router


// Add your routes here - above the module.exports line

module.exports = router
