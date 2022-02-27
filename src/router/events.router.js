var express = require('express');
var router = express.Router();

/* POST new event. */
router.post('/save', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
