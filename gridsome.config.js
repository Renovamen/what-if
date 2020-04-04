const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'What-if',
  siteUrl: `http://notes.renovamen.ink`,
  titleTemplate: "%s - Renovamen's Notebook",
  siteDescription: "What if? Renovamen's messy notebook.",
  icon: "./src/assets/images/favicon.svg",

  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
         ]
      }))
    }
  },

  templates: {
    BlogPost: '/misc/:year/:month/:day/:slug',
    Contributor: '/contributor/:id'
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-146858305-3'
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'NotePage',
            indexName: 'Notes',
            fields: ['title', 'catagory']
          },
          {
            typeName: 'BlogPost',
            indexName: 'Misc',
            fields: ['title', 'catagory']
          }
        ],
        searchFields: ['title', 'headings', 'content', 'excerpt'],
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'NotePage',
        index: ['README'],
        path: './nlp/statistical-nlp/**/*.md',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            'gridsome-remark-katex'
          ]
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'NotePage',
        index: ['README'],
        path: './papers/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './misc/*/index.md',
        refs: {
          author: 'Contributor'
        },
        remark: {
          plugins: [
            '@gridsome/remark-prismjs',
            'gridsome-remark-katex'
          ]
        }
      }
    }
  ]
}
