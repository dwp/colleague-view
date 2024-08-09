const express = require('express');
const router = express.Router();

router.get('/test/questions-asked', function (req, res) {
  res.redirect('/prototype-sprint-wise/test/questions-asked');
});

router.get('/test/is-question-resolved', function (req, res) {
  res.redirect('/prototype-sprint-wise/test/is-question-resolved');
});

router.get('/test/added-call-details', function (req, res) {
  res.redirect('/prototype-sprint-wise/test/added-call-details');
});

module.exports = router;
