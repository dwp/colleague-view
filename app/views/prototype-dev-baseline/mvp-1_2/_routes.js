const express = require('express');
const router = express.Router();

// this is for NINO number
router.post('/index.html', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  // req.session.data.outcomePage = '';
  res.redirect('/prototype-dev-baseline/mvp-1_2/index');
});

router.post('/why-checking-info', function (req, res) {
  req.session.data['What-type-of-contact'] = '';
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';
  req.session.data['Who-is-the-engagement-with'] = '';
  req.session.data['Do-you-want-to-complete-the-session'] = '';
  req.session.data['whichBenefitDiscussed'] = '';
  req.session.data['what-benefit-discussed'] = '';
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
    res.redirect('/prototype-dev-baseline/mvp-1_2/why-checking-info');
  } else {
    // var errMsg = '';
    if (
      req.session.data['nino-number-ur-8'] == '' ||
      req.session.data['nino-number-ur-8'] == undefined
    ) {
      // errMsg = "Enter the customer's National Insurance number";
      res.redirect('/prototype-dev-baseline/mvp-1_2/error-nino-number');
    } else {
      res.redirect('back');
    }
  }
});

router.post('/call-with', function (req, res) {
  req.session.data['Who-is-the-phone-call-with-ur8'] = '';
  req.session.data['Who-is-contact-with'] = '';

  if (req.session.data['What-type-of-contact'] == 'Telephone call with') {
    res.redirect('/prototype-dev-baseline/mvp-1_2/call-with');
  }
  if (req.session.data['What-type-of-contact'] == 'Contact with') {
    res.redirect('//prototype-dev-baseline/mvp-1_2/different-type-contact-user/contact-with');
  }
  if (req.session.data['What-type-of-contact'] == 'View only') {
    res.redirect('/prototype-dev-baseline/mvp-1_2/view-only-user/home');
  }
  if (req.session.data['What-type-of-contact'] == '') {
    console.log('Error page');
    res.redirect('/prototype-dev-baseline/mvp-1_2/error-why-checking-info');
  }
});

router.post('/home', function (req, res) {
  var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

  if (req.session.data['Who-is-the-phone-call-with-ur8'] == '') {
    // Send user to error page
    // res.redirect('/prototype-dev-baseline/mvp-1_2/call-with');
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
    res.redirect('/prototype-dev-baseline/mvp-1_2/home');
  }
});

router.post('/different-type-contact-user/home', function (req, res) {
  var contactType = req.session.data['Who-is-contact-with'];

  if (req.session.data['Who-is-contact-with'] == '') {
    // Send user to error page
    res.redirect(
      '/prototype-dev-baseline/mvp-1_2/different-type-contact-user/contact-with'
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
      '/prototype-dev-baseline/mvp-1_2/different-type-contact-user/home'
    );
  }
});

// router.post('/questions-asked', function (req, res) {
//   console.log('Question asked');
//   req.session.data['questionAsk'] = '';
//   req.session.data['npd_wasQuestionResolved']= '';
//   req.session.data['npa_wasQuestionResolved']= '';

//   req.session.data['npd_wasQuestionResolved-esa']= '';
//   req.session.data['npa_wasQuestionResolved-esa']= '';
//   req.session.data['ma_question-resolved-esa']= '';
//   req.session.data['chpa_question-resolved-esa']= '';
//   req.session.data['othQ_question-resolved-esa']= '';

//   req.session.data['npd_wasQuestionResolved-pip']= '';
//   req.session.data['npa_wasQuestionResolved-pip']= '';
//   req.session.data['ma_question-resolved-pip']= '';
//   req.session.data['chpa_question-resolved-pip']= '';
//   req.session.data['othQ_question-resolved-pip']= '';
  
//   if (req.session.data['what-benefit-discussed'].length>1){
//     res.redirect('/prototype-dev-baseline/mvp-1_2/questions-asked-esa');
//   } else{
//   res.redirect('/prototype-dev-baseline/mvp-1_2/questions-asked');
//   }
// });

// router.post('/is-question-resolved', function (req, res) {
//   console.log('Is question resolved');
  
//   req.session.data['npd_question-resolved']= '';
//   req.session.data['npa_question-resolved']= '';
//   req.session.data['ma_question-resolved']= '';
//   req.session.data['chpa_question-resolved']= '';
//   req.session.data['othQ_question-resolved']= '';
//   res.redirect('/prototype-dev-baseline/mvp-1_2/is-question-resolved');
// });

// router.post('/added-call-details', function (req, res) {
  
//   req.session.data['addNote']= '';
//   res.redirect('/prototype-dev-baseline/mvp-1_2/added-call-details');
// });
 
// router.post('/added-details', function (req, res) {
//   var addNote = req.session.data['do-you-want-add-note'];
//   if(addNote =='Yes'){
//     console.log('Add Notes');
//     res.redirect('/prototype-dev-baseline/mvp-1_2/add-note')
//   } else{
//     console.log('This is Newcastle');
//     res.redirect('/prototype-dev-baseline/mvp-1_2/added-details');
//   }
// });

// router.post('/you-have-added-details', function (req, res) {
//     console.log('Added details');
//     res.redirect('/prototype-dev-baseline/mvp-1_2/added-details')
// });

// router.post('/do-you-want-to-complete-call', function (req, res) {
//   res.redirect('/prototype-dev-baseline/mvp-1_2/check-call-completion')
// });

// router.post('/complete-call', function (req, res) {
//   var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
//   if (checkCallCompletion == 'Complete phone call'){
//     console.log('Comlete phone call');
//     res.redirect('/prototype-dev-baseline/mvp-1_2/call-completed')
//   } else{
//     res.redirect('/prototype-dev-baseline/mvp-1_2/what-benefits-discussed')
//   }

// });





// new routes for shorten call log



router.post('/add-call/what-benefits-discussed', function (req, res) {
  req.session.data['what-benefit-discussed'] = '';

  res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/what-benefits-discussed');
});

router.post('/add-call/questions-asked', function (req, res) {
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
  
  // if (req.session.data['what-benefit-discussed'].length>1){
  //   res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/questions-asked-esa');
  // } else{
  // res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/questions-asked');
  // }

  res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/questions-asked');
});


router.post('/add-call/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  
  req.session.data['npd_question-resolved']= '';
  req.session.data['npa_question-resolved']= '';
  req.session.data['ma_question-resolved']= '';
  req.session.data['chpa_question-resolved']= '';
  req.session.data['othQ_question-resolved']= '';
  res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/is-question-resolved');
});

router.post('/add-call/added-call-details', function (req, res) {
  
  res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/added-call-details');
});
 
router.post('/add-call/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/added-details');
  }
});

router.post('/add-call/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/added-details')
});

router.post('/add-call/do-you-want-to-complete-call', function (req, res) {
  res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/check-call-completion')
});

router.post('/add-call/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    console.log('Comlete phone call');
    res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/call-completed')
  } else{
    res.redirect('/prototype-dev-baseline/mvp-1_2/add-call/what-benefits-discussed')
  }

});



module.exports = router;
