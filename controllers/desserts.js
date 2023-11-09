var desserts = require("../models/desserts");
// List of all desserts
exports.desserts_list = async function(req, res) {
res.send('NOT IMPLEMENTED: desserts list');
};
// for a specific desserts.
exports.dessert_detail = function(req, res) {
res.send('NOT IMPLEMENTED: desserts detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.dessert_create_post = async function(req, res) {
  console.log(req.body)
  let document = new desserts();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.Name = req.body.Name;
  document.Calories = req.body.Calories;
  document.Price = req.body.Price;

  try{
  let result = await document.save();
  res.send(result);
  }
  catch(err){
  res.status(500);
  res.send(`{"error": ${err}}`);
  }
  };
// Handle desserts delete form on DELETE.
exports.dessert_delete = function(req, res) {
res.send('NOT IMPLEMENTED: desserts delete DELETE ' + req.params.id);
};
// Handle desserts update form on PUT.
exports.dessert_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: desserts update PUT' + req.params.id);
};

// List of all dessertss
exports.dessert_list = async function(req, res) {
try{
thedesserts = await desserts.find();
res.send(thedesserts);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// VIEWS
// Handle a show all view
exports.dessert_view_all_Page = async function(req, res) {
try{
  thedesserts = await desserts.find();
res.render('desserts', { title: 'desserts Search Results', results: thedesserts });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};