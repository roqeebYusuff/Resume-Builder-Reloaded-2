const pdf = require("html-pdf");
const { render, renderFile } = require("pug");
var path = require("path");
const fs = require("fs");
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

module.exports.t = async (req, res, next) => {
  Promise.resolve(true)
    .then(async () => {
      const file = path.join(__dirname, "../../Resume.pdf");
      res.download(file);
      // fs.readFile(file, function(err, data){
      //   res.contentType('application/pdf')
      //   res.send(data)
      // })
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

module.exports.fetchPdf = (req, res) => {
  try {
    const file = path.join(__dirname, "../../Resume.pdf");

    const src = fs.createReadStream(file);

    var stat = fs.statSync(file);
    res.setHeader("Content-Length", stat.size);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");

    // res.writeHead(200, {
    //   "Content-Type": "application/pdf",
    //   "Content-Disposition": "attachment; filename=sample.pdf",
    //   "Content-Transfer-Encoding": "Binary",
    // });

    src.pipe(res);
  } catch (err) {
    console.log(err);
  }
};
