var desserts = require("../models/desserts");
// List of all desserts
exports.desserts_list = async function (req, res) {
  res.send('NOT IMPLEMENTED: desserts list');
};
//for a specific Costume.
exports.dessert_detail = async function (req, res) {
  console.log("detail" + req.params.id)
  try {
    result = await desserts.findById(req.params.id)
    res.send(result)
  } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
}
// Handle Costume create on POST.
exports.dessert_create_post = async function (req, res) {
  console.log(req.body)
  let document = new desserts();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.Name = req.body.Name;
  document.Calories = req.body.Calories;
  document.Price = req.body.Price;

  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle desserts delete form on DELETE.
exports.dessert_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: desserts delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dessert_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
  try {
    let toUpdate = await desserts.findById(req.params.id)
    // Do updates of properties
    if (req.body.Name)
      toUpdate.Name = req.body.Name;
    if (req.body.Calories) toUpdate.Calories = req.body.Calories;
    if (req.body.Price) toUpdate.Price = req.body.Price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
  } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
  }
};

// List of all dessertss
exports.dessert_list = async function (req, res) {
  try {
    thedesserts = await desserts.find();
    res.send(thedesserts);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// VIEWS
// Handle a show all view
exports.dessert_view_all_Page = async function (req, res) {
  try {
    thedesserts = await desserts.find();
    res.render('desserts', { title: 'desserts Search Results', results: thedesserts });
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};