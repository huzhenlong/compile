var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:pathName?', function(req, res, next) {
  var path = req.params.pathName ?req.params.pathName:'index.html' ;
  res.render(path.replace('.html',''));
});

router.post('/:pathName?', function(req, res, next) {
  var path = req.params.pathName ?req.params.pathName:'index.html' ;
  res.render(path.replace('.html',''));
});

module.exports = router;
