const fs = require('fs');
const postcss = require('postcss');
const comment = require('postcss-comment');
//const nested = require('postcss-nested');
//const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');
const chokidar = require('chokidar');
//const target = 'src/app.pcss'

chokidar.watch('/app/src/*', {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  // followSymlinks: false,
  // useFsEvents: false,
  usePolling: true
}).on('all', function(event, path) {
  console.log(event, path);
  transpile(path);
}).on('ready', function() {
  console.log('Ready');
})

/**
 * PostCssを使ってpcssをトランスパイルする。
 * 
 */
function transpile(target){
  console.log('target:' + target);

  fs.readFile(target, (err, css) => {
    postcss([cssnext({
        features: {
          customProperties: false,
          rem: {html: false} // remを使用しようとするとエラーとなるのを防ぐ
        }
      })])
        .process(css, { from: target, to: 'dest/styles.css', parser: comment })
        .then(result => {
            fs.writeFile('dest/styles.css', result.css, (err)=>console.log(err));
            if ( result.map ) fs.writeFile('dest/styles.css.map', result.map, (err)=>console.log(err));
        });
    });
}
