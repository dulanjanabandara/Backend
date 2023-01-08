const sharp = require('sharp');

exports.resizeProductImages = async (req, res, next) => {
  if (!req.files.productImageThumbnail || !req.files.productImages) {
    return next();
  }

  //   Product Thumbnail Update
  const productImageThumbnailFilename = `product-${
    req.params.id
  }-${Date.now()}-thumbnail.png`;

  await sharp(req.files.productImageThumbnail[0].buffer)
    .resize(400, 400)
    .toFile(`public/img/products/${productImageThumbnailFilename}`);

  req.body.productImageThumbnail = productImageThumbnailFilename;

  //   Product Images Update
  req.body.productImages = [];
  await Promise.all(
    req.files.productImages.map(async (file, index) => {
      const imageFilename = `product-${req.params.id}-${Date.now()}-${
        index + 1
      }.png`;

      await sharp(file.buffer)
        .resize(400, 400)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/products/${imageFilename}`);

      req.body.productImages.push(imageFilename);
    })
  );

  next();
};
