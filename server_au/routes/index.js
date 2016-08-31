var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    status: true,
    data: {
      name: 'Leonan',
      lastname: 'Luppi'
    }
  });
  // res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.status(200).json({
    status: true,
    data: {
      name: req.body.name,
      lastname: req.body.lastnaem
    }
  });
});

module.exports = router;
