// This won't be transpiled

// Transpile content before test
require('babel-register')();

require.extensions['.css'] = function() {};
