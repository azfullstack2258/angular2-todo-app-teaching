var express =  require('express');
var router  = express.Router();

router.use('/todos', require('./todos'));

router.get('/', function (req, res) {
    res.status(200).json({
    message: 'The API is up and running'
  })
});


module.exports = router;
