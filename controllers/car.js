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
// Handle car create on POST.
exports.car_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Car create POST');
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
exports.car_view_all_Page = async function(req, res) {
    try{
    theCars = await Car.find();
    res.render('cars', { title: 'Car Search Results', results: theCars });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};