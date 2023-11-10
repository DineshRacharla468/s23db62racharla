var express = require('express');
const dessert_controlers= require('../controllers/desserts');
var router = express.Router();
/* GET deserts */
router.get('/', dessert_controlers.dessert_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/desserts/:id', dessert_controlers.dessert_detail);