const upload = require('../services/multer.service');

exports.uploadProductImages = upload.fields([
  { name: 'productImageThumbnail', maxCount: 1 },
  { name: 'productImages', maxCount: 3 },
]);
