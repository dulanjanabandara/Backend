const multer = require('multer');

const multerStorage = multer.memoryStorage();

// check if the uploaded file is an image
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images'), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

module.exports = upload;
