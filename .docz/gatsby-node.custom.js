const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'blue-design/lib': path.resolve(__dirname, '../components/'),
        'blue-design/esm': path.resolve(__dirname, '../components/'),
        'blue-design': path.resolve(__dirname, '../components/'),
      },
    },
  });
};
