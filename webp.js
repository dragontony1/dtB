var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./assets/img/trv-diaries/Second",            // Output folder
  PNGImages = "./assets/img-non-webp/trv-diaries/Second/*.png",         // PNG images
  JPEGImages = "./assets/img-non-webp/trv-diaries/Second/*.jpg";        // JPEG images

imagemin([PNGImages], outputFolder, {
  plugins: [webp({
      lossless: true // Losslessly encode images
  })]
});

imagemin([JPEGImages], outputFolder, {
  plugins: [webp({
    quality: 65 // Quality setting from 0 to 100
  })]
});
