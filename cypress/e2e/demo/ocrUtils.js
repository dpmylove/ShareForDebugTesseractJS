// ocrUtils.js
const path = require('path');
// const { createWorker } = require('../../../node_modules/tesseract.js');
import { createWorker } from "tesseract.js";
const IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
// const IS_BROWSER = true;
const OPTIONS = {
  cachePath: './tests/assets/traineddata',
  corePath: '../node_modules/tesseract.js-core',
  workerBlobURL: true,
  // ...(IS_BROWSER ? { workerPath: '../dist/worker.min.js' } : {}),
  ...(IS_BROWSER ? { workerPath: '/node_modules/tesseract.js/dist/worker.min.js' } : {}),
  // ...(IS_BROWSER ? { workerPath: 'C:/Users/tdeng/Documents/tesseractjs/node_modules/tesseract.js/dist/worker.min.js' } : {}),
};
// const { createWorker } = Tesseract;
let worker;
async function performOCR(imagePath) {
  const image = path.resolve(__dirname, imagePath || path);
  console.log(`Recognizing ${image}`);
  worker = await createWorker('eng',1, OPTIONS);
  // await worker.reinitialize('eng');
  // Perform OCR
  const { data: { text } } = await worker.recognize(image);
  console.log(text);

  // Terminate the worker
  await worker.terminate();

  return text;
}

module.exports = {
  performOCR,
};

