import { path } from "@vuepress/utils";

module.exports = {
  title: "What if?",
  description: "Renovamen's messy notebook.",

  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],

  theme: path.resolve(__dirname, "./theme"),

  bundler: "@vuepress/vite",

  themeConfig: {
    logo: "/favicon.svg",
    repo: "Renovamen/what-if",
    docsDir: "notes",
    author: "Renovamen",
    authorLink: "https://zxh.io",

    navbar: [
      {
        text: "Stupid AI",
        children: [
          {
            text: "Machine Learning",
            link: "/ai/ml/"
          },
          {
            text: "Deep Learning",
            link: "/ai/dl/"
          },
          {
            text: "Reinforcement Learning",
            link: "/ai/rl/"
          },
          {
            text: "Statistical NLP",
            link: "/ai/nlp/"
          }
        ]
      },
      {
        text: "Math",
        children: [
          {
            text: "Linear Algebra",
            link: "/math/linear-algebra/"
          },
          {
            text: "Information Theory",
            link: "/math/information-theory/"
          }
        ]
      },
      {
        text: "Dev",
        link: "/dev/"
      },
      {
        text: "Papers",
        link: "/papers/"
      },
      {
        text: "Snippets",
        link: "/snippets/"
      }
    ],

    sidebar: {
      "/ai/ml/": [
        {
          text: "基础",
          children: ["/ai/ml/basic-ml/loss-function.md"]
        },
        {
          text: "优化算法",
          children: [
            "/ai/ml/optimization/conjugate-gradient.md",
            "/ai/ml/optimization/proximal-gradient.md"
          ]
        },
        {
          text: "概率图模型",
          children: [
            "/ai/ml/pcg/README.md",
            "/ai/ml/pcg/bayesian-network.md",
            "/ai/ml/pcg/parameters-learning-no-latent.md",
            "/ai/ml/pcg/parameters-learning-latent.md",
            "/ai/ml/pcg/variational-inference.md"
          ]
        }
      ],
      "/ai/dl/": [
        {
          text: "前馈神经网络",
          children: [
            "/ai/dl/fnn/net-structure.md",
            "/ai/dl/fnn/activation-function.md",
            "/ai/dl/fnn/parameters-estimation.md",
            "/ai/dl/fnn/deep-neural-network.md"
          ]
        },
        {
          text: "生成模型",
          children: [
            "/ai/dl/generative-models/vae.md",
            "/ai/dl/generative-models/gan.md"
          ]
        }
      ],
      "/ai/rl/": [
        {
          text: "基础",
          children: [
            "/ai/rl/basic/key-concepts.md",
            "/ai/rl/basic/mdp.md",
            "/ai/rl/basic/bellman-equations.md",
            "/ai/rl/basic/dp.md"
          ]
        },
        {
          text: "基于值函数的方法",
          children: ["/ai/rl/value-based/mc.md", "/ai/rl/value-based/td.md"]
        }
      ],
      "/ai/nlp/": [
        {
          text: "语言模型",
          children: [
            "/ai/nlp/language-modeling/README.md",
            "/ai/nlp/language-modeling/markov-models.md",
            "/ai/nlp/language-modeling/trigram-language-models.md",
            "/ai/nlp/language-modeling/smoothed-estimation-of-trigram-models.md"
          ]
        },
        {
          text: "标注问题和隐马尔科夫模型",
          children: [
            "/ai/nlp/tagging-problems-hmms/README.md",
            "/ai/nlp/tagging-problems-hmms/pos-tagging-named-entity-recognition.md",
            "/ai/nlp/tagging-problems-hmms/gm-and-ncm.md",
            "/ai/nlp/tagging-problems-hmms/generative-tagging-models.md",
            "/ai/nlp/tagging-problems-hmms/trigram-hmms.md",
            "/ai/nlp/tagging-problems-hmms/advanced-material.md"
          ]
        },
        {
          text: "对数线性模型",
          children: [
            "/ai/nlp/log-linear-models/README.md",
            "/ai/nlp/log-linear-models/definitions.md",
            "/ai/nlp/log-linear-models/features.md"
            // "/ai/nlp/log-linear-models/parameter-estimation.md"
          ]
        },
        {
          text: "概率上下文无关文法",
          children: ["/ai/nlp/pcfgs/README.md", "/ai/nlp/pcfgs/cfgs.md"]
        }
      ],
      "/math/linear-algebra/": [
        {
          text: "线性代数",
          children: [
            "/math/linear-algebra/matrix-multiplication.md",
            "/math/linear-algebra/matrix-elimination.md",
            "/math/linear-algebra/solution.md",
            "/math/linear-algebra/linear-independence.md"
          ]
        }
      ],
      "/math/information-theory/": [
        {
          text: "信息论",
          children: ["/math/information-theory/divergence.md"]
        }
      ],
      "/dev/": [
        {
          text: "基础",
          children: ["/dev/basic/computer-network.md", "/dev/basic/os.md"]
        }
      ],
      "/papers/": [
        {
          text: "NLP",
          children: ["/papers/nlp/kg-application.md"]
        },
        {
          text: "CV",
          children: [
            "/papers/cv/image-aesthetic-assessment.md",
            "/papers/cv/reid.md"
          ]
        },
        {
          text: "DL",
          children: [
            "/papers/dl/continual-learning.md",
            "/papers/dl/meta-learning.md",
            "/papers/dl/model-compression.md",
            "/papers/dl/misc.md"
          ]
        }
      ]
    }
  },

  plugins: [["@vuepress/plugin-search"], ["@renovamen/vuepress-plugin-katex"]],

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
};
