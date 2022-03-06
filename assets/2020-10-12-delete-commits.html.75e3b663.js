import{d as s}from"./app.edec767f.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},t=s(`<p>\u4FDD\u7559\u4EE3\u7801\u4F46\u5220\u9664 Github \u4E0A\u7684\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55\u7684\u65B9\u6CD5\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> checkout --orphan latest_branch  <span class="token comment"># \u7528\u5F53\u524D\u4EE3\u7801\u5EFA\u4E00\u4E2A\u65B0\u5206\u652F</span>
<span class="token function">git</span> <span class="token function">add</span> -A  <span class="token comment"># \u6DFB\u52A0\u6240\u6709\u6587\u4EF6</span>
<span class="token function">git</span> commit -am <span class="token string">&quot;some commit messages&quot;</span>  <span class="token comment"># commit</span>
<span class="token function">git</span> branch -D master  <span class="token comment"># \u5220\u9664\u539F master \u5206\u652F</span>
<span class="token function">git</span> branch -m master  <span class="token comment"># \u5C06\u65B0\u5EFA\u7684\u5206\u652F\u91CD\u547D\u540D\u4E3A master</span>
<span class="token function">git</span> push -f origin master  <span class="token comment"># \u5F3A\u5236\u63A8\u9001\u4E0A Github</span>
</code></pre></div>`,2);function e(c,o){return t}var i=n(a,[["render",e]]);export{i as default};
