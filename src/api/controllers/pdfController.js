const pdf = require("html-pdf");
const { render, renderFile } = require("pug");
var path = require("path");
const fs = require('fs')
var pugPath = path.join(__dirname, "../../views/templateOne.pug");

var options = { format: "Letter" };

module.exports.createPdf = async (req, res, next) => {
  Promise.resolve(true)
    .then(async () => {
      //render the pug in html
      const output = renderFile(pugPath, req.body);

      //Save as
      const to = path.join(__dirname, "../../Resume.pdf");

      // convert html to pdf
      pdf.create(output, options).toFile(to, (err, result) => {
        if (err) {
          throw err;
        }
        res.json({
          success: true,
          message: result,
        });
      });
    })
    .catch((error) => {
      res.send({
        success: false,
        errorCode: "",
        message: error,
      });
    });
};

module.exports.fetchPdf = async (req, res, next) => {
  Promise.resolve(true)
    .then(async () => {
      const file = path.join(__dirname, "../../Resume.pdf");
      fs.readFile(file, function(err, data){
        res.contentType('application/pdf')
        res.send(data)
      })
      // res.download(file);
    })
    .catch((error) => {
      res.send({
        success: false,
        errorCode: "",
        message: error,
      });
    });
};

// var file = path.join(__dirname,'Rajesh.pdf');
// fs.readFile(file, function(err, data){
//     res.contentType("application/pdf");
//     res.send(data)
// })