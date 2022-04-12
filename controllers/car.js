var Car = require('../models/car');
// List of all cars
exports.car_list = async function (req, res) {
    try {
        theCars = await Car.find();
        res.send(theCars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific car.
exports.car_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
};
// Handle Car create on POST.
exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"car_brand":"Mustang GT", "car_color":"Lucid Red Pearl", "car_cost":37000}
    document.car_brand = req.body.car_brand;
    document.car_cost = req.body.car_cost;
    document.car_color = req.body.car_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle car delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function (req, res) {
    try {
        theCars = await Car.find();
        res.render('cars', { title: 'Car Search Results', results: theCars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};