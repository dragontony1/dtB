var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./assets/img/dev-diaries",            // Output folder
  PNGImages = "./assets/img-non-webp/dev-diaries/*.png",
  JPGImages = "./assets/img-non-webp/dev-diaries/*.jpg";

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPGImages], outputFolder, {
  plugins: [webp({
    quality: 65 // Quality setting from 0 to 100
  })]
});
