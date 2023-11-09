var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dessert_controller = require('../controllers/desserts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a dessert.
router.post('/desserts', dessert_controller.dessert_create_post);
// DELETE request to delete dessert.
router.delete('/desserts/:id', dessert_controller.dessert_delete);
// PUT request to update dessert.
router.put('/desserts/:id', dessert_controller.dessert_update_put);
// GET request for one dessert.
router.get('/desserts/:id', dessert_controller.dessert_detail);
// GET request for list of all dessert items.
router.get('/desserts', dessert_controller.dessert_list);
module.exports = router;