---
title: Github Actions
---

记录一些 Github Actions 自动化部署工作流。

<!-- more -->

对于静态网站的自动化部署来说，Github Actions 需要完成的事的就是装包 -> 打包 -> 把打包产物推到 gh-pages 分支。

实际上别人已经写好了很多可能会用到的 action，在[这里](https://github.com/marketplace?type=actions)可以搜到。

需要在 repo 里建一个 `.github/workflows` 目录，并在这个目录下放 `YAML` 格式的 workflow 文件。GitHub 只要发现 `.github/workflows` 下有 `.yaml` 文件，就会自动运行它们。[这里](https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions)是 workflow 文件的详细文档。


## Jekyll

[Jekyll 官方](https://jekyllrb.com/docs/continuous-integration/github-actions/)已经给了一个现成的 [action](https://github.com/helaili/jekyll-action)，直接引用它就好：

```yaml
name: build and deploy Jekyll to GitHub Pages automatically

# 检测 master 分支上的推送和 pr
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  jekyll-build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      # 检测 vendor/bundle 下有没有已经安装好的包
      # 如果有的话就不用再 bundle install 了，节省时间和资源
      - uses: actions/cache@v1
        with:
          path: vendor/bundle
          key: runner.os−gems−{{ hashFiles('**/Gemfile.lock') }}
          restore-keys: |
            ${{ runner.os }}-gems-
      
      # 引用 helaili/jekyll-action 来打包 Jekyll 网站
      # 并把打包好的文件推到同一个 repo 的 gh-pages 分支
      - uses: helaili/jekyll-action@2.0.4
        env:
          JEKYLL_PAT: ${{ secrets.GITHUB_TOKEN }}
        with:
          target_branch: 'gh-pages'
```

需要注意的是必须得有一个 `Gemfile` 和 `Gemfile.lock` 文件，`Gemfile` 里面写上要装的包，比如：

```ruby
source 'https://rubygems.org'

gem 'jekyll', '= 4.0.0'
gem 'jekyll-paginate', '~> 1.1.0'
```

如果用了自定义域名，那就还需要在 `master` 分支放一个 `CNAME`，这样 `helaili/jekyll-action` 就会把 `CNAME` 也推到 `gh-pages` 分支去。直接通过 repo 的 Settings 页面在 `gh-pages` 分支加 `CNAME` 是没有什么用的，因为下次自动推送时它就会消失...


## Node.js

所有能用 Node.js 搞定的东西都能用这个工作流处理：

```yaml
name: build and deploy

# 检测 master 分支上的推送和 pr
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:

      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      # 检测 node_modules 下有没有已经安装好的包
      # 如果有的话就不用再 npm install 了，节省时间和资源
      - name: Check Cache
        uses: actions/cache@v1
        id: cache-dependencies
        with:
          path: node_modules
          key: runner.OS−{{ hashFiles('**/package-lock.json') }}

      # 如果没有缓存，就 npm install
      - name: Install Dependencies
        if: steps.cache-dependencies.outputs.cache-hit != 'true'
        run: |
          npm install
      
      # npm run build
      - name: Build
        run: npm run build
      
      # 推送到同一个 repo 的 gh-pages 分支
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: dist  # npm run build 的输出文件夹
```

其中 [JamesIves/github-pages-deploy-action](https://github.com/JamesIves/github-pages-deploy-action) 是一个别人写好的 action，能把指定路径的文件推到指定分支。

这里直接在 `gh-pages` 分支建 `CNAME` 就行，不会被删掉。