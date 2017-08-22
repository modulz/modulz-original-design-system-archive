const glob = require('glob');

exports.getEntries = function(context, extension) {
    if (context[context.length - 1] !== '/') {
        context += '/'
    }

    extension = '.' + extension;

    const files = glob.sync(context + '**/*' + extension);
    const entries = {};

    files.forEach(function (file) {
        entries[file.replace(context, '').replace(extension, '')] = file;
    });

    return entries;
};
