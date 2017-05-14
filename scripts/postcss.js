const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const plugins = [
    require('precss'),
    require("postcss-custom-media"),
    require('autoprefixer')({ browsers: ['> 1%', 'last 2 versions'] }),
];
const argv = require('yargs')
    .demand(2)
    .alias('m', 'minify')
    .boolean('minify')
    .argv;

if (argv.m) {
    plugins.push(require('cssnano'));
}

// paths
const root = path.join(__dirname, '..');
const input = path.join(root, argv._[0]);
const output = path.join(root, argv._[1]);

const css = fs.readFileSync(input, 'utf8')
postcss(plugins)
    .process(css, { from: input, to: output })
    .then(function (result) {
        fs.writeFileSync(output, result.css);
        console.info('\x1b[32m', `CSS built to ${output}`);
    }, function(err) {
        console.error('\x1b[31m', err.message);
    });
