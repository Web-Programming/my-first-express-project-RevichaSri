var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Revicha' });
});
router.get('/profil', function(req, res){
  res.render('profil', {nama: 'Revicha', 'npm':2024240111}
  );
})
module.exports = router;
