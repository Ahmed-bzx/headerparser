var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/api', (req, res, next) => {
  let ip = req.ip;
  let language = req.acceptsLanguages()[0];
  let software = req.useragent.browser + ', ' + req.useragent.os;

  res.json({
    "ipaddress": ip,
    "language": language,
    "software": software,
  });
});

module.exports = router;
