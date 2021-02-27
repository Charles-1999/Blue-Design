const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Blue-Design',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/charles/develop/blue-design/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,markdown,mdx}',
        public: '/public',
        dest: 'doc-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Blue-Design',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/charles/develop/blue-design',
          templates:
            '/Users/charles/develop/blue-design/node_modules/docz-core/dist/templates',
          docz: '/Users/charles/develop/blue-design/.docz',
          cache: '/Users/charles/develop/blue-design/.docz/.cache',
          app: '/Users/charles/develop/blue-design/.docz/app',
          appPackageJson: '/Users/charles/develop/blue-design/package.json',
          appTsConfig: '/Users/charles/develop/blue-design/tsconfig.json',
          gatsbyConfig: '/Users/charles/develop/blue-design/gatsby-config.js',
          gatsbyBrowser: '/Users/charles/develop/blue-design/gatsby-browser.js',
          gatsbyNode: '/Users/charles/develop/blue-design/gatsby-node.js',
          gatsbySSR: '/Users/charles/develop/blue-design/gatsby-ssr.js',
          importsJs: '/Users/charles/develop/blue-design/.docz/app/imports.js',
          rootJs: '/Users/charles/develop/blue-design/.docz/app/root.jsx',
          indexJs: '/Users/charles/develop/blue-design/.docz/app/index.jsx',
          indexHtml: '/Users/charles/develop/blue-design/.docz/app/index.html',
          db: '/Users/charles/develop/blue-design/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
