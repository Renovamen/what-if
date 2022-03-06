import{d as s}from"./app.edec767f.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},n=s(`<p>\u4FEE\u6539\u522B\u4EBA\u7684 pull requests\u3002</p><p>\u5047\u8BBE\u6211\u6709\u4E00\u4E2A\u53EB <code>test</code> \u7684 Github \u4ED3\u5E93\uFF0C\u7528\u6237 <code>user1</code> fork \u4E86\u8FD9\u4E2A\u4ED3\u5E93\u5E76\u4ECE\u5206\u652F <code>patch-1</code> \u63D0\u4EA4\u4E86\u4E00\u4E2A pull request\uFF0C\u800C\u6211\u5E0C\u671B\u5728\u5408\u5E76\u8FD9\u4E2A pr \u4E4B\u524D\u5BF9\u5B83\u505A\u4E00\u4E9B\u4FEE\u6539\u3002</p><p>\u4FEE\u6539\u7684\u539F\u7406\u5176\u5B9E\u662F\u76F4\u63A5\u4FEE\u6539\u8D21\u732E\u8005 fork \u540E\u7684\u4ED3\u5E93\u3002\u53EA\u8981\u8D21\u732E\u8005\u5728\u63D0 pr \u65F6\u52FE\u9009\u4E86 <code>Allow edits from maintainers</code> \u9009\u9879\uFF08\u9ED8\u8BA4\u52FE\u9009\uFF09\uFF0C\u6211\u5BF9\u522B\u4EBA fork \u540E\u7684\u884D\u751F\u4ED3\u5E93\u5C31\u4E5F\u6709\u4FEE\u6539\u6743\u9650\u3002</p><p>\u9996\u5148\uFF0Cclone \u81EA\u5DF1\u7684\u9879\u76EE\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/Renovamen/test.git
</code></pre></div><p>\u5C06 <code>user1</code> fork \u7684\u4ED3\u5E93\u52A0\u5230\u81EA\u5DF1\u7684\u8FDC\u7A0B\u4ED3\u5E93\u5217\u8868\u4E2D\uFF0C\u5E76\u62C9\u53D6\u5B83\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> user1 https://github.com/user1/test.git
<span class="token function">git</span> fetch user1
</code></pre></div><p>\u5207\u6362\u5230\u8D21\u732E\u8005\u63D0\u51FA pr \u65F6\u6240\u7528\u7684\u5206\u652F <code>patch-1</code>\u3002\u5982\u679C\u8FD9\u4E2A\u5206\u652F\u540D <code>patch-1</code> \u548C\u539F\u59CB\u4ED3\u5E93\u4E2D\u7684\u67D0\u4E2A\u5206\u652F\u91CD\u590D\u4E86\uFF0C\u5219\u8FD8\u9700\u8981\u7ED9 <code>patch-1</code> \u8D77\u4E00\u4E2A\u4E0D\u91CD\u590D\u7684\u540D\u5B57\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> checkout -b user1-patch-1 user1/patch-1
</code></pre></div><p>\u7136\u540E\u5728\u672C\u5730\u8FDB\u884C\u4E00\u987F\u4FEE\u6539\uFF0C\u6539\u5B8C\u540E commit \u5E76 push \u5230\u8D21\u732E\u8005 fork \u7684\u4ED3\u5E93\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> -A
<span class="token function">git</span> commit -m <span class="token string">&quot;some commit message&quot;</span>
<span class="token function">git</span> push user1 HEAD:patch-1
</code></pre></div><p>\u7136\u540E\u5C31\u53EF\u4EE5\u5728\u539F\u59CB\u4ED3\u5E93\u5BF9\u5E94\u7684 pr \u9875\u9762\u770B\u5230\u6211\u8FFD\u52A0\u7684 commit \u4E86\uFF0C\u4E4B\u540E\u6B63\u5E38\u5408\u5E76 pr \u5230\u4E3B\u5206\u652F\u5C31\u597D\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge user1-patch-1
</code></pre></div>`,13);function t(c,o){return n}var i=e(a,[["render",t]]);export{i as default};
