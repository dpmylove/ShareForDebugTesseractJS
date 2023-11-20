/// <reference types="cypress" />
import Tesseract from "tesseract.js";
const { performOCR } = require('./ocrUtils');

context('TesseractJS', () => {
    beforeEach(() => {
      // cy.visit('https://example.cypress.io/commands/window')
    })

    // it('Tesseract should work normally', async () => {
    //   // https://on.cypress.io/window

    //     // const worker = await createWorker('eng','1',{
    //     //     workerPath: 'C:/Users/tdeng/Documents/tesseractjs/node_modules/tesseract.js/dist/worker.min.js',
    //     //     langPath: './tesseract',
    //     //     corePath: 'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0',
    //     // });
    //     const { createWorker } = Tesseract;
    //     const worker = await createWorker({
    //     corePath : 'https://cdn.jsdelivr.net/npm/tesseract.js-core@v5.0.0/tesseract-core.wasm.js',
    //     langPath: './tesseract',
    //     logger: m => console.log(m),
    //     });
    //     (async () => {
    //     const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    //     console.log(text);
    //     await worker.terminate();
    // })();
    // })

    // it('test opencv', async () => {
    //     var cv = require('opencv.js');
    //     var jpeg = require('jpeg-js');
        
    //     // Load an image
    //     cy.readFile("C:/Users/tdeng/Documents/tesseractjs/cypress/e2e/demo/in_img.jpg","base64").then(async (jpeg_data)=>{
    //              // var jpeg_data =  cy.fixture("in_img.jpg","base64");
    //     var raw_data = await peg.decode(jpeg_data);
        
    //     // Create a matrix from image. input image expected to be in RGBA format
    //     var src = await cv.matFromImageData(raw_data);
    //     cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY); // Convert to grayscale
        
    //     dst = new cv.Mat();
    //     cv.Canny(src, dst, 50, 150);
    //     cv.cvtColor(dst, dst, cv.COLOR_GRAY2RGBA); // Convert back to RGBA to display
        
    //     // Save the result
    //     raw_data = {
    //       data: dst.data,
    //       width: dst.size().width,
    //       height: dst.size().height
    //     };
    //     var jpeg_data = jpeg.encode(raw_data, 50);
    //     await cy.writeFile("out_img.jpg", jpeg_data.data);
    //     })
   
    // });

    // cypress/integration/yourTestFile.js


    it.only('should perform OCR on an image', () => {
      // Call the performOCR function with the image path
      cy.performOCR( './eng_bw.png').then((ocrText) => {
      // Use the OCR text in your Cypress test
      cy.log(`OCR Text: ${ocrText}`);
      });
  });
  
  })
  