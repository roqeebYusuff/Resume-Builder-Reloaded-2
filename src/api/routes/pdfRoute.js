const { Router } = require("express");
const pdfController = require("../controllers/pdfController");

const router = new Router();

// router.get('/createPdf', pdfController.pdf)
router.post("/generatepdf", pdfController.createPdf);
router.get("/fetchPdf", pdfController.fetchPdf);
router.get("/t", pdfController.t);

module.exports = router;
