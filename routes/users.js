var express = require('Express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('layout.pug');
});

module.exports = router;
