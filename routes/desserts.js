var express = require('express');
const dessert_controlers= require('../controllers/desserts');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}


/* GET deserts */
router.get('/', dessert_controlers.dessert_view_all_Page );
module.exports = router;
// GET request for one costume.
router.get('/desserts/:id', dessert_controlers.dessert_detail);
/* GET detail costume page */
router.get('/detail', dessert_controlers.dessert_view_one_Page);
/* GET create costume page */
router.get('/create',secured, dessert_controlers.dessert_create_Page);
/* GET create update page */
router.get('/update',secured, dessert_controlers.dessert_update_Page);
/* GET delete costume page */
router.get('/delete',secured, dessert_controlers.dessert_delete_Page);