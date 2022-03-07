import{d as n}from"./app.80356d4c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=n(`<h1 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> Github Actions</h1><p>\u8BB0\u5F55\u4E00\u4E9B Github Actions \u81EA\u52A8\u5316\u90E8\u7F72\u5DE5\u4F5C\u6D41\u3002</p><p>\u5BF9\u4E8E\u9759\u6001\u7F51\u7AD9\u7684\u81EA\u52A8\u5316\u90E8\u7F72\u6765\u8BF4\uFF0CGithub Actions \u9700\u8981\u5B8C\u6210\u7684\u4E8B\u7684\u5C31\u662F\u88C5\u5305 -&gt; \u6253\u5305 -&gt; \u628A\u6253\u5305\u4EA7\u7269\u63A8\u5230 gh-pages \u5206\u652F\u3002</p><p>\u5B9E\u9645\u4E0A\u522B\u4EBA\u5DF2\u7ECF\u5199\u597D\u4E86\u5F88\u591A\u53EF\u80FD\u4F1A\u7528\u5230\u7684 action\uFF0C\u5728<a href="https://github.com/marketplace?type=actions" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u53EF\u4EE5\u641C\u5230\u3002</p><p>\u9700\u8981\u5728 repo \u91CC\u5EFA\u4E00\u4E2A <code>.github/workflows</code> \u76EE\u5F55\uFF0C\u5E76\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E0B\u653E <code>YAML</code> \u683C\u5F0F\u7684 workflow \u6587\u4EF6\u3002GitHub \u53EA\u8981\u53D1\u73B0 <code>.github/workflows</code> \u4E0B\u6709 <code>.yaml</code> \u6587\u4EF6\uFF0C\u5C31\u4F1A\u81EA\u52A8\u8FD0\u884C\u5B83\u4EEC\u3002<a href="https://docs.github.com/en/free-pro-team@latest/actions/reference/workflow-syntax-for-github-actions" target="_blank" rel="noopener noreferrer">\u8FD9\u91CC</a>\u662F workflow \u6587\u4EF6\u7684\u8BE6\u7EC6\u6587\u6863\u3002</p><h2 id="jekyll" tabindex="-1"><a class="header-anchor" href="#jekyll" aria-hidden="true">#</a> Jekyll</h2><p><a href="https://jekyllrb.com/docs/continuous-integration/github-actions/" target="_blank" rel="noopener noreferrer">Jekyll \u5B98\u65B9</a>\u5DF2\u7ECF\u7ED9\u4E86\u4E00\u4E2A\u73B0\u6210\u7684 <a href="https://github.com/helaili/jekyll-action" target="_blank" rel="noopener noreferrer">action</a>\uFF0C\u76F4\u63A5\u5F15\u7528\u5B83\u5C31\u597D\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and deploy Jekyll to GitHub Pages automatically

<span class="token comment"># \u68C0\u6D4B master \u5206\u652F\u4E0A\u7684\u63A8\u9001\u548C pr</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">jekyll-build-and-deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
      
      <span class="token comment"># \u68C0\u6D4B vendor/bundle \u4E0B\u6709\u6CA1\u6709\u5DF2\u7ECF\u5B89\u88C5\u597D\u7684\u5305</span>
      <span class="token comment"># \u5982\u679C\u6709\u7684\u8BDD\u5C31\u4E0D\u7528\u518D bundle install \u4E86\uFF0C\u8282\u7701\u65F6\u95F4\u548C\u8D44\u6E90</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> vendor/bundle
          <span class="token key atrule">key</span><span class="token punctuation">:</span> runner.os\u2212gems\u2212<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/Gemfile.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-gems-</span>
      
      <span class="token comment"># \u5F15\u7528 helaili/jekyll-action \u6765\u6253\u5305 Jekyll \u7F51\u7AD9</span>
      <span class="token comment"># \u5E76\u628A\u6253\u5305\u597D\u7684\u6587\u4EF6\u63A8\u5230\u540C\u4E00\u4E2A repo \u7684 gh-pages \u5206\u652F</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> helaili/jekyll<span class="token punctuation">-</span>action@2.0.4
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">JEKYLL_PAT</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">target_branch</span><span class="token punctuation">:</span> <span class="token string">&#39;gh-pages&#39;</span>
</code></pre></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5FC5\u987B\u5F97\u6709\u4E00\u4E2A <code>Gemfile</code> \u548C <code>Gemfile.lock</code> \u6587\u4EF6\uFF0C<code>Gemfile</code> \u91CC\u9762\u5199\u4E0A\u8981\u88C5\u7684\u5305\uFF0C\u6BD4\u5982\uFF1A</p><div class="language-ruby ext-rb"><pre class="language-ruby"><code>source <span class="token string-literal"><span class="token string">&#39;https://rubygems.org&#39;</span></span>

gem <span class="token string-literal"><span class="token string">&#39;jekyll&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;= 4.0.0&#39;</span></span>
gem <span class="token string-literal"><span class="token string">&#39;jekyll-paginate&#39;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&#39;~&gt; 1.1.0&#39;</span></span>
</code></pre></div><p>\u5982\u679C\u7528\u4E86\u81EA\u5B9A\u4E49\u57DF\u540D\uFF0C\u90A3\u5C31\u8FD8\u9700\u8981\u5728 <code>master</code> \u5206\u652F\u653E\u4E00\u4E2A <code>CNAME</code>\uFF0C\u8FD9\u6837 <code>helaili/jekyll-action</code> \u5C31\u4F1A\u628A <code>CNAME</code> \u4E5F\u63A8\u5230 <code>gh-pages</code> \u5206\u652F\u53BB\u3002\u76F4\u63A5\u901A\u8FC7 repo \u7684 Settings \u9875\u9762\u5728 <code>gh-pages</code> \u5206\u652F\u52A0 <code>CNAME</code> \u662F\u6CA1\u6709\u4EC0\u4E48\u7528\u7684\uFF0C\u56E0\u4E3A\u4E0B\u6B21\u81EA\u52A8\u63A8\u9001\u65F6\u5B83\u5C31\u4F1A\u6D88\u5931...</p><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h3><p>\u6240\u6709\u80FD\u7528 Node.js \u641E\u5B9A\u7684\u4E1C\u897F\u90FD\u80FD\u7528\u8FD9\u4E2A\u5DE5\u4F5C\u6D41\u5904\u7406\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and deploy

<span class="token comment"># \u68C0\u6D4B master \u5206\u652F\u4E0A\u7684\u63A8\u9001\u548C pr</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy-vuepress</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token comment"># Node.js \u73AF\u5883</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2.1.2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;12.x&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-node-</span>
      
      <span class="token comment"># npm run build</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm ci
          npm run build</span>
      
      <span class="token comment"># \u63A8\u9001\u5230\u540C\u4E00\u4E2A repo \u7684 gh-pages \u5206\u652F</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> dist <span class="token comment"># build \u8F93\u51FA\u6587\u4EF6\u5939</span>
          <span class="token key atrule">cname</span><span class="token punctuation">:</span> note.zxh.io  <span class="token comment"># \u5982\u679C\u7528\u4E86\u81EA\u5B9A\u4E49\u57DF\u540D\uFF0C\u5728\u8FD9\u91CC\u8BBE\u7F6E</span>
</code></pre></div><p>\u5176\u4E2D <a href="https://github.com/peaceiris/actions-gh-pages" target="_blank" rel="noopener noreferrer">peaceiris/actions-gh-pages</a> \u662F\u4E00\u4E2A\u522B\u4EBA\u5199\u597D\u7684 action\uFF0C\u80FD\u628A\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\u63A8\u5230 <code>gh-pages</code> \u5206\u652F\u3002</p><p>\u4E5F\u53EF\u4EE5\u7528 <a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noopener noreferrer">JamesIves/github-pages-deploy-action</a>\uFF0C\u5B83\u662F\u4E00\u4E2A\u80FD\u628A\u6307\u5B9A\u8DEF\u5F84\u7684\u6587\u4EF6\u63A8\u5230\u6307\u5B9A\u5206\u652F\u7684 action\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and deploy

<span class="token comment"># \u68C0\u6D4B master \u5206\u652F\u4E0A\u7684\u63A8\u9001\u548C pr</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">persist-credentials</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token comment"># \u68C0\u6D4B node_modules \u4E0B\u6709\u6CA1\u6709\u5DF2\u7ECF\u5B89\u88C5\u597D\u7684\u5305</span>
      <span class="token comment"># \u5982\u679C\u6709\u7684\u8BDD\u5C31\u4E0D\u7528\u518D npm install \u4E86\uFF0C\u8282\u7701\u65F6\u95F4\u548C\u8D44\u6E90</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Check Cache
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v1
        <span class="token key atrule">id</span><span class="token punctuation">:</span> cache<span class="token punctuation">-</span>dependencies
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules
          <span class="token key atrule">key</span><span class="token punctuation">:</span> runner.OS\u2212<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>

      <span class="token comment"># \u5982\u679C\u6CA1\u6709\u7F13\u5B58\uFF0C\u5C31 npm install</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Dependencies
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.cache<span class="token punctuation">-</span>dependencies.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          npm install</span>
      
      <span class="token comment"># npm run build</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build
      
      <span class="token comment"># \u63A8\u9001\u5230\u540C\u4E00\u4E2A repo \u7684 gh-pages \u5206\u652F</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@master
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">GITHUB_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> dist  <span class="token comment"># npm run build \u7684\u8F93\u51FA\u6587\u4EF6\u5939</span>
</code></pre></div><p>\u4E0D\u8FC7\u867D\u7136\u4F5C\u8005\u5728<a href="https://github.com/JamesIves/github-pages-deploy-action#additional-build-files-" target="_blank" rel="noopener noreferrer">\u8868\u793A</a>\u5728 <code>gh-pages</code> \u5206\u652F\u624B\u52A8 commit \u4E00\u4E2A <code>CNAME</code> \u4E4B\u540E\uFF0C<code>CNAME</code> \u4E0D\u4F1A\u5728\u540E\u9762\u7684\u90E8\u7F72\u4E2D\u88AB\u6E05\u6389\uFF0C\u4F46\u6211\u4E0D\u7BA1\u600E\u4E48\u8BD5\u90FD\u4F1A\u88AB\u6E05\u6389\uFF0C\u6240\u4EE5\u5C31\u6CA1\u7528\u4E86...\u5927\u6982\u662F\u6211\u7684\u65B9\u5F0F\u4E0D\u592A\u5BF9...</p><h3 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h3><p>\u5982\u679C\u5305\u7BA1\u7406\u5DE5\u5177\u7528\u7684 <code>yarn</code>\uFF1A</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> build and deploy

<span class="token comment"># \u68C0\u6D4B master \u5206\u652F\u4E0A\u7684\u63A8\u9001\u548C pr</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build-and-deploy-vuepress</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2.1.2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;12&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get yarn cache
        <span class="token key atrule">id</span><span class="token punctuation">:</span> yarn<span class="token punctuation">-</span>cache
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;<span class="token punctuation">:</span><span class="token punctuation">:</span>set<span class="token punctuation">-</span>output name=dir<span class="token punctuation">:</span><span class="token punctuation">:</span>$(yarn cache dir)&quot;

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v2
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.yarn<span class="token punctuation">-</span>cache.outputs.dir <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>yarn<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/yarn.lock&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-yarn-</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          yarn install --frozen-lockfile
          yarn build</span>
      
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> peaceiris/actions<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GITHUB_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">publish_dir</span><span class="token punctuation">:</span> dist
          <span class="token key atrule">cname</span><span class="token punctuation">:</span> note.zxh.io
</code></pre></div>`,22);function p(e,o){return t}var l=s(a,[["render",p]]);export{l as default};
