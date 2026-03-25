const express = require('express');
const router = express.Router();

// SAVE SUPPORT NEEDS (Return to home on confirmation)
router.post('/telephony/home', function (req, res) {
  let selections = req.session.data['what-additional-support'];

  // normalise to array
  if (selections && !Array.isArray(selections)) {
    selections = [ selections ];
  }

  const otherText = (req.session.data['something-else-detail'] || '').trim();
  const note      = (req.session.data['addNote-additional-support'] || '').trim();

  req.session.data.supportNeeds = {
    items: selections || [],
    otherText,
    note
  };

  req.session.data.supportNeedsJustSaved = true;

  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home');
});

// TELEPHONY HOME PAGE (GET)
router.get('/telephony/home', function (req, res) {
  return res.render('prototype-dev-baseline/mvp-1_3_3/telephony/home');
});

// NOTES PAGE (linked from home banner)
router.get('/telephony/support-needs-notes', function (req, res) {
  return res.render('prototype-dev-baseline/mvp-1_3_3/telephony/support-needs-notes');
});

// this is for NINO number
router.post('/index.html', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/index');
});

router.post('/working-on', function (req, res) {
  const ninoNumber = req.session.data['nino-number-ur-8'];

  // ❗ DO NOT wipe the whole session object
  // req.session.data = {'nino-number-ur-8': ninoNumber}

  // ✅ Instead, keep what already exists, then reset only fields you want:
  req.session.data['nino-number-ur-8'] = ninoNumber;

  // Reset ONLY the fields that should be cleared
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['was-call-answered'] = '';
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
  req.session.data['addNote'] = '';

  // ❗ DO NOT touch: supportNeeds, supportNeedsJustSaved
  // These must survive to show the banner.

  if (
    req.session.data['nino-number-ur-8'] == 'QQ123456Q' ||
    req.session.data['nino-number-ur-8'] == 'qq123456q' ||
    req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q'
  ) {
    return res.render('/prototype-dev-baseline/mvp-1_3_3/working-on');
  } else {
    if (!req.session.data['nino-number-ur-8']) {
      return res.redirect('/prototype-dev-baseline/mvp-1_3_3/error-nino-number');
    } else {
      return res.redirect('back');
    }
  }
});

router.post('/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';

  // Phone call conditions
  if (req.session.data['contact-types'] == 'A phone call') {
          res.redirect('/prototype-dev-baseline/mvp-1_3_3/call-with');
    // if (req.session.data['What-type-of-contact'] == 'Inbound phone call with') {
    //   res.redirect('/prototype-dev-baseline/mvp-1_3_3/call-with');
    // } else if (req.session.data['What-type-of-contact'] == 'Outbound phone call with') {
    //   res.redirect('/prototype-dev-baseline/mvp-1_3_3/call-status');
    // }
  }

  if (req.session.data['contact-types'] == 'A letter') {
    if (req.session.data['What-type-of-contact'] == 'Inbound letter from') {
      res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/letter-from');
    } else if (req.session.data['What-type-of-contact'] == 'Outbound letter to') {
      res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/letter-to');
    }
  }

  if (req.session.data['contact-types'] == 'An email') {
    if (req.session.data['What-type-of-contact'] == 'Inbound email from') {
      res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/email-from');
    } else if (req.session.data['What-type-of-contact'] == 'Outbound email to') {
      res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/email-to');
    }
  }

  // Notification condition
  if (req.session.data['contact-types'] == 'Text message to') {
      res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/message-to');
    }

  // face to face converstaions condition
  if (req.session.data['contact-types'] == 'A visit or appointment') {
      if (req.session.data['What-type-of-contact'] == 'Visit from' || req.session.data['What-type-of-contact'] == 'Visit to') {
        res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/visit-with');
      }
  }

  // view only
 if (req.session.data['contact-types'] == 'View only') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/view-only/home');
  }

  // if (req.session.data['What-type-of-contact'] == '') {
  //   res.redirect('back');
  // }
});


// for outbound call
router.post('/telephony/add-call/planned-for-review', function (req, res) {
  if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
      ) {
      req.session.data['Who-is-the-engagement-with'] = '';
      }

  // Phone call conditions
  if (req.session.data['was-call-answered'] == 'Yes') {
    // req.session.data['Who-is-the-phone-call-with-ur8'] = '';
     res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home');
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
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed');
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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed');

});

// ======================================================================
// SAVE SUPPORT NEEDS (when user clicks "Return to home" on confirmation)
// ======================================================================
router.post('/prototype-dev-baseline/mvp-1_3_3/telephony/home', function (req, res) {

  // 1. Read checked support needs from session
  let selections = req.session.data['what-additional-support'];

  // Normalise to array
  if (selections && !Array.isArray(selections)) {
    selections = [ selections ];
  }

  const otherText = (req.session.data['something-else-detail'] || '').trim();
  const note      = (req.session.data['addNote-additional-support'] || '').trim();

  // 2. Save structured data for Home banner + Notes page
  req.session.data.supportNeeds = {
    items: selections || [],
    otherText: otherText,
    note: note
  };

  // 3. Optional success banner on home
  req.session.data.supportNeedsJustSaved = true;

  // 4. Redirect to home
  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home');
});


router.post('/non-telephony/home', function (req, res) {
  // var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];
  // req.session.data['what-benefit-discussed'] = '';
  // req.session.data['addNote']= '';

  if (req.session.data['Who-is-contact-with'] == '') {
    res.redirect('back');
  } else {
      if (
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else' ||
      req.session.data['Who-is-the-phone-call-with-ur8'] == 'Christopher Fox'
      ) {
      req.session.data['Who-is-the-engagement-with'] = '';
      }
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/home');
  }
});
// Render Home (GET) so the banner sees updated session state
router.get('/prototype-dev-baseline/mvp-1_3_3/telephony/home', function (req, res) {
  return res.render('prototype-dev-baseline/mvp-1_3_3/telephony/home');
});

// -------------------------------------------
// OLD ROUTE (causes redirect to wrong page) to be removed
// -------------------------------------------
//
// router.post('/telephony/add-call/reviewed', function (req, res) {
//   if (
//     req.session.data['what-benefit-discussed'] != '' &&
//     req.session.data['Do-you-want-to-complete-the-call'] != ''
//   ) {
//     // This redirect is what hijacked your flow
//     res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/do-you-want-add-more-details');
//   }
//   else {
//     req.session.data['what-benefit-discussed'] = '';
//     req.session.data['addNote'] = '';
//     res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed');
//   }
// });
// -------------------------------------------
// NEW ROUTE (always goes to reviewed)
// -------------------------------------------
router.post('/telephony/add-call/reviewed', function (req, res) {
  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed');
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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/general-information');
  } else {
  res.render('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/select-contact-type');
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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/general-information');
  } else {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/questions-asked');
 }
})

router.post('/telephony/add-call/questions-answered', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/questions-answered');
});

router.post('/telephony/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/is-question-resolved');
});

router.post('/telephony/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/added-call-details');
});
 
router.post('/telephony/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    // console.log('Add Notes');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/add-note')
  } else{
    // console.log('This is Newcastle');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/added-details');
  }
});

router.post('/telephony/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/added-details')
});

router.post('/telephony/add-call/add-more-call-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-call-detail'];
  if (addCallDetails == 'Yes I want to add'){
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed')
  }
  if (addCallDetails == 'Complete phone call'){
    // res.redirect('/prototype-dev-baseline/mvp-1_3_3//add-call/call-completed');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index')
  }
  if (addCallDetails == 'Change your note'){
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/add-a-note');
  }
});

router.post('/telephony/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    // console.log('Comlete phone call');
    // res.redirect('/prototype-dev-baseline/mvp-1_3_3//telephony/add-call/call-completed')
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index')
   
  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home')
  }

});

router.post('/telephony/add-call/do-you-want-to-complete-call', function (req, res) {
  if (req.session.data['what-benefit-discussed'] != '') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/do-you-want-to-complete-call');
  }
  else{
    req.session.data['what-benefit-discussed'] = '';
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/no-contact-added');
  }
});

router.post('/telephony/add-call/check-call-completion', function (req, res) {
  var checkCallCompletion = req.session.data['complete-call'];

  if (checkCallCompletion == 'Yes') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index');
  }
  else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home');
  }
});

// new routes for shorten call log - Non-Telephony

router.post('/non-telephony/add-contact/reviewed', function (req, res) {
  var checkVisistType = req.session.data['contact-types'].includes('A visit or appointment');
  var visitTo = req.session.data['What-type-of-contact'].includes('Visit to');
  if (req.session.data['contact-types'] == 'Text message to'){
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/message-about');
  } else if(checkVisistType && visitTo){
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/visit-about');
  } else {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/reviewed');
  }

});


router.post('/non-telephony/add-contact/do-you-want-add-more-details', function (req, res) {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/do-you-want-add-more-details');
});

router.post('/non-telephony/add-contact/select-contact-type', function (req, res) {

  if (req.session.data['what-benefit-discussed-non-telephony'] == '')
 {
  console.log('Error page');
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/reviewed-error');
  } else {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/select-contact-type');
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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/reviewed-error');
 } else if (req.session.data['what-benefit-discussed-non-telephony'] == 'General information') {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/general-information');
} else {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/questions-asked');
 }
})

// router.post('/telephony/add-call/added-contact-details', function (req, res) {
  
//   res.redirect('/prototype-dev-baseline/mvp-1_3_3//telephony/add-call/added-call-details');
// });

router.post('/non-telephony/add-contact/questions-answered', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/questions-answered');
});

router.post('/non-telephony/add-contact/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/is-question-resolved');
});

router.post('/non-telephony/add-contact/added-contact-details', function (req, res) {
  
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/added-contact-details');
});
 
router.post('/non-telephony/add-contact/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/added-details');
  }
});

router.post('/non-telephony/add-contact/check-before-start-sercive-again', function (req, res) {
  if (req.session.data['what-benefit-discussed-non-telephony'] == ''){
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/check-before-start-sercive-again');
  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/do-you-want-to-complete-contact'); 
  }
});

router.post('/non-telephony/add-contact/start-service-again', function (req, res) {
  var addContactDetails = req.session.data['add-contact-Details'];
  if (addContactDetails == 'Yes') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index');
  }
  else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/home');
  }
});

router.post('/non-telephony/add-contact/complete-contact', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-contact'];
  if (checkCallCompletion == 'Start Service again'){
    console.log('Comlete phone call');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index')
   
  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/home')
  }

});

router.post('/non-telephony/add-contact/add-more-contact-details', function (req, res) {
  var addCallDetails = req.session.data['do-you-want-to-add-more-detail'];
  if (addCallDetails == 'Yes I want to add'){
    console.log('Add more benefits');
    req.session.data['what-benefit-discussed-non-telephony'] = '';
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/reviewed');
  }
  if (addCallDetails == 'Complete phone call'){
    console.log('Complete call');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index');
  }
  if (addCallDetails == 'Change your note'){
    console.log('Change notes');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/change-notes');
  }
  if (addCallDetails == 'Add a note'){
    console.log('Add a note');
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/add-a-note');
  }
});

router.post('/non-telephony/add-contact/do-you-want-to-complete-contact', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-contact/added-details')
});

router.post('/non-telephony/add-contact/contact-details-completed', function (req, res) {
  var addContactDetails = req.session.data['complete-contact'];
  if (addContactDetails == 'Yes'){
    // res.redirect('/prototype-dev-baseline/mvp-1_3_3//non-telephony/add-contact/contact-completed')
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/index')
    
  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/home')
  }
});

// for DLA active benefit
router.post('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-dla-active', function (req, res) {
    req.session.data['what-benefit-discussed'] = '';
    req.session.data['addNote']= '';
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-dla-active');
});


// ---------------for CoC secondary data design options -------------------

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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/general-information');
  } else {
  res.render('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-a/select-contact-type');
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
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-a/what-coc-have-been-selected');

  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-a/added-call-details');
  }
});
// added call details along with CoC 
router.post('/telephony/add-call/option-a/added-call-details-with-coc', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-a/added-call-details');
});

// CoC secondary option option B
router.post('/telephony/add-call/option-b/planned-action', function (req, res) {

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
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/reviewed-error');
  } else if (req.session.data['what-benefit-discussed'] == 'General information') {
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/general-information');
  } else {
  res.render('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-b/select-contact-type');
 }
})
router.post('/telephony/add-call/option-b/add-a-note-optional', function (req, res) {

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
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-b/what-coc-have-been-selected');

  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-b/add-a-note-optional');
  }
});
// added call details along with CoC 
router.post('/telephony/add-call/option-b/added-call-details-with-coc', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-b/add-a-note-optional');
});
// Add note-optional page
router.post('/telephony/add-call/option-b/added-call-details', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-call/option-b/added-call-details');

});

// ---------------close here CoC secondary data design options -------------------

// DEBUG: show session data
router.get('/session', function (req, res) {
  res.json(req.session.data);
});

// ---------------MVP-1_3_3 -------------------

// Always returns: "13 March 2026, 11:55"
function formatContactTime(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(date);

  const get = (type) => (parts.find(p => p.type === type) || {}).value || '';

  const day = get('day');       // "13"
  const month = get('month');   // "March"
  const year = get('year');     // "2026"
  const hour = get('hour');     // "11"
  const minute = get('minute'); // "55"

  return `${day} ${month} ${year}, ${hour}:${minute}`;
}

function getContactType(req) {
  return req.session.data['What-type-of-contact'] || 'Contact';
}

function getWhoWith(req) {
  return req.session.data['Who-is-the-phone-call-with-ur8'] || '';
}

// additional support router
router.post('/additional-support-router-3', function (req, res) {
  const answer = req.body['additional-support-needs'];

  if (answer === 'add') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/add-support-needs');
  }

  if (answer === 'remove') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/remove-support-needs');
  }

  if (answer === 'update') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/update-support-needs');
  }

  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/home');
});

router.post('/telephony/added-support-needs', function (req, res) {

  // Extract NEW selections
  let selections = req.session.data['what-additional-support'] || [];
  if (typeof selections === 'string') selections = [ selections ];

  const newOther = (req.session.data['something-else-detail'] || '').trim();
  const newNote  = (req.session.data['addNote-additional-support'] || '').trim();


  // ⭐ CONVERT "Something else" into a titled support need
  // Allows unlimited Something elses without overwriting previous ones
  if (selections.includes("Something else")) {
    const idx = selections.indexOf("Something else");

    if (newOther) {
      selections.splice(idx, 1, `Something else: ${newOther}`);
    } else {
      // Prevent empty entries if the user ticked Something else but didn't type
      selections.splice(idx, 1);
    }
  }


  // Store one-shot payload for check/confirm page
  req.session.data.supportNeedsFlow = 'add';
  req.session.data.supportNeedsJustAdded = {
    items: selections,
    otherText: newOther,   // still useful for confirm page
    note: newNote
  };
  delete req.session.data.supportNeedsJustRemoved;


  // Merge with previous state
  const previousSnapshot =
    req.session.data.supportNeedsPrevious ||
    req.session.data.supportNeeds ||
    { items: [], otherText: '', note: '' };

  const mergedItems = Array.from(
    new Set([...(previousSnapshot.items || []), ...selections])
  );

  const finalOther = previousSnapshot.otherText || '';
  const finalNote  = newNote || previousSnapshot.note || '';


  // SAVE updated supportNeeds
  req.session.data.supportNeeds = {
    items: mergedItems,
    otherText: finalOther,   // kept only for backwards compatibility
    note: finalNote
  };


  // ⭐ EVENT LOGGING (Add)
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'add',
    needs: selections,
    note: newNote,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()),
    whoWith: getWhoWith(req)
  });


  // Cleanup temporary fields
  delete req.session.data.supportNeedsPrevious;
  req.session.data['what-additional-support']    = [];
  req.session.data['something-else-detail']      = '';
  req.session.data['addNote-additional-support'] = '';

  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/confirmed-support-needs');
});

router.post('/telephony/confirmed-support-needs', function (req, res) {
  // NEW selections
  let selections = req.session.data['what-additional-support'] || [];
  if (typeof selections === 'string') selections = [selections];

  const newOther = (req.session.data['something-else-detail'] || '').trim();
  const newNote  = (req.session.data['addNote-additional-support'] || '').trim();

  // Tell the success template we are in ADD flow
  req.session.data.supportNeedsJustAdded = {
    items: selections,
    otherText: newOther,
    note: newNote
  };

  // OLD snapshot/fallback
  const previousSnapshot = req.session.data.supportNeedsPrevious
                        || req.session.data.supportNeeds
                        || { items: [], otherText: '', note: '' };

  const mergedItems = Array.from(new Set([...(previousSnapshot.items || []), ...selections]));
  const finalOther  = newOther || previousSnapshot.otherText || '';
  const finalNote   = newNote  || previousSnapshot.note      || '';

  req.session.data.supportNeeds = { items: mergedItems, otherText: finalOther, note: finalNote };

  // Clean temp fields
  delete req.session.data.supportNeedsPrevious;
  req.session.data['what-additional-support']    = [];
  req.session.data['something-else-detail']      = '';
  req.session.data['addNote-additional-support'] = '';

  // 🔒 Clear the REMOVE flag so success page cannot mistake mode
  delete req.session.data.supportNeedsJustRemoved;

  // Go to shared success page
  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/confirmed-support-needs');
});

router.get('/telephony/change-support-needs', function (req, res) {

  req.session.data.supportNeedsFlow = 'change';
  
  req.session.data.supportNeedsPrevious =
    req.session.data.supportNeeds || { items: [], otherText: '', note: '' };

  // Clear only temp fields
  req.session.data['what-additional-support'] = [];
  req.session.data['something-else-detail'] = '';
  req.session.data['addNote-additional-support'] = '';

  return res.render('prototype-dev-baseline/mvp-1_3_3/telephony/change-support-needs');
});

router.post('/telephony/check-support-needs', function (req, res) {
  let selections = req.session.data['what-additional-support'];

  if (!selections) {
    selections = [];
  } else if (typeof selections === 'string') {
    selections = [ selections ];
  }

  req.session.data['what-additional-support'] = selections;
  req.session.data['something-else-detail'] =
    (req.session.data['something-else-detail'] || '').trim();

  req.session.data['addNote-additional-support'] =
    (req.session.data['addNote-additional-support'] || '').trim();

  return res.render('prototype-dev-baseline/mvp-1_3_3/telephony/check-support-needs');
});

// Show the shared confirmed page (add/remove/update)
// You can clear one-time flags after rendering if you want to keep session tidy.
router.get('/telephony/confirmed-support-needs', function (req, res) {
  res.render('prototype-dev-baseline/mvp-1_3_3/telephony/confirmed-support-needs');

  // OPTIONAL clean-up (uncomment if you want these cleared after showing)
  // delete req.session.data.supportNeedsFlow;
  // delete req.session.data.supportNeedsJustAdded;
  // delete req.session.data.supportNeedsJustRemoved;
  // delete req.session.data.supportNeedsJustUpdated;
});
// --- START replacement for removed-support-needs route ---

// Handle both single (Yes/No) and multi-select removal flows
function handleRemovedSupportNeeds(req, res) {
  // Read the Yes/No radio (present only in the single-need flow)
  const confirmChoice = (req.body['confirm-remove'] || '').toLowerCase();

  // ❌ NO: Do not change any data, just go back to change page
  if (confirmChoice === 'no') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/change-support-needs');
  }

  // From here on: YES or no radio present (multi-select confirmation)
  // Gather items to remove (string or array)
  let removeList = req.body['remove-support-needs'];
  if (!removeList || (Array.isArray(removeList) && removeList.length === 0)) {
    removeList = req.session.data['remove-support-needs'] || [];
  }
  if (typeof removeList === 'string') removeList = [removeList];
  removeList = Array.isArray(removeList) ? removeList.filter(Boolean) : [];

  // If nothing selected, safely go back
  if (removeList.length === 0) {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/change-support-needs');
  }

  // Proceed with your existing removal logic
  req.session.data.supportNeedsFlow = 'remove';

  const current = req.session.data.supportNeeds || { items: [], otherText: '', note: '' };
  let items = Array.isArray(current.items) ? current.items.slice() : [];
  let other = current.otherText || '';
  let note  = current.note || '';

  // Snapshot BEFORE removal (for confirmed page)
  req.session.data.supportNeedsJustRemoved = { items: removeList, otherText: other };
  delete req.session.data.supportNeedsJustAdded;
  delete req.session.data.supportNeedsJustUpdated;

  // Remove the selected items (exact match)
  items = items.filter(i => !removeList.includes(i));

  // Legacy safeguard for literal 'Something else' token
  if (removeList.includes('Something else')) {
    items = items.filter(i => i !== 'Something else');
    other = '';
  }

  if (items.length === 0 && !other) {
    note = '';
  }

  // Save
  req.session.data.supportNeeds = { items, otherText: other, note };

  // Event log
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'remove',
    needs: removeList,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()),
    whoWith: getWhoWith(req)
  });

  // Clean temp
  req.session.data['remove-support-needs'] = [];
  req.session.data['remove-support-note']  = '';

  // Go to confirmed page
  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/confirmed-support-needs');
}

// Register BOTH paths (prefixed + unprefixed) so either action works
router.post('/prototype-dev-baseline/mvp-1_3_3/telephony/removed-support-needs', handleRemovedSupportNeeds);
router.post('/telephony/removed-support-needs', handleRemovedSupportNeeds);

// --- END replacement for removed-support-needs route ---


router.post('/telephony/updated-support-needs', function (req, res) {

  let updateList = req.session.data['update-support-needs'] || [];
  if (typeof updateList === 'string') updateList = [updateList];

  const newNote = (req.session.data['update-note'] || '').trim();

  req.session.data.supportNeedsFlow = 'update';
  req.session.data.supportNeedsJustUpdated = {
    items: updateList,
    note: newNote
  };

  req.session.data.supportNeeds = req.session.data.supportNeeds || {};
  const support = req.session.data.supportNeeds;

  support.items = Array.isArray(support.items) ? support.items : [];
  support.otherText = support.otherText || '';
  support.notesByNeed = support.notesByNeed || {};

  const timestamp = new Date().toISOString();

  updateList.forEach((need) => {
    support.notesByNeed[need] = support.notesByNeed[need] || [];
    support.notesByNeed[need].unshift({
      text: newNote,
      date: timestamp
    });
  });

  // EVENT LOGGING HERE 
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'update',
    needs: updateList,
    note: newNote,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()), // ✅ pass a Date instance
    whoWith: getWhoWith(req)
  });

  // Cleanup
  req.session.data['update-support-needs'] = [];
  req.session.data['update-note'] = '';

  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/confirmed-support-needs');
});

// ========== NON-TELEPHONY SUPPORT NEEDS FLOW (mirrors telephony) ==========

// Base helpers (reuse your existing ones)
function formatContactTime(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).formatToParts(date);

  const get = (type) => (parts.find(p => p.type === type) || {}).value || '';

  const day = get('day');
  const month = get('month');
  const year = get('year');
  const hour = get('hour');
  const minute = get('minute');

  return `${day} ${month} ${year}, ${hour}:${minute}`;
}

// You can keep these identical; fallbacks ensure it still logs sensibly
function getContactType(req) {
  return req.session.data['What-type-of-contact'] || 'Contact';
}

function getWhoWith(req) {
  // Reuse the telephony key if your prototype uses this everywhere
  // Add a gentle fallback in case your non-telephony screens store a different key
  return (
    req.session.data['Who-is-the-phone-call-with-ur8'] ||
    req.session.data['Who-is-the-contact-with'] ||
    ''
  );
}

// Convenience base paths for non-telephony
const NT_BASE = '/prototype-dev-baseline/mvp-1_3_3/non-telephony';

// ── Router to send user to add / remove / update ─────────────────────────────
router.post('/non-telephony/additional-support-router-4', function (req, res) {
  const answer = req.body['additional-support-needs'];

  if (answer === 'add')    return res.redirect(`${NT_BASE}/add-support-needs`);
  if (answer === 'remove') return res.redirect(`${NT_BASE}/remove-support-needs`);
  if (answer === 'update') return res.redirect(`${NT_BASE}/update-support-needs`);

  return res.redirect(`${NT_BASE}/home`);
});

// additional support router
router.post('/additional-support-router-4', function (req, res) {
  const answer = req.body['additional-support-needs'];

  if (answer === 'add') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/add-support-needs');
  }

  if (answer === 'remove') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/remove-support-needs');
  }

  if (answer === 'update') {
    return res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/update-support-needs');
  }

  return res.redirect('/prototype-dev-baseline/mvp-1_3_3/non-telephony/home');
});

// ── ADD flow (POST) ──────────────────────────────────────────────────────────
router.post('/non-telephony/added-support-needs', function (req, res) {
  // Extract NEW selections
  let selections = req.session.data['what-additional-support'] || [];
  if (typeof selections === 'string') selections = [selections];

  const newOther = (req.session.data['something-else-detail'] || '').trim();
  const newNote  = (req.session.data['addNote-additional-support'] || '').trim();

  // Convert "Something else" to titled support need
  if (selections.includes('Something else')) {
    const idx = selections.indexOf('Something else');
    if (newOther) {
      selections.splice(idx, 1, `Something else: ${newOther}`);
    } else {
      selections.splice(idx, 1);
    }
  }

  // One-shot payload for check/confirm page
  req.session.data.supportNeedsFlow = 'add';
  req.session.data.supportNeedsJustAdded = {
    items: selections,
    otherText: newOther,
    note: newNote
  };
  delete req.session.data.supportNeedsJustRemoved;

  // Merge with previous state
  const previousSnapshot =
    req.session.data.supportNeedsPrevious ||
    req.session.data.supportNeeds ||
    { items: [], otherText: '', note: '' };

  const mergedItems = Array.from(
    new Set([...(previousSnapshot.items || []), ...selections])
  );

  const finalOther = previousSnapshot.otherText || '';
  const finalNote  = newNote || previousSnapshot.note || '';

  // Save
  req.session.data.supportNeeds = {
    items: mergedItems,
    otherText: finalOther,
    note: finalNote
  };

  // Event log
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'add',
    needs: selections,
    note: newNote,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()),
    whoWith: getWhoWith(req)
  });

  // Cleanup temporary fields
  delete req.session.data.supportNeedsPrevious;
  req.session.data['what-additional-support']    = [];
  req.session.data['something-else-detail']      = '';
  req.session.data['addNote-additional-support'] = '';

  return res.redirect(`${NT_BASE}/confirmed-support-needs`);
});

// ── Confirmed (GET) ─────────────────────────────────────────────────────────
router.get('/non-telephony/confirmed-support-needs', function (req, res) {
  return res.render('prototype-dev-baseline/mvp-1_3_3/non-telephony/confirmed-support-needs');
});

// ── Change (GET) ─────────────────────────────────────────────────────────────
router.get('/non-telephony/change-support-needs', function (req, res) {
  req.session.data.supportNeedsFlow = 'change';
  req.session.data.supportNeedsPrevious =
    req.session.data.supportNeeds || { items: [], otherText: '', note: '' };

  // Clear only temp fields
  req.session.data['what-additional-support']    = [];
  req.session.data['something-else-detail']      = '';
  req.session.data['addNote-additional-support'] = '';

  return res.render('prototype-dev-baseline/mvp-1_3_3/non-telephony/change-support-needs');
});

// ── Check (POST) ─────────────────────────────────────────────────────────────
router.post('/non-telephony/check-support-needs', function (req, res) {
  let selections = req.session.data['what-additional-support'];

  if (!selections) {
    selections = [];
  } else if (typeof selections === 'string') {
    selections = [selections];
  }

  req.session.data['what-additional-support']    = selections;
  req.session.data['something-else-detail']      = (req.session.data['something-else-detail'] || '').trim();
  req.session.data['addNote-additional-support'] = (req.session.data['addNote-additional-support'] || '').trim();

  return res.render('prototype-dev-baseline/mvp-1_3_3/non-telephony/check-support-needs');
});

// ── Remove (POST) ────────────────────────────────────────────────────────────
function handleRemovedSupportNeedsNonTelephony(req, res) {
  // Read Yes/No radio (single-need flow)
  const confirmChoice = (req.body['confirm-remove'] || '').toLowerCase();

  if (confirmChoice === 'no') {
    return res.redirect(`${NT_BASE}/change-support-needs`);
  }

  // Gather items to remove
  let removeList = req.body['remove-support-needs'];
  if (!removeList || (Array.isArray(removeList) && removeList.length === 0)) {
    removeList = req.session.data['remove-support-needs'] || [];
  }
  if (typeof removeList === 'string') removeList = [removeList];
  removeList = Array.isArray(removeList) ? removeList.filter(Boolean) : [];

  if (removeList.length === 0) {
    return res.redirect(`${NT_BASE}/change-support-needs`);
  }

  req.session.data.supportNeedsFlow = 'remove';

  const current = req.session.data.supportNeeds || { items: [], otherText: '', note: '' };
  let items = Array.isArray(current.items) ? current.items.slice() : [];
  let other = current.otherText || '';
  let note  = current.note || '';

  // Snapshot BEFORE removal (for confirmed page)
  req.session.data.supportNeedsJustRemoved = { items: removeList, otherText: other };
  delete req.session.data.supportNeedsJustAdded;
  delete req.session.data.supportNeedsJustUpdated;

  // Remove the selected items (exact match)
  items = items.filter(i => !removeList.includes(i));

  // Legacy safeguard for literal 'Something else' token
  if (removeList.includes('Something else')) {
    items = items.filter(i => i !== 'Something else');
    other = '';
  }

  if (items.length === 0 && !other) {
    note = '';
  }

  // Save
  req.session.data.supportNeeds = { items, otherText: other, note };

  // Event log
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'remove',
    needs: removeList,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()),
    whoWith: getWhoWith(req)
  });

  // Clean temp
  req.session.data['remove-support-needs'] = [];
  req.session.data['remove-support-note']  = '';

  return res.redirect(`${NT_BASE}/confirmed-support-needs`);
}

router.post('/prototype-dev-baseline/mvp-1_3_3/non-telephony/removed-support-needs', handleRemovedSupportNeedsNonTelephony);
router.post('/non-telephony/removed-support-needs', handleRemovedSupportNeedsNonTelephony);

// ── Update (POST) ────────────────────────────────────────────────────────────
router.post('/non-telephony/updated-support-needs', function (req, res) {

  let updateList = req.session.data['update-support-needs'] || [];
  if (typeof updateList === 'string') updateList = [updateList];

  const newNote = (req.session.data['update-note'] || '').trim();

  req.session.data.supportNeedsFlow = 'update';
  req.session.data.supportNeedsJustUpdated = {
    items: updateList,
    note: newNote
  };

  req.session.data.supportNeeds = req.session.data.supportNeeds || {};
  const support = req.session.data.supportNeeds;

  support.items = Array.isArray(support.items) ? support.items : [];
  support.otherText = support.otherText || '';
  support.notesByNeed = support.notesByNeed || {};

  const timestamp = new Date().toISOString();

  updateList.forEach((need) => {
    support.notesByNeed[need] = support.notesByNeed[need] || [];
    support.notesByNeed[need].unshift({
      text: newNote,
      date: timestamp
    });
  });

  // Event log
  req.session.data.supportNeedsEvents = req.session.data.supportNeedsEvents || [];
  req.session.data.supportNeedsEvents.unshift({
    action: 'update',
    needs: updateList,
    note: newNote,
    at: new Date().toISOString(),
    contactType: getContactType(req),
    contactTime: formatContactTime(new Date()),
    whoWith: getWhoWith(req)
  });

  // Cleanup
  req.session.data['update-support-needs'] = [];
  req.session.data['update-note'] = '';

  return res.redirect(`${NT_BASE}/confirmed-support-needs`);
});

// DELETE NOTES //////////////////////////////////////////////////////////////


// GET delete page
router.get('/delete-record.html', function (req, res) {
  const recordId = req.query.recordId;

  // Store ID so POST can use it
  req.session.data.recordId = recordId;

  res.render('prototype-dev-baseline/mvp-1_3_3/delete-record');
});

// POST delete form
router.post('/delete-record-router', function (req, res) {

  const recordId = req.session.data.recordId;
  const reasonValue = req.body['delete-reason'];

  if (!reasonValue) {
    req.session.data.error_delete_reason = true;
    return res.redirect('back');
  }

  const reasonLabels = {
    "incorrect-information": "To remove incorrect information",
    "sensitive-information": "To remove information that should not be widely available",
    "account-holder-request": "The account holder has asked for this record to be removed",
    "retention-requirement": "To meet retention requirements"
  };

  const now = new Date();
  const deletionRecord = {
    reasonLabel: reasonLabels[reasonValue],
    deletedAtDate: now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
    deletedAtTime: now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
    agentId: "1007"
  };

  // Store deletion
  req.session.data.deletions = req.session.data.deletions || {};
  req.session.data.deletions[recordId] = deletionRecord;

  // FLAG to show the success banner on next page load
  req.session.data.justDeleted = true;

  // Redirect to your MVP 1.3.3 contact history page
  res.redirect('/prototype-dev-baseline/mvp-1_3_3/telephony/contact-history');
});

router.get('/telephony/contact-history', function (req, res) {

  // Capture the banner flag (so we can show it once)
  const banner = req.session.data.justDeleted;

  // Clear the flag immediately so it only shows once
  req.session.data.justDeleted = false;

  // Pass banner flag into the template
  res.render('prototype-dev-baseline/mvp-1_3_3/telephony/contact-history', {
    banner: banner
  });
});

module.exports = router;
