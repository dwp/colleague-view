const express = require('express');
const router = express.Router();

// this is for NINO number
router.post('/index.html', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/index');
});

router.post('/working-on', function (req, res) {
  const ninoNumber = req.session.data['nino-number-ur-8'];
  req.session.data = {'nino-number-ur-8': ninoNumber}

  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data[' was-call-answered']= '';
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
  req.session.data['Do-you-want-to-complete-the-call'] = '';
  req.session.data.outcomePage = '';
  req.session.data.notes = '';
  req.session.data.tableValue = '';
  req.session.data.outcomePage = '';

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    res.render('/prototype-sprint-wise/ur-13/working-on');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-sprint-wise/ur-13/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

router.post('/call-with', function (req, res) {
  // req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  // req.session.data['Who-is-contact-with'] = '';
  // req.session.data['Who-is-the-engagement-with'] = '';

  // Phone call conditions
  if (req.session.data['contact-types'] == 'A phone call') {
    if (req.session.data['What-type-of-contact'] == 'Inbound phone call with') {
      res.redirect('/prototype-sprint-wise/ur-13/call-with');
    } else if (req.session.data['What-type-of-contact'] == 'Outbound phone call with') {
      res.redirect('/prototype-sprint-wise/ur-13/call-status');
    }
  }


  // Letter conditions
  // if (req.session.data['contact-types'] == 'A letter') {
  //   if (req.session.data['What-type-of-contact'] == 'Inbound letter from' || req.session.data['What-type-of-contact'] == 'Outbound letter to') {
  //     res.redirect('/prototype-sprint-wise/ur-13/non-telephony/contact-with');
  //   }
  // }

  if (req.session.data['contact-types'] == 'A letter') {
    if (req.session.data['What-type-of-contact'] == 'Inbound letter from') {
      res.redirect('/prototype-sprint-wise/ur-13/non-telephony/letter-from');
    } else if (req.session.data['What-type-of-contact'] == 'Outbound letter to') {
      res.redirect('/prototype-sprint-wise/ur-13/non-telephony/letter-to');
    }
  }

  // Email condition
  // if (req.session.data['contact-types'] == 'An email') {
  //   if (req.session.data['What-type-of-contact'] == 'Inbound email from' || req.session.data['What-type-of-contact'] == 'Outbound email to') {
  //     res.redirect('/prototype-sprint-wise/ur-13/non-telephony/contact-with');
  //   }
  // }

  if (req.session.data['contact-types'] == 'An email') {
    if (req.session.data['What-type-of-contact'] == 'Inbound email from') {
      res.redirect('/prototype-sprint-wise/ur-13/non-telephony/email-from');
    } else if (req.session.data['What-type-of-contact'] == 'Outbound email to') {
      res.redirect('/prototype-sprint-wise/ur-13/non-telephony/email-to');
    }
  }

  // Notification condition
  if (req.session.data['contact-types'] == 'Text message to') {
      res.redirect('/prototype-sprint-wise/ur-13/non-telephony/message-to');
    }

  // face to face converstaions condition
  if (req.session.data['contact-types'] == 'A visit or appointment') {
      if (req.session.data['What-type-of-contact'] == 'Visit from' || req.session.data['What-type-of-contact'] == 'Visit to') {
        res.redirect('/prototype-sprint-wise/ur-13/non-telephony/visit-with');
      }
  }

  // view only
 if (req.session.data['contact-types'] == 'View only') {
    res.redirect('/prototype-sprint-wise/ur-13/view-only/home');
  }

  // if (req.session.data['What-type-of-contact'] == '') {
  //   res.redirect('back');
  // }
});


// for outbound call
router.post('/telephony/add-call/planned-for-review', function (req, res) {
  // req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  // req.session.data['Who-is-contact-with'] = '';
  // req.session.data['Who-is-the-engagement-with'] = '';

  // Phone call conditions
  if (req.session.data['was-call-answered'] == 'Yes') {
    res.redirect('/prototype-sprint-wise/ur-13/telephony/home');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    res.render('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed');
  }
});

router.post('/add-log-outbound-call-attempt-failed', function (req, res) {
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['addNote']= '';
  if (
    req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
    req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
  ) {
    req.session.data['Who-is-the-engagement-with'] = '';
  }
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed');

});


router.post('/telephony/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];
  req.session.data['what-benefit-discussed'] = '';
  req.session.data['addNote']= '';

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    res.redirect('back');
  } else {
    if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    res.redirect('/prototype-sprint-wise/ur-13/telephony/home');
  }
});

router.post('/non-telephony/home', function (req, res) {
  // var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];
  // req.session.data['what-benefit-discussed'] = '';
  // req.session.data['addNote']= '';

  if (req.session.data['Who-is-contact-with'] == '') {
    res.redirect('back');
  } else {
    if (
      req.session.data['Who-is-contact-with'] == 'someone else' ||
      req.session.data['Who-is-contact-with'] == 'Christopher Fox'
    ) {
      req.session.data['Who-is-the-engagement-with'] = '';
    }
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/home');
  }
});


// new routes for shorten call log - Telephony

router.post('/telephony/add-call/reviewed', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '' && req.session.data['Do-you-want-to-complete-the-call'] != '') {
    // console.log('Display summary page');
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/do-you-want-add-more-details');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed');
  }
});

router.post('/telephony/add-call/planned-action', function (req, res) {

  req.session.data['contact-type'] = '';
  req.session.data['contact-type-esa'] = '';
  req.session.data['contact-type-pip'] = '';
  req.session.data['contact-type-aa'] = '';
  req.session.data['contact-type-dla'] = '';
  req.session.data['contact-type-ca'] = '';
  req.session.data['contact-type-ibjsa'] = '';
  req.session.data['contact-type-nsjsa'] = '';
  req.session.data['contact-type-uc'] = '';
  req.session.data['contact-type-sp'] = '';
  req.session.data['contact-type-pc'] = '';
  req.session.data['contact-type-wfp'] = '';
  req.session.data['contact-type-cwp'] = '';
  req.session.data['contact-type-ma'] = '';
  req.session.data['contact-type-bsp'] = '';
  req.session.data['contact-type-sda'] = '';
  req.session.data['contact-type-gCoC'] = '';
  
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
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/general-information');
  } else {
  res.render('/prototype-sprint-wise/ur-13/telephony/add-call/select-contact-type');
 }
})

// Question asked original
router.post('/telephony/add-call/questions-asked', function (req, res) {

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
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/general-information');
  } else {
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/questions-asked');
 }
})

router.post('/telephony/add-call/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/questions-answered');
});

router.post('/telephony/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/is-question-resolved');
});

router.post('/telephony/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/added-call-details');
});
 
router.post('/telephony/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    // console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/add-note')
  } else{
    // console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/added-details');
  }
});

router.post('/telephony/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/added-details')
});

router.post('/telephony/add-call/add-more-call-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-call-detail'];
  if (addCallDetails == 'Yes I want to add'){
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed')
  }
  if (addCallDetails == 'Complete phone call'){
    // res.redirect('/prototype-sprint-wise/ur-13//add-call/call-completed');
    res.redirect('/prototype-sprint-wise/ur-13/index')
  }
  if (addCallDetails == 'Change your note'){
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/add-a-note');
  }
});

router.post('/telephony/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    // console.log('Comlete phone call');
    // res.redirect('/prototype-sprint-wise/ur-13//telephony/add-call/call-completed')
    res.redirect('/prototype-sprint-wise/ur-13/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/ur-13/telephony/home')
  }

});

router.post('/telephony/add-call/do-you-want-to-complete-call', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/do-you-want-to-complete-call');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/no-contact-added');
  }
});

router.post('/telephony/add-call/check-call-completion', function (req, res) {
  var checkCallCompletion = req.session.data['complete-call'];

  if (checkCallCompletion == 'Yes') {
    res.redirect('/prototype-sprint-wise/ur-13/index');
  }
  else{
    res.redirect('/prototype-sprint-wise/ur-13/telephony/home');
  }
});



// new routes for shorten call log - Non-Telephony

// router.post('/non-telephony/add-contact/reviewed', function (req, res) {
//   if (req.session.data['what-benefit-discussed-non-telephon'] != '' && req.session.data['Do-you-want-to-complete-the-call'] != '') {
//     res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/do-you-want-add-more-details');

//   }
//   else{
//     req.session.data['what-benefit-discussed-non-telephony'] = '';
//     req.session.data['addNote']= '';
//     res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/reviewed');
//   }
// });

router.post('/non-telephony/add-contact/reviewed', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/reviewed');
});

router.post('/non-telephony/add-contact/do-you-want-add-more-details', function (req, res) {
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/do-you-want-add-more-details');
});

router.post('/non-telephony/add-contact/select-contact-type', function (req, res) {

  if (req.session.data['what-benefit-discussed-non-telephony'] == '')
 {
  console.log('Error page');
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/reviewed-error');
  } else {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/select-contact-type');
 }
})

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
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/reviewed-error');
 } else if (req.session.data['what-benefit-discussed-non-telephony'] == 'General information') {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/general-information');
} else {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/questions-asked');
 }
})

// router.post('/telephony/add-call/added-contact-details', function (req, res) {
  
//   res.redirect('/prototype-sprint-wise/ur-13//telephony/add-call/added-call-details');
// });

router.post('/non-telephony/add-contact/questions-answered', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/questions-answered');
});

router.post('/non-telephony/add-contact/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/is-question-resolved');
});

router.post('/non-telephony/add-contact/added-contact-details', function (req, res) {
  
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/added-contact-details');
});
 
router.post('/non-telephony/add-contact/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/added-details');
  }
});

router.post('/non-telephony/add-contact/check-before-start-sercive-again', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] == ''){
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/check-before-start-sercive-again');
  } else{
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/do-you-want-to-complete-contact'); 
  }
});

router.post('/non-telephony/add-contact/start-service-again', function (req, res) {
  var addContactDetails = req.session.data['add-contact-Details'];
  if (addContactDetails == 'Yes') {
    res.redirect('/prototype-sprint-wise/ur-13/index');
  }
  else{
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/home');
  }
});

router.post('/non-telephony/add-contact/complete-contact', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-contact'];
  if (checkCallCompletion == 'Start Service again'){
    console.log('Comlete phone call');
    res.redirect('/prototype-sprint-wise/ur-13/index')
   
  } else{
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/home')
  }

});

router.post('/non-telephony/add-contact/add-more-contact-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-detail'];
  if (addCallDetails == 'Yes I want to add'){
    console.log('Add more benefits');
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/reviewed');
  }
  if (addCallDetails == 'Complete phone call'){
    console.log('Complete call');
    res.redirect('/prototype-sprint-wise/ur-13/index');
  }
  if (addCallDetails == 'Change your note'){
    console.log('Change notes');
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    console.log('Add a note');
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/add-a-note');
  }
});

router.post('/non-telephony/add-contact/do-you-want-to-complete-contact', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/non-telephony/add-contact/added-details')
});

router.post('/non-telephony/add-contact/contact-details-completed', function (req, res) {
  var addContactDetails = req.session.data['complete-contact'];
  if (addContactDetails == 'Yes'){
    // res.redirect('/prototype-sprint-wise/ur-13//non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-sprint-wise/ur-13/index')
    
  } else{
    res.redirect('/prototype-sprint-wise/ur-13/non-telephony/home')
  }
});



// for DLA active benefit

router.post('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed-dla-active', function (req, res) {
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed-dla-active');
});

// hide and show CTA


// CoC secondary option option A
router.post('/telephony/add-call/option-a/planned-action', function (req, res) {

  req.session.data['contact-type'] = '';
  req.session.data['addNote'] = '';
  req.session.data['contact-type-esa'] = '';
  req.session.data['contact-type-pip'] = '';
  req.session.data['contact-type-aa'] = '';
  req.session.data['contact-type-dla'] = '';
  req.session.data['contact-type-ca'] = '';
  req.session.data['contact-type-ibjsa'] = '';
  req.session.data['contact-type-nsjsa'] = '';
  req.session.data['contact-type-uc'] = '';
  req.session.data['contact-type-sp'] = '';
  req.session.data['contact-type-pc'] = '';
  req.session.data['contact-type-wfp'] = '';
  req.session.data['contact-type-cwp'] = '';
  req.session.data['contact-type-ma'] = '';
  req.session.data['contact-type-bsp'] = '';
  req.session.data['contact-type-sda'] = '';
  req.session.data['contact-type-gCoC'] = '';
  
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
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/general-information');
  } else {
  res.render('/prototype-sprint-wise/ur-13/telephony/add-call/option-a/select-contact-type');
 }
})

router.post('/telephony/add-call/option-a/added-call-details', function (req, res) {

  if(
    req.session.data['contact-type-ca'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-esa'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-pip'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-aa'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-bsp'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-cwp'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-dla'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-ibjsa'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-nsjsa'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-ma'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-pc'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-sp'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-sda'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-uc'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type-wfp'].includes("Reported a change of circumstance") ||
    req.session.data['contact-type'].includes("Reported a change of circumstance")
  )
  { 
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/option-a/what-coc-have-been-selected');

  } else{
    res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/option-a/added-call-details');
  }
});

// added call details along with CoC 
router.post('/telephony/add-call/option-a/added-call-details-with-coc', function (req, res) {
  res.redirect('/prototype-sprint-wise/ur-13/telephony/add-call/option-a/added-call-details');
});

module.exports = router;
