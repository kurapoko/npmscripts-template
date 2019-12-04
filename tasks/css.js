const sass = require('node-sass');

sass(['./src/scss/**/*.scss', '!./src/scss/**/_*.scss'],{
    console.log('aaa');
});