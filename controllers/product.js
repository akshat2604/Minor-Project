const Product = require("../models/product");
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    else res.send(data);
  });
};
exports.getbyid = (req, res) => {
  Product.getbyid(req.params.id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    else res.send(data);
  });
};
exports.add = (req, res) => {
  Product.add(req.body, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    else res.send(data);
  });
};
exports.addtocart = (req, res) => {
  Product.addtocart = (req, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Products."
      });
    else res.send(data);
  });
};


