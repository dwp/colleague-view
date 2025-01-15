const express = require('express');
const router = express.Router();

// this is for NINO number
router.post('/index.html', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['addNote']= '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-sprint-wise/future-ur/index');
});

router.post('/why-checking-information', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['what-benefit-discussed-non-telephony'] = '';
  req.session.data['noBenefitReason'] = '';
  req.session.data['question-asked'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
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
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    res.redirect('/prototype-sprint-wise/future-ur/why-checking-info');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/future-ur/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

// Option B

router.post('/why-checking-info-option-b', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['what-benefit-discussed-non-telephony'] = '';
  req.session.data['noBenefitReason'] = '';
  req.session.data['question-asked'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
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
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    res.redirect('/prototype-sprint-wise/future-ur/why-checking-info-option-b');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/future-ur/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

// Option C

router.post('/why-checking-info-option-c', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['what-benefit-discussed-non-telephony'] = '';
  req.session.data['noBenefitReason'] = '';
  req.session.data['question-asked'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
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
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    res.redirect('/prototype-sprint-wise/future-ur/why-checking-info-option-c');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/future-ur/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

router.post('/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  
  // Phone call conditions
  if (req.session.data['What-type-of-contact'] == 'Inbound phone call with' || req.session.data['What-type-of-contact'] == 'Outbound phone call with') {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }

  // Email conditions
  if (req.session.data['What-type-of-contact'] == 'Inbound letter from' || req.session.data['What-type-of-contact'] == 'Outbound letter to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }

  // Letter condition
  if (req.session.data['What-type-of-contact'] == 'Inbound email from' || req.session.data['What-type-of-contact'] == 'Outbound email to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }

  // Notification condition
  if (req.session.data['What-type-of-contact'] == 'Inbound notification from' || req.session.data['What-type-of-contact'] == 'Outbound notification to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }

// face to face converstaions condition
  if (req.session.data['What-type-of-contact'] == 'Inbound face to face conversation with' || req.session.data['What-type-of-contact'] == 'Outbound face to face conversation with') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }

  // Referal condition
  if (req.session.data['What-type-of-contact'] == 'Inbound referral to' ) {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  // view only
 if (req.session.data['What-type-of-contact'] == 'View only') {
    res.redirect('/prototype-sprint-wise/future-ur/view-only/home');
  }

    // view only
 if (req.session.data['contact-type'] == 'View only') {
  res.redirect('/prototype-sprint-wise/future-ur/view-only/home');
}
  

  // error message
  // if (req.session.data['What-type-of-contact'] == '') {
  //   console.log('Error page');
  //   res.redirect('/prototype-sprint-wise/future-ur/error-why-checking-info');
  // }
});


// checking for validation 
router.post('/call-with-test', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  
// inbound conditions

  if (req.session.data['What-type-of-contact'] == 'Inbound phone call with') {
    if (req.session.data['What-type-of-contact'] == 'Inbound phone call with') {

    } else {
      
    }
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Inbound letter to') {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Inbound email to') {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Inbound notitfation to') {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Inbound face to face converstaions with' ) {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Inbound referral to' ) {
    res.redirect('/prototype-sprint-wise/future-ur/call-with');
  }


// outbound conditions

  if (req.session.data['What-type-of-contact'] == 'Outbound phone call with') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Outbound letter to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Outbound email to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Outbound notitfation to') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Outbound face to face converstaions with') {
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/contact-with');
  }
  // view only
 if (req.session.data['What-type-of-contact'] == 'View only') {
    res.redirect('/prototype-sprint-wise/future-ur/view-only/home');
  }
  // if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') {
  //   res.redirect('/prototype-sprint-wise/future-ur/add-call/what-benefits-discussed');
  // }
  // if (req.session.data['What-type-of-contact'] == '') {
  //   console.log('Error page');
  //   res.redirect('/prototype-sprint-wise/future-ur/error-why-checking-info');
  // }
});

router.post('/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-sprint-wise/future-ur/call-with');
    res.redirect('back');
  } else {
    if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    // var b = "with";
    // req.session.data['Who-is-the-phone-call-with-ur8'] = b + " " + contactType;
    res.redirect('/prototype-sprint-wise/future-ur/home');
  }
});

router.post('/non-telephony/home', function (req, res) {
  var contactType = req.session.data['Who-is-contact-with'];

  if (req.session.data['Who-is-contact-with'] == '') {
    // Send user to error page
    res.redirect(
      '/prototype-sprint-wise/future-ur/non-telephony/contact-with'
    );
  } else {
    if (
      req.session.data['Who-is-contact-with'] == 'someone else' ||
      req.session.data['Who-is-contact-with'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    // var b = "with";
    // req.session.data['Who-is-contact-with'] = b + " " + contactType;
    res.redirect(
      '/prototype-sprint-wise/future-ur/non-telephony/home'
    );
  }
});


// new routes for shorten call log - Telephony

router.post('/add-call/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/add-call/do-you-want-add-more-details');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-sprint-wise/future-ur/add-call/what-benefits-discussed');
  }
});

router.post('/add-call/questions-asked', function (req, res) {

  if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') {
    req.session.data['addNote'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/add-call/add-note-for-failed-outbound');
  } else {

  console.log('Question asked');
  req.session.data['questionAsk'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';
  req.session.data['question-asked'] = '';

  req.session.data['npd_wasQuestionResolved']= '';
  req.session.data['npa_wasQuestionResolved']= '';

  req.session.data['npd_wasQuestionResolved-esa']= '';
  req.session.data['npa_wasQuestionResolved-esa']= '';
  req.session.data['ma_question-resolved-esa']= '';
  req.session.data['chpa_question-resolved-esa']= '';
  req.session.data['othQ_question-resolved-esa']= '';

  req.session.data['npd_wasQuestionResolved-pip']= '';
  req.session.data['npa_wasQuestionResolved-pip']= '';
  req.session.data['ma_question-resolved-pip']= '';
  req.session.data['chpa_question-resolved-pip']= '';
  req.session.data['othQ_question-resolved-pip']= '';

  if (req.session.data['what-benefit-discussed'] == '')
 {
  console.log('Error page');
  res.redirect('/prototype-sprint-wise/future-ur/add-call/what-benefits-discussed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-sprint-wise/future-ur/add-call/no-benefit');
  } else {
  res.redirect('/prototype-sprint-wise/future-ur/add-call/questions-asked');
 }
}
})

router.post('/add-call/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/add-call/questions-answered');
});

router.post('/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/add-call/is-question-resolved');
});

router.post('/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/add-call/added-call-details');
});
 
router.post('/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/add-call/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/add-call/added-details');
  }
});

router.post('/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-sprint-wise/future-ur/add-call/added-details')
});


router.post('/add-call/add-more-call-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-call-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/add-call/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    // res.redirect('/prototype-sprint-wise/future-ur/add-call/call-completed');
    res.redirect('/prototype-sprint-wise/future-ur/index')
  }
  if (addCallDetails == 'Change your note'){
    res.redirect('/prototype-sprint-wise/future-ur/add-call/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    res.redirect('/prototype-sprint-wise/future-ur/add-call/add-a-note');
  }
});

router.post('/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    // console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/add-call/call-completed')
    res.redirect('/prototype-sprint-wise/future-ur/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/home')
  }

});

router.post('/add-call/do-you-want-to-complete-call', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    res.redirect('/prototype-sprint-wise/future-ur/add-call/do-you-want-to-complete-call');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/add-call/no-contact-added');
  }
});

router.post('/add-call/check-call-completion', function (req, res) {
  var checkCallCompletion = req.session.data['complete-call'];

  if (checkCallCompletion == 'Yes') {
    res.redirect('/prototype-sprint-wise/future-ur/index');
  }
  else{
    res.redirect('/prototype-sprint-wise/future-ur/home');
  }
});



// new routes for shorten call log - Non-Telephony

router.post('/non-telephony/add-contact/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/do-you-want-add-more-details');
  }
  else{
    // req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/what-benefits-discussed');
  }
});

router.post('/non-telephony/add-contact/questions-asked', function (req, res) {
  console.log('Question asked');
  req.session.data['questionAsk'] = '';
  req.session.data['questionAsk-esa'] = '';
  req.session.data['questionAsk-pip'] = '';

  req.session.data['addNote']= '';
  req.session.data['npd_wasQuestionResolved']= '';
  req.session.data['npa_wasQuestionResolved']= '';

  req.session.data['npd_wasQuestionResolved-esa']= '';
  req.session.data['npa_wasQuestionResolved-esa']= '';
  req.session.data['ma_question-resolved-esa']= '';
  req.session.data['chpa_question-resolved-esa']= '';
  req.session.data['othQ_question-resolved-esa']= '';

  req.session.data['npd_wasQuestionResolved-pip']= '';
  req.session.data['npa_wasQuestionResolved-pip']= '';
  req.session.data['ma_question-resolved-pip']= '';
  req.session.data['chpa_question-resolved-pip']= '';
  req.session.data['othQ_question-resolved-pip']= '';

  if (req.session.data['what-benefit-discussed-non-telephony'] == '')
 {
  console.log('Error page');
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/what-benefits-discussed-error');
 } else if (req.session.data['what-benefit-discussed-non-telephony'] == 'General information') {
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/no-benefit');
} else {
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/questions-asked');
 }
})

// router.post('/add-call/added-contact-details', function (req, res) {
  
//   res.redirect('/prototype-sprint-wise/future-ur/add-call/added-call-details');
// });

router.post('/non-telephony/add-contact/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/questions-answered');
});

router.post('/non-telephony/add-contact/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/is-question-resolved');
});

router.post('/non-telephony/add-contact/added-contact-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/added-contact-details');
});
 
router.post('/non-telephony/add-contact/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/added-details');
  }
});

router.post('/non-telephony/add-contact/check-before-start-sercive-again', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] == ''){
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/check-before-start-sercive-again');
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/do-you-want-to-complete-contact'); 
  }
});

router.post('/non-telephony/add-contact/contact-details-added', function (req, res) {
  var addContactDetails = req.session.data['add-contact-Details'];
  if (addContactDetails == 'Yes'){
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/what-benefits-discussed')
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/contact-completed')
  }
});

router.post('/non-telephony/add-contact/complete-contact', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-contact'];
  if (checkCallCompletion == 'Complete phone contact'){
    console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/home')
  }

});

router.post('/non-telephony/add-contact/add-more-contact-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    console.log('Add more benefits');
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    console.log('Complete call');
    // res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/index')
  }
  if (addCallDetails == 'Change your note'){
    console.log('Change notes');
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/change-notes')
  }
  if (addCallDetails == 'Add a note'){
    console.log('Add a note');
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/add-a-note')
  }
});

router.post('/non-telephony/add-contact/do-you-want-to-complete-contact', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/added-details')
});



router.post('/non-telephony/add-contact/contact-details-completed', function (req, res) {
  var addContactDetails = req.session.data['complete-contact'];
  if (addContactDetails == 'Yes'){
    // res.redirect('/prototype-sprint-wise/future-ur/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/index')
    
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/non-telephony/home')
  }
});


// hide and show CTA



module.exports = router;
