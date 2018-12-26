var imagemin = require("imagemin"),    // The imagemin module.
  webp = require("imagemin-webp"),   // imagemin's WebP plugin.
  outputFolder = "./assets/img/daily-thoughts",            // Output folder
  PNGImages = "./assets/img-non-webp/daily-thoughts/*.png",
  JPGImages = "./assets/img-non-webp/daily-thoughts/*.jpg";

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
