const express = require('express')
const router = express.Router()

const moment = require('moment'); 
const data = require('./a/data.json');
const paymentData = require('./a/payment-data.json');
const paymentDataDiffentUserMVP1_0 = require('./a/different-type-contact-user/payment-data.json');
// Add your routes here - above the module.exports line

// for MVP 1.0 (both type of users)
router.get('/a/call-log-journey/unHappy_journey/noBenefit/added-call-info',function(req,res,next){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
next();
});

router.get('/a/different-type-contact-user/call-log-journey/unHappy_journey/noBenefit/added-details',function(req,res,next){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
next();
});

router.get('/a/contact-history-detail',function(req,res){
console.log('Details GET route is getting invoked',req.session.data.contextID);
const detailRec = data.contacts.filter((context) => {
context = req.session.data.contextID.includes(context.contextID);
return context;
});
req.session.data.detailRec = detailRec;
res.redirect('/prototype-sprint-wise/sprint23/opt2/contact-history-viewDetails/viewDetail');
// next();
});

router.get('/a/different-type-contact-user/contact-history-detail',function(req,res){
console.log('Details GET route is getting invoked',req.session.data.contextID);
const detailRec = data.contacts.filter((context) => {
context = req.session.data.contextID.includes(context.contextID);
return context;
});
req.session.data.detailRec = detailRec;
res.redirect('/prototype-sprint-wise/sprint23/opt2/contact-history-viewDetails/viewDetail');
// next();
});

router.get('/a/call-log-journey/added-details',function(req,res){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-details', {
notes:req.session.data.notes
});
});

router.get('/a/different-type-contact-user/call-log-journey/added-details',function(req,res){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/added-details', {
notes:req.session.data.notes
});
});


router.get('/a/call-log-journey/confirmation-complete-session',function(req,res,next){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
next();
});

router.get('/a/different-type-contact-user/call-log-journey/confirmation-complete-session',function(req,res,next){
let notes ='';
if(req.session.data.notes){
if(req.session.data.notes.length>0){
notes =req.session.data.notes + ". "+ req.session.data['addNote'];
}else{
notes =req.session.data['addNote'];
}
}else{
notes =req.session.data['addNote'];
}
req.session.data.notes = notes;
next();
});

// this is all about baseline MVP 1.0 - (Design iteration1)

// this is for NINO number
router.post('/a/index', function (req, res) {
req.session.data['What-type-of-contact'] = '';
req.session.data['Who-is-the-phone-call-with-ur8'] = '';
req.session.data['Who-is-the-engagement-with'] = '';
res.redirect('/prototype-sprint-wise/ur-8/a/index');
})

router.post('/a/why-checking-info', function (req, res) {
req.session.data['What-type-of-contact'] = '';
req.session.data['Who-is-the-phone-call-with-ur8'] = '';
req.session.data['Who-is-contact-with'] = '';
req.session.data['Who-is-the-engagement-with'] = '';
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
req.session.data.outcomePage ='';
req.session.data.notes = '';
req.session.data.tableValue = '';
req.session.data.outcomePage = '';

if (req.session.data['nino-number-ur-8'] == 'QQ123456Q' || req.session.data['nino-number-ur-8'] == 'qq123456q' || req.session.data['nino-number-ur-8'] == 'QQ 12 34 56 Q') {
// Send user to next page
console.log('This is correct')
// res.render('prototype-sprint-wise/ur-8/a/why-you-checking-benefit-Info');
res.render('/prototype-sprint-wise/ur-8/a/why-checking-Info');

} else {
var errMsg = "";
if (req.session.data['nino-number-ur-8'] == '' || req.session.data['nino-number-ur-8'] == undefined) {
errMsg = "Enter the customer's National Insurance number";
} else {
errMsg = "Enter the customer's National Insurance number in the correct format";
}
// Send user to error page
res.render('/prototype-sprint-wise/ur-8/a/showValidationMsg/error-nino-number', { "errMsg": errMsg });
}
})

// router.post('/a/who-is-calling-or-contacting', function (req, res) {
//     req.session.data['Who-is-the-phone-call-with-ur8'] = '';
//     req.session.data['Who-is-contact-with'] = '';
    
//     if (checkInfo == "Telephone call with") {
//       res.redirect('/prototype-sprint-wise/ur-8/a/call-with');
//     }     
//     if (req.session.data['What-type-of-contact'] == 'Contact with') {
//       res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with');
//     }
//     if (req.session.data['What-type-of-contact'] == 'View info only') {
//       res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
//     } //else {
//     //   res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
//     // }
//     });
// router.post('/a/who-is-calling-or-contacting', function (req, res) {
//   req.session.data['Who-is-the-phone-call-with-ur8'] = '';
//   req.session.data['Who-is-contact-with'] = '';

//   // var checkInformation = request.session.data['What-type-of-contact']
//   if (req.session.data['What-type-of-contact'] == "View only"){
//     res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
//   } else {
//     if (req.session.data['What-type-of-contact'] == "Telephone call with"){
//       res.redirect("/prototype-sprint-wise/ur-8/a/call-with");
//     } else {
//       res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with');
//     }
//   }
//   // res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
  
//   });


// router.post('/why-checking-info', function (req, res) {
// req.session.data['What-type-of-contact'] = '';
// req.session.data['Who-is-the-phone-call-with-ur8'] = '';
// req.session.data['Who-is-contact-with'] = '';
// req.session.data['Who-is-the-engagement-with'] = '';
// req.session.data['Do-you-want-to-complete-the-session'] = '';
// req.session.data['What-services-have-they-called-about'] = '';
// req.session.data['esaPayment'] = '';
// req.session.data['pipPayment'] = '';
// req.session.data['caPayment'] = '';
// req.session.data['ca-payment'] = '';
// req.session.data['esa-payment'] = '';
// req.session.data['pip-payment'] = '';
// req.session.data['esa-process-chasing'] = '';
// req.session.data['pip-process-chasing'] = '';
// req.session.data['ca-process-chasing'] = '';
// req.session.data['esa-coc'] = '';
// req.session.data['pip-coc'] = '';
// req.session.data['ca-coc'] = '';
// req.session.data['esa-general'] = '';
// req.session.data['pip-general'] = '';
// req.session.data['ca-general'] = '';
// req.session.data.outcomePage ='';
// req.session.data.notes = '';
// req.session.data.tableValue = '';
// req.session.data.outcomePage = '';
// res.render('prototype-sprint-wise/ur-8/a/why-you-checking-benefit-Info');
// })


  router.post('/a/call-with', function (req, res) {
    req.session.data['Who-is-the-phone-call-with-ur8'] = '';
    req.session.data['Who-is-contact-with'] = '';

    if (req.session.data['What-type-of-contact'] == "Telephone call with"){
      res.redirect("/prototype-sprint-wise/ur-8/a/call-with");
    } else {
      if (req.session.data['What-type-of-contact'] == "Contact with"){
        res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with');
      } else {
        res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
      }
    }
    // res.redirect('/prototype-sprint-wise/ur-8/a/view-only-user/home');
    
    });

// router.post('/a/view-only-user/home', function (req, res) {
//     if (req.session.data['why-to-check-customer-inforomaton'] == '') { 
//     res.redirect('back');
//     } else {
//     if (req.session.data['why-to-check-customer-inforomaton'] == 'To view information only') { 
//     res.render('prototype-sprint-wise/ur-8/a/view-only-user/home');   
//     } else {
//     res.redirect('/prototype-sprint-wise/ur-8/a/contact-type')
//     } 
//     }
// });

// router.post('/a/view-only-user/home', function (req, res) {
//   if (req.session.data['why-to-check-customer-inforomaton'] == 'To view information only') { 
//   res.render('prototype-sprint-wise/ur-8/a/view-only-user/home');   
//   } else {
//     if (req.session.data['why-to-check-customer-inforomaton'] == '') { 
//       res.redirect('back');
//       } else {
//         res.redirect('/prototype-sprint-wise/ur-8/a/contact-type')
//       }
//     }
// });
    
router.post('/a/home', function (req, res) {
var contactType = req.session.data['Who-is-the-phone-call-with-ur8'];

if (req.session.data['Who-is-the-phone-call-with-ur8'] == '' ) {
// Send user to error page
// res.redirect('/prototype-sprint-wise/ur-8/a/call-with');
res.redirect('back');
} else{
if (req.session.data['Who-is-the-phone-call-with-ur8'] == 'someone else') {
req.session.data['Who-is-the-engagement-with'] = '';
}
// var b = "with";
// req.session.data['Who-is-the-phone-call-with-ur8'] = b + " " + contactType;
res.redirect('/prototype-sprint-wise/ur-8/a/home');  
}
})

router.post('/a/different-type-contact-user/home', function (req, res) {

var contactType = req.session.data['Who-is-contact-with'];

if (req.session.data['Who-is-contact-with'] == '') {
// Send user to error page
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-with');
} else{
if (req.session.data['Who-is-contact-with'] == 'someone else') {
req.session.data['Who-is-the-engagement-with'] = '';
}
// var b = "with";
// req.session.data['Who-is-contact-with'] = b + " " + contactType;
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/home');
}
})

// check on pressing complete session button
router.post('/a/call-log-journey/confirmation-complete-session', function (req, res) {
// console.log('Value of the session varaible: --------------------------------->',req.session.data['What-services-have-they-called-about']);
if (req.session.data['What-services-have-they-called-about'].includes('esa')) {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session');
}else if (req.session.data['What-services-have-they-called-about'].includes('pip')) {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session');
}if (req.session.data['What-services-have-they-called-about'].includes('ca')) {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session');
}else {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/no-contact-added');
}
});

// this is for radio selection for Session complete
router.post('/a/engagement-log-journey/add-note', function (req, res) {

var addMore = req.session.data['add-another'];

// Check whether the variable matches a condition
if (addMore == "Yes")  {
// Send user to next page
res.redirect('/prototype-sprint-wise/ur-8/a/engagement-log-journey/add-note');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/engagement-log-journey/call-details-added-withoutNote');
}
});

// this is for radio selection for Session complete
router.post('/a/engagement-log-journey/session-completed', function (req, res) {
var completeSession2 = req.session.data['Do-you-want-to-complete-the-session-opt2']

// Check whether the variable matches a condition
if (completeSession2 == "Yes") {
// Send user to next page
res.redirect('/prototype-sprint-wise/ur-8/a/engagement-log-journey/what-service-called-about');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/engagement-log-journey/session-completed');
}

});

router.post('/a/contact-history-ui',function(req,res){
res.render("/prototype-sprint-wise/ur-8/a/contact-history")
})

router.post('/a/call-log-journey/selectBenefit', function(req, res) {
req.session.data['whichBenefitDiscussed'] = '';
req.session.data['questionAsk'] = '';
req.session.data['npd_wasQuestionResolved'] = '';
req.session.data['npa_wasQuestionResolved'] = '';
req.session.data['ma_wasQuestionResolved'] = '';
req.session.data['chpa_wasQuestionResolved'] = '';
req.session.data['othQ_wasQuestionResolved'] = '';
req.session.data['addNote'] = '';

if(req.session.data.outcomePage === ''){
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/add-another-benefit-for-call');
}

})

router.post('/a/call-log-journey/selectQuestion', function(req, res) {
let outcomePageData = [];
outcomePageData = req.session.data.outcomePage ? req.session.data.outcomePage : [];
if (req.session.data['whichBenefitDiscussed'] == '') {
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error")

} else if (req.session.data['whichBenefitDiscussed'] == 'No benefit') {
  outcomePageData.push({"benefit":"No benefit",
  "question":"Does not apply",
  "result":"Does not apply"
});
req.session.data.outcomePage =outcomePageData;
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/noBenefit/what-did-you-discuss")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/questions-asked")
} 
})

// Try for multiple benefit 21 june
// router.post('/a/call-log-journey/selectQuestion', function(req, res) {

//   let outcomePageData = [];
//   outcomePageData = req.session.data.outcomePage ? req.session.data.outcomePage : [];

//   if (req.session.data['whichBenefitDiscussed'] == '') {
//   res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error")
  
//   } else if (req.session.data['whichBenefitDiscussed'] == 'No benefit') {
//     outcomePageData.push({"benefit":"No benefit",
//     "question":"Does not apply",
//     "result":"Does not apply"
//   });
//   req.session.data.outcomePage =outcomePageData;
//   res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/noBenefit/what-did-you-discuss")
//   } else {
//     var pageLength = '';
//     var isAa = req.session.data['whichBenefitDiscussed'].includes('aa');
//     var isEsa = req.session.data['whichBenefitDiscussed'].includes('esa');
//     var isPip = req.session.data['whichBenefitDiscussed'].includes('pip');
//     if (req.session.data['whichBenefitDiscussed'].length == 1) {
//       pageLength = 'Services 1 of 1';
//     } else if (req.session.data['whichBenefitDiscussed'].length == 2) {
//       pageLength = 'Services 1 of 2';
//     } else {
//       pageLength = 'Services 1 of 3';
//     }

//     if (isAa && isEsa) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/aa-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked',
//         "pageLength": pageLength,
//       });
//     }
//     if (isAa && isPip) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/aa-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/pip-questions-asked',
//         "pageLength": pageLength,
//       });
//     }
//     if (isEsa && isPip) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/pip-questions-asked',
//         "pageLength": pageLength,
//       });
//     }
//     if (isAa && !isEsa && !isPip) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/aa-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes',
//         "pageLength": pageLength,
//       });
//     }
//     if (!isAa && isEsa && !isPip) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes',
//         "pageLength": pageLength,
//       });
//     }

//     if (!isAa && !isEsa && isPip) {
//       res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/pip-questions-asked', {
//         "nextUrl": '/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes',
//         "pageLength": pageLength,
//       });
//     }

//   } 
//   })

router.post('/a/call-log-journey/questions-outcomes', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isOthQ = 'govuk-!-display-none';

if (req.session.data['questionAsk'].includes('Something else')) {
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/questions-outcomes-for-something-else")
} else {
if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Other questions')) {
  isOthQ = 'govuk-!-display-block';
  }
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/questionAnswered', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
})
}
})

router.post('/a/call-log-journey/added-call-details', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isOthQ = 'govuk-!-display-none';
var isSE = 'govuk-!-display-none';
var isNpdResolved = '';
var isNpaResolved = '';
var isMaRresolved = '';
var isRfchRresolved = '';
var isOthQresolved = '';

if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = '';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = '';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = '';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = '';
}
if(req.session.data['questionAsk'].includes('Other questions')) {
  isOthQ = '';
}
if(req.session.data['questionAsk'].includes('Something else')) {
isSE = '';
}
if(req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
isNpdResolved = 'govuk-tag--grey';
} 
if(req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
isNpaResolved = 'govuk-tag--grey';
}
if(req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
isMaRresolved = 'govuk-tag--grey';
}
if(req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
isRfchRresolved = 'govuk-tag--grey';
}
if(req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')) {
isOthQresolved = 'govuk-tag--grey';
}

// if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
if ((req.session.data['npd_wasQuestionResolved'].includes('Not resolved') || req.session.data['npd_wasQuestionResolved'].includes('Resolved')) || (req.session.data['npa_wasQuestionResolved'].includes('Not resolved') || req.session.data['npa_wasQuestionResolved'].includes('Resolved')) || (req.session.data['ma_wasQuestionResolved'].includes('Not resolved') || req.session.data['ma_wasQuestionResolved'].includes('Resolved')) || (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') || req.session.data['chpa_wasQuestionResolved'].includes('Resolved')) || (req.session.data['othQ_wasQuestionResolved'].includes('Not resolved') || req.session.data['othQ_wasQuestionResolved'].includes('Resolved'))) {
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
"isSE": isSE,
"isNpdResolved": isNpdResolved,
"isNpaResolved": isNpaResolved,
"isMaRresolved": isMaRresolved,
"isRfchRresolved": isRfchRresolved,
"isOthQresolved": isOthQresolved,
})

} else {
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
"isSE": isSE,
"isNpdResolved": isNpdResolved,
"isNpaResolved": isNpaResolved,
"isMaRresolved": isMaRresolved,
"isRfchRresolved": isRfchRresolved,
"isOthQresolved": isOthQresolved,
});
}

})

router.post('/a/call-log-journey/checkAnswer2', function(req, res) {
var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isOthQ = 'govuk-!-display-none';
var isSE = 'govuk-!-display-none';
var isNpdResolved = '';
var isNpaResolved = '';
var isMaRresolved = '';
var isRfchRresolved = '';
var isOthQresolved = '';

if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = '';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = '';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = '';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = '';
}
if(req.session.data['questionAsk'].includes('Other questions')) {
  isOthQ = '';
  }
if(req.session.data['questionAsk'].includes('Something else')) {
isSE = '';
}
if(req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
isNpdResolved = 'govuk-tag--grey';
} 
if(req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
isNpaResolved = 'govuk-tag--grey';
}
if(req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
isMaRresolved = 'govuk-tag--grey';
}
if(req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
isRfchRresolved = 'govuk-tag--grey';
}
if(req.session.data['othQ_wasQuestionResolved'].includes('Not resolved')) {
  isOthQresolved = 'govuk-tag--grey';
  }


//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
"isSE": isSE,
"isNpdResolved": isNpdResolved,
"isNpaResolved": isNpaResolved,
"isMaRresolved": isMaRresolved,
"isRfchRresolved": isRfchRresolved,
"isOthQresolved": isOthQresolved,
})
})

// check answer for something else question type
router.post('/a/call-log-journey/added-call-details-for-something-else', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isOthQ = 'govuk-!-display-none';
var isSE = 'govuk-!-display-none';
var isSERresolved = '';

if(req.session.data['questionAsk'].includes('Something else')) {
isSE = '';
}
if(req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')) {
isSERresolved = 'govuk-tag--grey';
}

if (req.session.data['smelse_wasQuestionResolved'].includes('Resolved') || req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')) {
// console.log('Rahul')
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-call-details', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
"isSE": isSE,
"isSERresolved": isSERresolved,
})

} else {
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/somethingElse-Error', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isOthQ": isOthQ,
"isSE": isSE,
"isSERresolved": isSERresolved,
// "isNpdResolved": isNpdResolved,
// "isNpaResolved": isNpaResolved,
// "isMaRresolved": isMaRresolved,
// "isRfchRresolved": isRfchRresolved,
});
}

})

router.post('/a/call-log-journey/check-for-add-note', function(req, res) {
//All variable render here
let outcomePageData = [];
outcomePageData = req.session.data.outcomePage ? req.session.data.outcomePage : [];
req.session.data['questionAsk'].map((item)=>{
if(item === "Next payment date"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['npd_wasQuestionResolved']
});
}if(item === "Next payment amount"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['npa_wasQuestionResolved']
});
}if(item === "Missing payment"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['ma_wasQuestionResolved']
});
}if(item === "Change in payment amount"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['chpa_wasQuestionResolved']
});
}if(item === "Other questions"){
  outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
  "question":item,
  "result":req.session.data['othQ_wasQuestionResolved']
  });
}if(item === "Something else"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['smelse_wasQuestionResolved']
});
}
});
req.session.data.outcomePage =outcomePageData;
if (req.session.data['discussAnthingElse'] == 'Yes' ) {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/add-note');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/added-details');
}
})


router.get('/a/call-log-journey/added-details', function(req, res) {

res.render('prototype-sprint-wise/ur-8/a/call-log-journey/added-details', {
"outcomePage":req.session.data.outcomePage,
});
})

// /add view already added note
router.post('/a/call-log-journey/add-another-benefit-for-call', function(req, res) {

res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/add-another-benefit-for-call")

})

 // check phone call progress and complete confirmation.
 router.post('/a/call-log-journey/confirm_Complete_PhoneCall', function (req, res) {
    if(req.session.data.outcomePage === ''){
      res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/no-contact-added');
    } else {
      res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/add-more-reasons-for-call');
    }
  
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session")
    });
  
  // update note before complete phone call
  router.post('/a/call-log-journey/updateNote_beforeCompleteCall', function (req, res) {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/confirmation-complete-session")
    });

    // Complete session
router.post('/a/call-log-journey/check-phoneCall-completed', function (req, res) {
    // Check whether the variable matches a condition
    var checkPhoneCallCompleted = req.session.data['Do-you-want-to-complete-the-telephony-session'];
    if (checkPhoneCallCompleted == 'Yes') {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed");
    } 
    if (checkPhoneCallCompleted == 'No') {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/call-completed");
    } 
    else {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/unHappy_journey/showValidation/confirmation-complete-session-Error");
    }
    
    });
  
  // Complete session
  router.post('/a/call-log-journey/phoneCall-completed', function (req, res) {
    var completeSession = req.session.data['Do-you-want-to-complete-the-session-opt2']
    // Check whether the variable matches a condition
    if (completeSession == "Yes") {
      // Send user to next page
      res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/selectBenefit")
    } else {
      res.redirect('/prototype-sprint-wise/ur-8/a/call-log-journey/session-completed');
    }
  
  });

router.post('/a/addAnotherBenefit', function(req, res) {
req.session.data['whichBenefitDiscussed'] = '';
req.session.data['questionAsk'] = '';
req.session.data['npd_wasQuestionResolved'] = '';
req.session.data['npa_wasQuestionResolved'] = '';
req.session.data['ma_wasQuestionResolved'] = '';
req.session.data['chpa_wasQuestionResolved'] = '';
req.session.data['othQ_wasQuestionResolved'] = '';
req.session.data['addNote'] = '';
if (req.session.data['addAnotherBenefit'] == 'Yes') {
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/home")

}
})

// Unhappy scenario condition - add another reason?
router.post('/a/goToHome', function(req, res) {

if (req.session.data['unHappyAddreason'] == 'Yes') {
res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/benefits-discussed")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/home")

}
})


// Filter for payment history and contact history (Bhavin)

// Payment history 
router.post('/a/payment',function(req,res){
let paymentTableData;
if (req.body.benefit !== undefined && req.body.benefit !== '' && req.body.benefit !== "_unchecked"){
paymentTableData = paymentData.data.filter((context) => {
context = req.body.benefit.includes(context.benefit);
return context;
});
req.session.data.paymentTableData = paymentTableData;
req.session.data.paymentTableFilterEsa = req.body.benefit.includes('Employment and Support Allowance')?true:false;
req.session.data.paymentTableFilterCa = req.body.benefit.includes('Carer\'s Allowance')?true:false;
req.session.data.paymentTableFilterPip = req.body.benefit.includes('Personal Independence Payment')?true:false;
}else{
req.session.data.paymentTableFilterEsa = false;
req.session.data.paymentTableFilterCa = false;
req.session.data.paymentTableFilterPip = false;
req.session.data.paymentTableData = paymentData.data;
}
res.redirect('payment#history');
});

// Contact history filter code start here
router.post('/a/contact-history',function(req,res){

let fromDate; let toDate;
if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
fromDate = new Date(`${req.body['from-date-month']}/${req.body['from-date-day']}/${req.body['from-date-year']}`);
req.session.data.fromDay = parseInt(req.body['from-date-day']);
req.session.data.fromMonth = parseInt(req.body['from-date-month']);
req.session.data.fromYear = parseInt(req.body['from-date-year']);
}
if (req.body['to-date-day'] !== undefined && req.body['to-date-day'] !== '') {
toDate = new Date(`${req.body['to-date-month']}/${req.body['to-date-day']}/${req.body['to-date-year']} 23:59:59`);
req.session.data.toDay = parseInt(req.body['to-date-day']);
req.session.data.toMonth = parseInt(req.body['to-date-month']);
req.session.data.toYear = parseInt(req.body['to-date-year']);
}
let tableValue = data.contacts.filter((context) => {
if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
context = new Date(context.createdDate) >= fromDate && new Date(context.createdDate) <= toDate;
}
return context;
});
if (req.body.benefit !== undefined && req.body.benefit !== '' && req.body.benefit !== "_unchecked"){
// console.log('Executing benefit logic: ',req.body.benefit);
tableValue = tableValue.filter((context) => {
context = req.body.benefit.includes(context.benefit);
return context;
});
}
tableValue.map((item)=>{
item.createdDate = moment(new Date(item.createdDate)).format('llll');
});
req.session.data.tableValue =tableValue;
req.session.data.fromDay = req.body['from-date-day']?req.body['from-date-day']:'';
req.session.data.fromMonth = req.body['from-date-month']?req.body['from-date-month']:'';
req.session.data.fromYear = req.body['from-date-year']?req.body['from-date-year']:'';

req.session.data.toDay = req.body['to-date-day']?req.body['to-date-day']:'';
req.session.data.toMonth = req.body['to-date-month']?req.body['to-date-month']:'';
req.session.data.toYear = req.body['to-date-year']?req.body['to-date-year']:'';

req.session.data.tableFilterEsa = req.body.benefit.includes('Employment and support Allowance')?true:false;
req.session.data.tableFilterJa = req.body.benefit.includes('Jobseeker Allowance')?true:false;
req.session.data.tableFilterPip = req.body.benefit.includes('Personal Independence Payment')?true:false;

req.session.data.tableFilterNpd = req.body.querySubContext.includes('Next payment date')?true:false;
req.session.data.tableFilterNpa = req.body.querySubContext.includes('Next payment amount')?true:false;
req.session.data.tableFilterMp = req.body.querySubContext.includes('Missing payment')?true:false;
res.redirect('contact-history')
})

// Contact history filter code start here
router.post('/a/different-type-contact-user/contact-history',function(req,res){

  let fromDate; let toDate;
  if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
  fromDate = new Date(`${req.body['from-date-month']}/${req.body['from-date-day']}/${req.body['from-date-year']}`);
  req.session.data.fromDay = parseInt(req.body['from-date-day']);
  req.session.data.fromMonth = parseInt(req.body['from-date-month']);
  req.session.data.fromYear = parseInt(req.body['from-date-year']);
  }
  if (req.body['to-date-day'] !== undefined && req.body['to-date-day'] !== '') {
  toDate = new Date(`${req.body['to-date-month']}/${req.body['to-date-day']}/${req.body['to-date-year']} 23:59:59`);
  req.session.data.toDay = parseInt(req.body['to-date-day']);
  req.session.data.toMonth = parseInt(req.body['to-date-month']);
  req.session.data.toYear = parseInt(req.body['to-date-year']);
  }
  let tableValue = data.contacts.filter((context) => {
  if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
  context = new Date(context.createdDate) >= fromDate && new Date(context.createdDate) <= toDate;
  }
  return context;
  });
  if (req.body.benefit !== undefined && req.body.benefit !== '' && req.body.benefit !== "_unchecked"){
  // console.log('Executing benefit logic: ',req.body.benefit);
  tableValue = tableValue.filter((context) => {
  context = req.body.benefit.includes(context.benefit);
  return context;
  });
  }
  tableValue.map((item)=>{
  item.createdDate = moment(new Date(item.createdDate)).format('llll');
  });
  req.session.data.tableValue =tableValue;
  req.session.data.fromDay = req.body['from-date-day']?req.body['from-date-day']:'';
  req.session.data.fromMonth = req.body['from-date-month']?req.body['from-date-month']:'';
  req.session.data.fromYear = req.body['from-date-year']?req.body['from-date-year']:'';
  
  req.session.data.toDay = req.body['to-date-day']?req.body['to-date-day']:'';
  req.session.data.toMonth = req.body['to-date-month']?req.body['to-date-month']:'';
  req.session.data.toYear = req.body['to-date-year']?req.body['to-date-year']:'';
  
  req.session.data.tableFilterEsa = req.body.benefit.includes('Employment and support Allowance')?true:false;
  req.session.data.tableFilterJa = req.body.benefit.includes('Jobseeker Allowance')?true:false;
  req.session.data.tableFilterPip = req.body.benefit.includes('Personal Independence Payment')?true:false;
  res.redirect('contact-history')
  })
  
  // View only user --- Contact history filter code start here
  router.post('/a/view-only-user/contact-history',function(req,res){
  
  let fromDate; let toDate;
  if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
  fromDate = new Date(`${req.body['from-date-month']}/${req.body['from-date-day']}/${req.body['from-date-year']}`);
  req.session.data.fromDay = parseInt(req.body['from-date-day']);
  req.session.data.fromMonth = parseInt(req.body['from-date-month']);
  req.session.data.fromYear = parseInt(req.body['from-date-year']);
  }
  if (req.body['to-date-day'] !== undefined && req.body['to-date-day'] !== '') {
  toDate = new Date(`${req.body['to-date-month']}/${req.body['to-date-day']}/${req.body['to-date-year']} 23:59:59`);
  req.session.data.toDay = parseInt(req.body['to-date-day']);
  req.session.data.toMonth = parseInt(req.body['to-date-month']);
  req.session.data.toYear = parseInt(req.body['to-date-year']);
  }
  let tableValue = data.contacts.filter((context) => {
  if (req.body['from-date-day'] !== undefined && req.body['from-date-day'] !== '') {
  context = new Date(context.createdDate) >= fromDate && new Date(context.createdDate) <= toDate;
  }
  return context;
  });
  if (req.body.benefit !== undefined && req.body.benefit !== '' && req.body.benefit !== "_unchecked"){
  // console.log('Executing benefit logic: ',req.body.benefit);
  tableValue = tableValue.filter((context) => {
  context = req.body.benefit.includes(context.benefit);
  return context;
  });
  }
  tableValue.map((item)=>{
  item.createdDate = moment(new Date(item.createdDate)).format('llll');
  });
  req.session.data.tableValue =tableValue;
  req.session.data.fromDay = req.body['from-date-day']?req.body['from-date-day']:'';
  req.session.data.fromMonth = req.body['from-date-month']?req.body['from-date-month']:'';
  req.session.data.fromYear = req.body['from-date-year']?req.body['from-date-year']:'';
  
  req.session.data.toDay = req.body['to-date-day']?req.body['to-date-day']:'';
  req.session.data.toMonth = req.body['to-date-month']?req.body['to-date-month']:'';
  req.session.data.toYear = req.body['to-date-year']?req.body['to-date-year']:'';
  
  req.session.data.tableFilterEsa = req.body.benefit.includes('Employment and support Allowance')?true:false;
  req.session.data.tableFilterJa = req.body.benefit.includes('Jobseeker Allowance')?true:false;
  req.session.data.tableFilterPip = req.body.benefit.includes('Personal Independence Payment')?true:false;
  res.redirect('contact-history')
  })

// Payment history 
router.post('/a/different-type-contact-user/payment',function(req,res){
let paymentTableData;
if (req.body.benefit !== undefined && req.body.benefit !== '' && req.body.benefit !== "_unchecked"){
paymentTableData = paymentDataDiffentUserMVP1_0.data.filter((context) => {
context = req.body.benefit.includes(context.benefit);
return context;
});
req.session.data.paymentTableData = paymentTableData;
req.session.data.paymentTableFilterEsa = req.body.benefit.includes('Employment and Support Allowance')?true:false;
req.session.data.paymentTableFilterCa = req.body.benefit.includes('Carer\'s Allowance')?true:false;
req.session.data.paymentTableFilterPip = req.body.benefit.includes('Personal Independence Payment')?true:false;
}else{
req.session.data.paymentTableFilterEsa = false;
req.session.data.paymentTableFilterCa = false;
req.session.data.paymentTableFilterPip = false;
req.session.data.paymentTableData = paymentDataDiffentUserMVP1_0.data;
}
res.redirect('payment#history');
});



// Contact log details fro A different contact type

router.post('/a/different-type-contact-user/call-log-journey/confirmation-complete-session', function (req, res) {
// console.log('Value of the session varaible: --------------------------------->',req.session.data['What-services-have-they-called-about']);
if (req.session.data['What-services-have-they-called-about'].includes('esa')) {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session');
}else if (req.session.data['What-services-have-they-called-about'].includes('pip')) {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session');
}if (req.session.data['What-services-have-they-called-about'].includes('ca')) {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session');
}else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/no-contact-added');
}
});
// this is for radio selection for Session complete
router.post('/a/different-type-contact-user/engagement-log-journey/add-note', function (req, res) {

var addMore = req.session.data['add-another'];

// Check whether the variable matches a condition
if (addMore == "Yes")  {
// Send user to next page
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/add-note');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/call-details-added-withoutNote');
}
});

// this is for radio selection for Session complete
router.post('/a/different-type-contact-user/engagement-log-journey/session-completed', function (req, res) {
var completeSession2 = req.session.data['Do-you-want-to-complete-the-session-opt2']

// Check whether the variable matches a condition
if (completeSession2 == "Yes") {
// Send user to next page
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/what-service-called-about');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/engagement-log-journey/session-completed');
}

});

router.post('/a/different-type-contact-user/contact-history-ui',function(req,res){
res.render("/prototype-sprint-wise/ur-8/a/different-type-contact-user/contact-history")
})

router.post('/a/different-type-contact-user/call-log-journey/selectBenefit', function(req, res) {
req.session.data['whichBenefitDiscussed'] = '';
req.session.data['questionAsk'] = '';
req.session.data['npd_wasQuestionResolved'] = '';
req.session.data['npa_wasQuestionResolved'] = '';
req.session.data['ma_wasQuestionResolved'] = '';
req.session.data['chpa_wasQuestionResolved'] = '';
req.session.data['addNote'] = '';

if(req.session.data.outcomePage === ''){
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call');
}

})

router.post('/a/different-type-contact-user/call-log-journey/selectQuestion', function(req, res) {

let outcomePageData = [];
outcomePageData = req.session.data.outcomePage ? req.session.data.outcomePage : [];
// Send user to error page
if (req.session.data['whichBenefitDiscussed'] == '') {
// errMsg_Benefit = "Select which benefit did you discuss with the caller";
// res.render('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error', { "errMsg_Benefit": errMsg_Benefit });
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/selectBenefit-Error")

} else if (req.session.data['whichBenefitDiscussed'] == 'A different benefit') {
outcomePageData.push({"benefit":"A different benefit",
"question":"Does not apply",
"result":"Does not apply"
});
req.session.data.outcomePage =outcomePageData;
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/noBenefit/what-was-contact-about-notes")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/what-was-contact-about")
} 
})

router.post('/a/different-type-contact-user/call-log-journey/wasQuestionResolved', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';

if (req.session.data['questionAsk'].includes('Something else')) {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/noQuestion/askedClQ")
} else {
if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = 'govuk-!-display-block';
}

//All variable render here
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/questionAnswered', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
})
}
})


router.post('/a/different-type-contact-user/call-log-journey/check-details', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';

if (req.session.data['questionAsk'].includes('Something else')) {
// res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/noQuestion/askedClQ")
// res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-Note")
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-details")
} else {
if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = 'govuk-!-display-block';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = 'govuk-!-display-block';
}

//All variable render here
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/check-details', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
})
}
})


// router.post('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', function(req, res) {

//     var isNpd = 'govuk-!-display-none';
//     var isNpa = 'govuk-!-display-none';
//     var isMp = 'govuk-!-display-none';
//     var isRfch = 'govuk-!-display-none';
//     var isSE = 'govuk-!-display-none';
//     var isNpdResolved = '';
//     var isNpaResolved = '';
//     var isMaRresolved = '';
//     var isRfchRresolved = '';

//     if(req.session.data['questionAsk'].includes('Next payment date')) {
//       isNpd = '';
//     }
//     if(req.session.data['questionAsk'].includes('Next payment amount')) {
//       isNpa = '';
//     }
//     if(req.session.data['questionAsk'].includes('Missing payment')) {
//       isMp = '';
//     }
//     if(req.session.data['questionAsk'].includes('Change in payment amount')) {
//       isRfch = '';
//     }
//     if(req.session.data['questionAsk'].includes('Something else')) {
//       isSE = '';
//     }
//     if(req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
//       isNpdResolved = 'govuk-tag--grey';
//     } 
//     if(req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
//       isNpaResolved = 'govuk-tag--grey';
//     }
//     if(req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
//       isMaRresolved = 'govuk-tag--grey';
//     }
//     if(req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
//       isRfchRresolved = 'govuk-tag--grey';
//     }

//     // if (req.session.data['npd_wasQuestionResolved'] == '' || req.session.data['npa_wasQuestionResolved'] =='' || req.session.data['ma_wasQuestionResolved'] =='' || req.session.data['chpa_wasQuestionResolved'] =='') {
//     if ((req.session.data['npd_wasQuestionResolved'].includes('Not resolved') || req.session.data['npd_wasQuestionResolved'].includes('Resolved')) || (req.session.data['npa_wasQuestionResolved'].includes('Not resolved') || req.session.data['npa_wasQuestionResolved'].includes('Resolved')) || (req.session.data['ma_wasQuestionResolved'].includes('Not resolved') || req.session.data['ma_wasQuestionResolved'].includes('Resolved')) || (req.session.data['chpa_wasQuestionResolved'].includes('Not resolved') || req.session.data['chpa_wasQuestionResolved'].includes('Resolved'))) {
//       //All variable render here
//         res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', {
//           "isNpd": isNpd,
//           "isNpa": isNpa,
//           "isMp": isMp,
//           "isRfch": isRfch,
//           "isSE": isSE,
//           "isNpdResolved": isNpdResolved,
//           "isNpaResolved": isNpaResolved,
//           "isMaRresolved": isMaRresolved,
//           "isRfchRresolved": isRfchRresolved,
//           })

//     } else {
//       //All variable render here
//       res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/questionAnswered-Error', {
//         "isNpd": isNpd,
//         "isNpa": isNpa,
//         "isMp": isMp,
//         "isRfch": isRfch,
//         "isSE": isSE,
//         "isNpdResolved": isNpdResolved,
//         "isNpaResolved": isNpaResolved,
//         "isMaRresolved": isMaRresolved,
//         "isRfchRresolved": isRfchRresolved,
//         });
//     }

// })

router.post('/a/different-type-contact-user/call-log-journey/checkAnswer2', function(req, res) {
var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isSE = 'govuk-!-display-none';
var isNpdResolved = '';
var isNpaResolved = '';
var isMaRresolved = '';
var isRfchRresolved = '';

if(req.session.data['questionAsk'].includes('Next payment date')) {
isNpd = '';
}
if(req.session.data['questionAsk'].includes('Next payment amount')) {
isNpa = '';
}
if(req.session.data['questionAsk'].includes('Missing payment')) {
isMp = '';
}
if(req.session.data['questionAsk'].includes('Change in payment amount')) {
isRfch = '';
}
if(req.session.data['questionAsk'].includes('Something else')) {
isSE = '';
}
if(req.session.data['npd_wasQuestionResolved'].includes('Not resolved')) {
isNpdResolved = 'govuk-tag--grey';
} 
if(req.session.data['npa_wasQuestionResolved'].includes('Not resolved')) {
isNpaResolved = 'govuk-tag--grey';
}
if(req.session.data['ma_wasQuestionResolved'].includes('Not resolved')) {
isMaRresolved = 'govuk-tag--grey';
}
if(req.session.data['chpa_wasQuestionResolved'].includes('Not resolved')) {
isRfchRresolved = 'govuk-tag--grey';
}


//All variable render here
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isSE": isSE,
"isNpdResolved": isNpdResolved,
"isNpaResolved": isNpaResolved,
"isMaRresolved": isMaRresolved,
"isRfchRresolved": isRfchRresolved,
})
})

// check answer for something else question type
router.post('/a/different-type-contact-user/call-log-journey/checkAnswerForsomethingElse', function(req, res) {

var isNpd = 'govuk-!-display-none';
var isNpa = 'govuk-!-display-none';
var isMp = 'govuk-!-display-none';
var isRfch = 'govuk-!-display-none';
var isSE = 'govuk-!-display-none';
var isSERresolved = '';

if(req.session.data['questionAsk'].includes('Something else')) {
isSE = '';
}
if(req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')) {
isSERresolved = 'govuk-tag--grey';
}

if (req.session.data['smelse_wasQuestionResolved'].includes('Resolved') || req.session.data['smelse_wasQuestionResolved'].includes('Not resolved')) {
// console.log('Rahul')
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/checkAnswer', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isSE": isSE,
"isSERresolved": isSERresolved,
})

} else {
console.log('Neha')
//All variable render here
res.render('prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/unHappy_journey/showValidation/somethingElse-Error', {
"isNpd": isNpd,
"isNpa": isNpa,
"isMp": isMp,
"isRfch": isRfch,
"isSE": isSE,
"isSERresolved": isSERresolved,
// "isNpdResolved": isNpdResolved,
// "isNpaResolved": isNpaResolved,
// "isMaRresolved": isMaRresolved,
// "isRfchRresolved": isRfchRresolved,
});
}

})

router.post('/a/different-type-contact-user/call-log-journey/check-for-add-note', function(req, res) {
//All variable render here
let outcomePageData = [];
outcomePageData = req.session.data.outcomePage ? req.session.data.outcomePage : [];
req.session.data['questionAsk'].map((item)=>{
if(item === "Next payment date"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['npd_wasQuestionResolved']
});
}if(item === "Next payment amount"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['npa_wasQuestionResolved']
});
}if(item === "Missing payment"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['ma_wasQuestionResolved']
});
}if(item === "Change in payment amount"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['chpa_wasQuestionResolved']
});
}if(item === "Something else"){
outcomePageData.push({"benefit":req.session.data['whichBenefitDiscussed'],
"question":item,
"result":req.session.data['smelse_wasQuestionResolved']
});
}
});
req.session.data.outcomePage =outcomePageData;
if (req.session.data['discussAnthingElse'] == 'Yes' ) {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-note');
} else {
res.render('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/added-details', {
"outcomePage":req.session.data.outcomePage,
});
}
})

// /add view already added note
router.post('/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call', function(req, res) {

res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-another-benefit-for-call")

})

// check phone call progress and complete confirmation.
router.post('/a/different-type-contact-user/call-log-journey/confirm_Complete_PhoneCall', function (req, res) {
if(req.session.data.outcomePage === ''){
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/no-contact-added');
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-details-option');
}

res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/add-details-option")
});

// update note before complete phone call
router.post('/a/different-type-contact-user/call-log-journey/updateNote_beforeCompleteCall', function (req, res) {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/confirmation-complete-session")
});

// Complete session
router.post('/a/different-type-contact-user/call-log-journey/phoneCall-completed', function (req, res) {
var completeSession = req.session.data['Do-you-want-to-complete-the-session-opt2']
// Check whether the variable matches a condition
if (completeSession == "Yes") {
// Send user to next page
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for")
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/index');
}

});

// Start New Session -Ask before Complete phone call

router.post('/a/start-new-session', function (req, res) {
var completeSession = req.session.data['add-callDetails'];
// Check whether the variable matches a condition
if (completeSession == "No") {
// Send user to next page
res.redirect("/prototype-sprint-wise/ur-8/a/index");
} else {
res.redirect('/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for');
}

});

router.post('/a/different-type-contact-user/addAnotherBenefit', function(req, res) {
req.session.data['whichBenefitDiscussed'] = '';
req.session.data['questionAsk'] = '';
req.session.data['npd_wasQuestionResolved'] = '';
req.session.data['npa_wasQuestionResolved'] = '';
req.session.data['ma_wasQuestionResolved'] = '';
req.session.data['chpa_wasQuestionResolved'] = '';
req.session.data['addNote'] = '';
if (req.session.data['addAnotherBenefit'] == 'Yes') {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/home")

}
})

// Unhappy scenario condition - add another reason?
router.post('/a/different-type-contact-user/goToHome', function(req, res) {

if (req.session.data['unHappyAddreason'] == 'Yes') {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/call-log-journey/benefit-adding-details-for")
} else {
res.redirect("/prototype-sprint-wise/ur-8/a/different-type-contact-user/home")

}
})


router.post('/a/call-log-journey/do-you-want-to-complete-call', function(req, res) {

  res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/check-call-completion")
  
  })

// Do you want to complete the call?
router.post('/a/call-log-journey/call-completed', function (req, res) {
  // Check whether the variable matches a condition
  var checkPhoneCallCompleted = req.session.data['Do you want to complete the call'];
  if (checkPhoneCallCompleted == 'back to home page') {
  res.redirect("/prototype-sprint-wise/ur-8/a/home");
  } else {
    res.redirect("/prototype-sprint-wise/ur-8/a/call-log-journey/call-completed");
  }
  });


  router.post('/prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/benefitPages', function (req, res) {
    var pageLength = '';
    var isAa = req.session.data['whichBenefitDiscussed'].includes('Attendance Allowance');
    var isEsa = req.session.data['whichBenefitDiscussed'].includes('Employment and Support Allowance');
    var isPip = req.session.data['whichBenefitDiscussed'].includes('Personal Independence Payment');
    if (req.session.data['whichBenefitDiscussed'].length == 1) {
      pageLength = 'Services 1 of 1';
    } else if (req.session.data['whichBenefitDiscussed'].length == 2) {
      pageLength = 'Services 1 of 2';
    } else {
      pageLength = 'Services 1 of 3';
    }
  
    if (isAa && isEsa) {
      res.render('prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/aa-questions-asked', {
        "nextUrl": 'prototype-sprint-wise/ur-8/a/call-log-journey/benefit-question-asked/esa-questions-asked',
        "pageLength": pageLength
      });
    }
  });

// End of baseline MVP 1.0 here

module.exports = router