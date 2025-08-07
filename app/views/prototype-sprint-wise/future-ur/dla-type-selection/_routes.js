const express = require('express');
const router = express.Router();

// option-a start here

router.post('/option-a/index.html', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['addNote']= '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index');
});

router.post('/option-a/why-checking-information', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['dla-type'] = '';
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/why-checking-info');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

router.post('/option-a/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  

  if (req.session.data['What-type-of-contact'] == 'Telephone call with') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Contact with') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'View only') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/view-only/home');
  }
  if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/what-benefits-discussed');
  }
  if (req.session.data['What-type-of-contact'] == '') {
    console.log('Error page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/error-why-checking-info');
  }
});

router.post('/option-a/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/call-with');
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/home');
  }
});

router.post('/option-a/non-telephony/home', function (req, res) {
  var contactType = req.session.data['Who-is-contact-with'];

  if (req.session.data['Who-is-contact-with'] == '') {
    // Send user to error page
    res.redirect(
      '/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/contact-with'
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
      '/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/home'
    );
  }
});


// new routes for shorten call log - Telephony

router.post('/option-a/add-call/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/do-you-want-add-more-details');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/what-benefits-discussed');
  }
});

router.post('/option-a/add-call/questions-asked', function (req, res) {

    if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') 
    {
      req.session.data['addNote'] = '';
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/add-note-for-failed-outbound');
    } else
    {
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/what-benefits-discussed-error');
    } else if (req.session.data['what-benefit-discussed'] == 'General information') {
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/no-benefit');
    } else {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/questions-asked');
   }
  }
})

router.post('/option-a/add-call/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/questions-answered');
});

router.post('/option-a/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/is-question-resolved');
});

router.post('/option-a/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/added-call-details');
});
 
router.post('/option-a/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/added-details');
  }
});

router.post('/option-a/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/added-details')
});


router.post('/option-a/add-call/add-more-call-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-call-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/call-completed');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index')
  }
  if (addCallDetails == 'Change your note'){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/add-a-note');
  }
});

router.post('/option-a/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    // console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/call-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/home')
  }

});

router.post('/option-a/add-call/do-you-want-to-complete-call', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/do-you-want-to-complete-call');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/add-call/no-contact-added');
  }
});

router.post('/option-a/add-call/check-call-completion', function (req, res) {
  var checkCallCompletion = req.session.data['complete-call'];

  if (checkCallCompletion == 'Yes') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index');
  }
  else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/home');
  }
});

// new routes for shorten call log - Non-Telephony

router.post('/option-a/non-telephony/add-contact/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/do-you-want-add-more-details');
  }
  else{
    // req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/what-benefits-discussed');
  }
});

router.post('/option-a/non-telephony/add-contact/questions-asked', function (req, res) {
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
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/what-benefits-discussed-error');
 } else if (req.session.data['what-benefit-discussed-non-telephony'] == 'General information') {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/no-benefit');
} else {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/questions-asked');
 }
})

router.post('/option-a/non-telephony/add-contact/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/questions-answered');
});

router.post('/option-a/non-telephony/add-contact/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/is-question-resolved');
});

router.post('/option-a/non-telephony/add-contact/added-contact-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/added-contact-details');
});
 
router.post('/option-a/non-telephony/add-contact/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/added-details');
  }
});

router.post('/option-a/non-telephony/add-contact/check-before-start-sercive-again', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] == ''){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/check-before-start-sercive-again');
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/do-you-want-to-complete-contact'); 
  }
});

router.post('/option-a/non-telephony/add-contact/contact-details-added', function (req, res) {
  var addContactDetails = req.session.data['add-contact-Details'];
  if (addContactDetails == 'Yes'){
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/what-benefits-discussed')
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/contact-completed')
  }
});

router.post('/option-a/non-telephony/add-contact/complete-contact', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-contact'];
  if (checkCallCompletion == 'Complete phone contact'){
    console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/home')
  }

});

router.post('/option-a/non-telephony/add-contact/add-more-contact-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    console.log('Add more benefits');
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    console.log('Complete call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index')
  }
  if (addCallDetails == 'Change your note'){
    console.log('Change notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/change-notes')
  }
  if (addCallDetails == 'Add a note'){
    console.log('Add a note');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/add-a-note')
  }
});

router.post('/option-a/non-telephony/add-contact/do-you-want-to-complete-contact', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/added-details')
});

router.post('/option-a/non-telephony/add-contact/contact-details-completed', function (req, res) {
  var addContactDetails = req.session.data['complete-contact'];
  if (addContactDetails == 'Yes'){
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/index')
    
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-a/non-telephony/home')
  }
});



// option b start here


// this is for NINO number
router.post('/option-b/index.html', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['addNote']= '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index');
});

router.post('/option-b/why-checking-information', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['dla-type'] = '';
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/why-checking-info');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

router.post('/option-b/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  

  if (req.session.data['What-type-of-contact'] == 'Telephone call with') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Contact with') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'View only') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/view-only/home');
  }
  if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/what-benefits-discussed');
  }
  if (req.session.data['What-type-of-contact'] == '') {
    console.log('Error page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/error-why-checking-info');
  }
});

router.post('/option-b/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/call-with');
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/home');
  }
});

router.post('/option-b/non-telephony/home', function (req, res) {
  var contactType = req.session.data['Who-is-contact-with'];

  if (req.session.data['Who-is-contact-with'] == '') {
    // Send user to error page
    res.redirect(
      '/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/contact-with'
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
      '/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/home'
    );
  }
});


// new routes for shorten call log - Telephony

router.post('/option-b/add-call/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/do-you-want-add-more-details');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/what-benefits-discussed');
  }
});

router.post('/option-b/add-call/questions-asked', function (req, res) {

  // check if more than one benefit seletect
  if (req.session.data['what-benefit-discussed'].length > 1) {
      console.log('check multiple benefits');
      if(req.session.data['what-benefit-discussed'].includes('Disability Living Allowance') && (req.session.data['dla-type'] == '')) {
      //  else if (req.session.data['dla-type'] == '') {
        console.log('DLA selected but DLA type is not selected');
        res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/select-dla-type');
      } else {
        console.log('multiple benefit selected');
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
        res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/questions-asked');
      }

  }

  if (req.session.data['what-benefit-discussed'].length <= 1)
  {
    // when only one benefit seletect
    console.log('single benefit selected');
    if (req.session.data['what-benefit-discussed'] == 'Disability Living Allowance') {
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/select-dla-type');
    } else
    {
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
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/what-benefits-discussed-error');
      } else if (req.session.data['what-benefit-discussed'] == 'General information') {
        res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/no-benefit');
      } else {
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/questions-asked');
    }
  }
}
})

router.post('/option-b/add-call/asked-query-type', function (req, res) {

    if (req.session.data['What-type-of-contact'] == 'Log a contact attempt') 
    {
      req.session.data['addNote'] = '';
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/add-note-for-failed-outbound');
    } else
    {
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
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/what-benefits-discussed-error');
    } else if (req.session.data['what-benefit-discussed'] == 'General information') {
      res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/no-benefit');
    } else {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/questions-asked');
   }
}
})

router.post('/option-b/add-call/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/questions-answered');
});

router.post('/option-b/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/is-question-resolved');
});

router.post('/option-b/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/added-call-details');
});
 
router.post('/option-b/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/added-details');
  }
});

router.post('/option-b/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/added-details')
});


router.post('/option-b/add-call/add-more-call-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-call-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/call-completed');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index')
  }
  if (addCallDetails == 'Change your note'){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/add-a-note');
  }
});

router.post('/option-b/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    // console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/call-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/home')
  }

});

router.post('/option-b/add-call/do-you-want-to-complete-call', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/do-you-want-to-complete-call');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/add-call/no-contact-added');
  }
});

router.post('/option-b/add-call/check-call-completion', function (req, res) {
  var checkCallCompletion = req.session.data['complete-call'];

  if (checkCallCompletion == 'Yes') {
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index');
  }
  else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/home');
  }
});

// new routes for shorten call log - Non-Telephony

router.post('/option-b/non-telephony/add-contact/what-benefits-discussed', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/do-you-want-add-more-details');
  }
  else{
    // req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/what-benefits-discussed');
  }
});

router.post('/option-b/non-telephony/add-contact/questions-asked', function (req, res) {
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
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/what-benefits-discussed-error');
 } else if (req.session.data['what-benefit-discussed-non-telephony'] == 'General information') {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/no-benefit');
} else {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/questions-asked');
 }
})

router.post('/option-b/non-telephony/add-contact/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/questions-answered');
});

router.post('/option-b/non-telephony/add-contact/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/is-question-resolved');
});

router.post('/option-b/non-telephony/add-contact/added-contact-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/added-contact-details');
});
 
router.post('/option-b/non-telephony/add-contact/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/added-details');
  }
});

router.post('/option-b/non-telephony/add-contact/check-before-start-sercive-again', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] == ''){
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/check-before-start-sercive-again');
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/do-you-want-to-complete-contact'); 
  }
});

router.post('/option-b/non-telephony/add-contact/contact-details-added', function (req, res) {
  var addContactDetails = req.session.data['add-contact-Details'];
  if (addContactDetails == 'Yes'){
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/what-benefits-discussed')
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/contact-completed')
  }
});

router.post('/option-b/non-telephony/add-contact/complete-contact', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-contact'];
  if (checkCallCompletion == 'Complete phone contact'){
    console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/home')
  }

});

router.post('/option-b/non-telephony/add-contact/add-more-contact-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-detail'];
  if (addCallDetails == 'Yes, I want to add'){
    console.log('Add more benefits');
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/what-benefits-discussed')
  }
  if (addCallDetails == 'Complete phone call'){
    console.log('Complete call');
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index')
  }
  if (addCallDetails == 'Change your note'){
    console.log('Change notes');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/change-notes')
  }
  if (addCallDetails == 'Add a note'){
    console.log('Add a note');
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/add-a-note')
  }
});

router.post('/option-b/non-telephony/add-contact/do-you-want-to-complete-contact', function (req, res) {
  res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/added-details')
});

router.post('/option-b/non-telephony/add-contact/contact-details-completed', function (req, res) {
  var addContactDetails = req.session.data['complete-contact'];
  if (addContactDetails == 'Yes'){
    // res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/index')
    
  } else{
    res.redirect('/prototype-sprint-wise/future-ur/dla-type-selection/option-b/non-telephony/home')
  }
});



module.exports = router;
