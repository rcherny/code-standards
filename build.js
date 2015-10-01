require('harmonize')(['harmony-generators']);

var Metalsmith = require('metalsmith');


var standards = new Metalsmith(__dirname);

    standards.source('./src')
        .destination('./build')
        .use(markdown)
        .use(layouts)
    
