'use strict';
module.exports = {
  entry:'./client.js',
  output:{
    filename:'./public/bundle.js'
  },
  module:{
    loaders:[{
      exclude:/(node_modules|sever.js)/,
      loader:'babel'
    }]
  }
};
