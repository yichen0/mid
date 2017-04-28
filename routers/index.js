var express = require('express'),
    index   = require('../controllers/index'),
    create  = require('../controllers/create'),
    read    = require('../controllers/read'),
    readall = require('../controllers/readall'),
    update  = require('../controllers/update'),
    del     = require('../controllers/del'),
    first   = require('../controllers/first'),
    second   = require('../controllers/second'),
    router  = express.Router();

router.route('/first').get(index);
router.route('/').get(first);
router.route('/second').get(second);
router.route('/person')
  .post(create)
  .get(readall);
router.route('/person/:id')
  .get(read)
  .put(update)
  .delete(del);

module.exports = router;
