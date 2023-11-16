var express = require('express');
const dessert_controlers= require('../controllers/desserts');
var router = express.Router();
/* GET deserts */
router.get('/', dessert_controlers.dessert_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/desserts/:id', dessert_controlers.dessert_detail);
/* GET detail costume page */
router.get('/detail', dessert_controlers.dessert_view_one_Page);
/* GET create costume page */
router.get('/create', dessert_controlers.dessert_create_Page);
/* GET create update page */
router.get('/update', dessert_controlers.dessert_update_Page);
/* GET delete costume page */
router.get('/delete', dessert_controlers.dessert_delete_Page);