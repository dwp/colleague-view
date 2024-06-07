const express = require('express')
const router = express.Router()



// this is for NINO number for UR round-5
router.post('/engagement-type', function (req, res) {

  req.session.data['What-type-of-engagement-is-it-ur5'] = '';
  req.session.data['Who-is-the-engagement-with-ur5'] = '';
  req.session.data['govuk-hint govuk-radios__hint'] = '';
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

  if (req.session.data['national-insurance-number-for-ur5'] == 'QQ123456Q' || req.session.data['national-insurance-number-for-ur5'] == 'qq123456q') {
    // Send user to next page
    res.render('prototype-sprint-wise/ur-5/engagement-type')
  } else {
    var errMsg = "";
    if (req.session.data['national-insurance-number-for-ur5'] == '' || req.session.data['national-insurance-number-for-ur5'] == undefined) {
      errMsg = "National Insurance Number is mandatory";
    } else {
      errMsg = "Enter a National Insurance number in the correct format";
    }
    // Send user to error page
    res.render('prototype-sprint-wise/ur-5/error-NINO-number', { "errMsg": errMsg });
  }
})

// this is for radio selection
router.post('/ur-5/engagement-with', function (req, res) {
  req.session.data['Who-is-the-engagement-with-ur5'] = '';
  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['What-type-of-engagement-is-it-ur5'];
  // Check whether the variable matches a condition
  if (howManyBalls == "Incoming telephone call" || howManyBalls == "Outgoing telephone call") {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/ur-5/engagement-with');
  } else {
    req.session.data['What-type-of-engagement-is-it-ur5'] = '';
    // Send user back to same page
    res.redirect('back');
  }

})

// this is for engagement with radio selection
router.post('/ur-5/home-page-first-time', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var engagemetWith = req.session.data['Who-is-the-engagement-with-ur5'];
  // Check whether the variable matches a condition
  if (engagemetWith == "Not Listed above" || engagemetWith == "") {
    // Send user back to same page
    res.redirect('back');
  } else {
    // Send user to next page
    res.redirect('/prototype-sprint-wise/ur-5/home-page-first-time');
  }

})

// End of sprint 22 here

module.exports = router