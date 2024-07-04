const express = require('express')
const router = express.Router()



// this is for NINO number for UR round-4 (option-1)
router.post('/ur-4/opt1/engagement-type', function (req, res) {

  req.session.data['What-type-of-engagement-is-it'] = '';
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

  if (req.session.data['national-insurance-number-for-ur4'] == 'QQ123456Q' || req.session.data['national-insurance-number-for-ur4'] == 'qq123456q') {
    // Send user to next page
    res.render('ur-4/opt1/engagement-type')
  } else {
    var errMsg = "";
    if (req.session.data['national-insurance-number-for-ur4'] == '' || req.session.data['national-insurance-number-for-ur4'] == undefined) {
      errMsg = "National Insurance Number is mandatory";
    } else {
      errMsg = "Enter a National Insurance number in the correct format";
    }
    // Send user to error page
    res.render('ur-4/opt1/error-NINO-number', { "errMsg": errMsg });
  }
})

// this is for NINO number for UR round-4 (option-2)
router.post('/ur-4/opt2/engagement-type', function (req, res) {

  req.session.data['What-type-of-engagement-is-it'] = '';
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

  if (req.session.data['national-insurance-number-for-ur4_2'] == 'QQ123456Q' || req.session.data['national-insurance-number-for-ur4_2'] == 'qq123456q') {
    // Send user to next page
    res.render('ur-4/opt2/engagement-type')
  } else {
    var errMsg = "";
    if (req.session.data['national-insurance-number-for-ur4_2'] == '' || req.session.data['national-insurance-number-for-ur4_2'] == undefined) {
      errMsg = "National Insurance Number is mandatory";
    } else {
      errMsg = "Enter a National Insurance number in the correct format";
    }
    // Send user to error page
    res.render('ur-4/opt2/error-NINO-number', { "errMsg": errMsg });
  }
})

// End of baseline MVP 1.0 here

module.exports = router
