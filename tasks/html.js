const imagemin         = require('imagemin-keep-folder');
const imageminMozjpeg  = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo     = require('imagemin-svgo');

imagemin(['src/images/**/*.{jpg,png,gif,svg}'], {
    plugins: [
        imageminMozjpeg(),
        imageminPngquant(),
        imageminGifsicle(),
        imageminSvgo()
    ],
    replaceOutputDir: output => {
        return output.replace(/images\//, '../dist/assets/images/')
    }
}).then(() => {
    console.log('Images optimized');
});