const express = require('express');
const router = express.Router();

router.post('/questions-asked', function (req, res) {
  console.log('Question asked');
  res.redirect('/prototype-sprint-wise/test/questions-asked');
});

router.post('/is-question-resolved', function (req, res) {
  console.log('Is question resolved');
  res.redirect('/prototype-sprint-wise/test/is-question-resolved');
});

router.post('/added-call-details', function (req, res) {
  res.redirect('/prototype-sprint-wise/test/added-call-details');
});
 
router.post('/added-details', function (req, res) {
  var addNote = req.session.data['do-you-want-add-note'];
  if(addNote =='Yes'){
    console.log('Add Notes');
    res.redirect('/prototype-sprint-wise/test/add-note')
  } else{
    console.log('This is Newcastle');
    res.redirect('/prototype-sprint-wise/test/added-details');
  }
});

router.post('/you-have-added-details', function (req, res) {
    console.log('Added details');
    res.redirect('/prototype-sprint-wise/test/added-details')
});

router.post('/do-you-want-to-complete-call', function (req, res) {
  res.redirect('/prototype-sprint-wise/test/check-call-completion')
});

router.post('/complete-call', function (req, res) {
  var checkCallCompletion = req.session.data['Do-you-want-to-complete-the-call'];
  if (checkCallCompletion == 'Complete phone call'){
    console.log('Comlete phone call');
    res.redirect('/prototype-sprint-wise/test/call-completed')
  } else{
    res.redirect('/prototype-sprint-wise/test/what-benefits-discussed')
  }

});




module.exports = router;
