import{d as s}from"./app.79ce130a.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";var n="/assets/named-entity-recognition.aa40e954.png",e="/assets/named-entity-recognition-tagging-problem.0e94da2d.png";const t={},p=s('<h1 id="\u8BCD\u6027\u6807\u6CE8\u548C\u547D\u540D\u5B9E\u4F53\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6027\u6807\u6CE8\u548C\u547D\u540D\u5B9E\u4F53\u8BC6\u522B" aria-hidden="true">#</a> \u8BCD\u6027\u6807\u6CE8\u548C\u547D\u540D\u5B9E\u4F53\u8BC6\u522B</h1><p>\u672C\u8282\u8BA8\u8BBA NLP \u4E2D\u4E24\u79CD\u91CD\u8981\u7684\u6807\u6CE8\u95EE\u9898\uFF0C<strong>\u8BCD\u6027\u6807\u6CE8</strong>\uFF08POS Tagging\uFF09\u548C<strong>\u547D\u540D\u5B9E\u4F53\u8BC6\u522B</strong>\uFF08Named-Entity Recognition\uFF09\u3002</p><h2 id="\u8BCD\u6027\u6807\u6CE8" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6027\u6807\u6CE8" aria-hidden="true">#</a> \u8BCD\u6027\u6807\u6CE8</h2><p><strong>\u8BCD\u6027\u6807\u6CE8</strong>\uFF08Part-of-speech (POS) tagging\uFF09\u662F\u5E8F\u5217\u5BF9\u5EFA\u6A21\u7684\u4E00\u79CD\u3002\u5B83\u7684\u76EE\u6807\u662F\u6784\u5EFA\u4E00\u4E2A\u6A21\u578B\uFF0C\u5176\u8F93\u5165\u4E3A\u4E00\u4E2A\u53E5\u5B50\uFF0C\u5982 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord text"><span class="mord">the\xA0dog\xA0saw\xA0a\xA0cat</span></span></span></span></span>\uFF1B\u8F93\u51FA\u4E3A\u4E00\u4E2A\u6807\u8BB0\u5E8F\u5217\uFF08tag sequence\uFF09\uFF08\u4E5F\u53EB\u72B6\u6001\u5E8F\u5217\uFF08state sequence\uFF09\uFF09\uFF0C\u5982 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">D\xA0N\xA0V\xA0D\xA0N</span></span></span></span></span>\uFF08<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">D</span></span></span></span></span> \u4E3A\u9650\u5B9A\u8BCD\uFF0C <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">N</span></span></span></span></span> \u4E3A\u540D\u8BCD\uFF0C <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord">V</span></span></span></span></span> \u4E3A\u52A8\u8BCD\uFF09\u3002</p><p>\u7528\u4E8E\u8BCD\u6027\u6807\u6CE8\u7684\u8BAD\u7EC3\u96C6\u5305\u542B\u4E00\u7CFB\u5217\u53E5\u5B50\u4E0E\u5B83\u4EEC\u5BF9\u5E94\u7684\u6807\u6CE8\uFF0C\u5982 <a href="https://catalog.ldc.upenn.edu/LDC99T42" target="_blank" rel="noopener noreferrer">Penn Treebank</a> \u6570\u636E\u96C6\u5305\u542B\u5927\u6982\u4E00\u767E\u4E07\u4E2A\u5355\u8BCD\uFF0840000 \u4E2A\u53E5\u5B50\uFF09\u548C\u5176\u5BF9\u5E94\u7684\u6807\u6CE8\u3002</p><p>\u8BCD\u6027\u6807\u6CE8\u4E00\u4E2A\u4E3B\u8981\u96BE\u70B9\u662F\u5904\u7406<strong>\u6B67\u4E49</strong>\uFF08ambiguity\uFF09\uFF0C\u56E0\u4E3A\u540C\u4E00\u4E2A\u5355\u8BCD\u5728\u4E0D\u540C\u8BED\u5883\u4E0B\u53EF\u80FD\u9700\u8981\u88AB\u5212\u5206\u4E3A\u4E0D\u540C\u7684\u8BCD\u6027\u3002\u53E6\u4E00\u4E2A\u96BE\u70B9\u662F\u4F1A\u6709\u5F88\u591A\u6D4B\u8BD5\u6570\u636E\u4E2D\u7684\u5355\u8BCD\uFF0C\u5728\u8BAD\u7EC3\u96C6\u4E2D\u51FA\u73B0\u9891\u7387\u5F88\u4F4E\u751A\u81F3\u6CA1\u6709\u51FA\u73B0\u3002</p><p>\u5728\u8FDB\u884C\u8BCD\u6027\u6807\u6CE8\u65F6\uFF0C\u6211\u4EEC\u4F1A\u8003\u8651\u4E24\u79CD\u4E0D\u540C\u7684\u4FE1\u606F\u6765\u6E90\uFF1A</p><ol><li>\u4E00\u4E2A\u5355\u8BCD\u5C5E\u4E8E\u54EA\u4E2A\u8BCD\u6027\u6709\u4E00\u5B9A\u7684 statistical preferences\u3002\u5982\uFF0C<em>quarter</em> \u8FD9\u4E2A\u8BCD\u53EF\u4EE5\u662F\u540D\u8BCD\u4E5F\u53EF\u4EE5\u662F\u52A8\u8BCD\uFF0C\u4F46\u662F\u4ECE\u7EDF\u8BA1\u5B66\u6765\u8BF4\uFF0C\u5B83\u662F\u4E00\u4E2A\u540D\u8BCD\u7684\u6982\u7387\u66F4\u5927\u3002</li><li>\u4E0A\u4E0B\u6587\u4FE1\u606F\u3002\u4E00\u4E9B\u6807\u8BB0\u5E8F\u5217\u51FA\u73B0\u7684\u53EF\u80FD\u6027\u66F4\u5927\uFF0C\u5982\u6807\u8BB0\u5E8F\u5217 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord text"><span class="mord">D\xA0N\xA0V</span></span><span class="mclose">)</span></span></span></span> \u5728\u82F1\u8BED\u4E2D\u51FA\u73B0\u7684\u6982\u7387\u975E\u5E38\u5927\uFF08\u5982 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text"><span class="mord">the/D\xA0dog/N\xA0saw/N\xA0...</span></span></span></span></span>\uFF09\uFF0C\u4F46\u662F\u5E8F\u5217 <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord text"><span class="mord">D\xA0V\xA0N</span></span><span class="mclose">)</span></span></span></span> \u51FA\u73B0\u7684\u6982\u7387\u5C31\u5C0F\u5F88\u591A\u4E86\u3002</li></ol><p>\u4F46\u662F\u6709\u65F6\u8FD9\u4E24\u79CD\u4FE1\u606F\u6765\u6E90\u662F\u51B2\u7A81\u7684\uFF0C\u5982\u5728\u53E5\u5B50 <em>The trash can is hard to find</em> \u4E2D\uFF0C<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord text"><span class="mord">can</span></span></span></span></span> \u7684\u8BCD\u6027\u662F\u540D\u8BCD\uFF0C\u4F46\u5728\u82F1\u8BED\u4E2D <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord text"><span class="mord">can</span></span></span></span></span> \u66F4\u5E38\u89C1\u7684\u7528\u6CD5\u662F\u60C5\u6001\u52A8\u8BCD\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u7531\u4E8E\u4E0A\u4E0B\u6587\u7684\u5173\u7CFB\uFF0C<span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord text"><span class="mord">can</span></span></span></span></span> \u88AB\u6807\u6CE8\u6210\u52A8\u8BCD\u7684\u503E\u5411\u88AB\u8986\u76D6\u4E86\u3002</p><h2 id="\u547D\u540D\u5B9E\u4F53\u8BC6\u522B" tabindex="-1"><a class="header-anchor" href="#\u547D\u540D\u5B9E\u4F53\u8BC6\u522B" aria-hidden="true">#</a> \u547D\u540D\u5B9E\u4F53\u8BC6\u522B</h2><p><strong>\u547D\u540D\u5B9E\u4F53\u8BC6\u522B</strong>\uFF08Named-Entity Recognition\uFF09\u4E2D\uFF0C\u8F93\u5165\u662F\u4E00\u4E2A\u53E5\u5B50\uFF0C\u8F93\u51FA\u662F\u4E00\u4E2A\u5DF2\u7ECF\u6807\u8BB0\u597D\u4E86\u547D\u540D\u5B9E\u4F53\u7684\u53E5\u5B50\u3002\u5982\uFF1A</p><p><img src="'+n+'" alt="named-entity-recognition"></p><p>\u5047\u8BBE\u6709\u4E09\u79CD\u53EF\u80FD\u7684\u5B9E\u4F53\u7C7B\u578B\uFF1APERSON\uFF0CLOCATION \u548C COMPANY\u3002\u5219\u672C\u4F8B\u4E2D\u6A21\u578B\u8BA4\u4E3A <em>Boeing Co.</em> \u662F COMPANY\uFF0C<em>Wall Street</em> \u662F LOCATION\uFF0C<em>Alan Mulally</em> \u662F PERSON\u3002</p><p>\u547D\u540D\u5B9E\u4F53\u8BC6\u522B\u770B\u8D77\u6765\u4F3C\u4E4E\u4E0D\u662F\u6807\u6CE8\u95EE\u9898\uFF0C\u56E0\u4E3A\u5B83\u5E76\u6CA1\u6709\u6CA1\u6709\u5BF9\u53E5\u5B50\u4E2D\u7684\u6BCF\u4E2A\u5355\u8BCD\u90FD\u8FDB\u884C\u6807\u6CE8\u3002\u4F46\u628A\u547D\u540D\u5B9E\u4F53\u8BC6\u522B\u5904\u7406\u4E3A\u6807\u6CE8\u95EE\u9898\u662F\u6700\u65B9\u4FBF\u7684\uFF0C\u5982\u4E0B\u56FE\u4E2D\uFF0C\u628A\u4E0D\u5C5E\u4E8E\u4EFB\u4F55\u5B9E\u4F53\u7C7B\u578B\u7684\u5355\u8BCD\u6807\u6CE8\u4E3A NA\uFF0C\u628A\u8868\u793A COMPANY \u7684\u8BCD\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5355\u8BCD\u6807\u6CE8\u4E3A SC\uFF0C\u628A\u8868\u793A COMPANY \u7684\u8BCD\u7EC4\u7684\u540E\u51E0\u4E2A\u5355\u8BCD\u6807\u6CE8\u4E3A CC\uFF1A</p><p><img src="'+e+'" alt="named-entity-recognition-tagging-problem"></p>',15);function l(r,c){return p}var o=a(t,[["render",l]]);export{o as default};