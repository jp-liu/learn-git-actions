import{_ as e,c as o,o as c,a as t}from"./app.ccf4f0a4.js";var d="/learn-git-actions/assets/cicd-workflow.7272cb13.png";const D=JSON.parse('{"title":"CICD","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65E0 CICD","slug":"\u65E0-cicd"},{"level":2,"title":"\u6709 CICD","slug":"\u6709-cicd"}],"relativePath":"actions/ci-cd.md"}'),i={name:"actions/ci-cd.md"},a=t('<h1 id="cicd" tabindex="-1">CICD <a class="header-anchor" href="#cicd" aria-hidden="true">#</a></h1><p>\u770B\u8FC7\u5F88\u591A\u6587\u7AE0\u7684 <code>CICD</code>\uFF0C\u90FD\u662F\u6446\u4E0A\u5F88\u591A\u56FE\u5F88\u591A\u6982\u5FF5\uFF0C\u8FDB\u884C\u4ECB\u7ECD\uFF0C\u867D\u7136\u8FD9\u662F\u5FC5\u8981\u7684\uFF0C\u5927\u5BB6\u9700\u8981\u7406\u89E3\u6D41\u7A0B\uFF0C\u4F46\u662F\u603B\u611F\u89C9\u5DEE\u70B9\u610F\u601D\uFF0C\u6BD4\u5982\u8BF4\uFF0C\u4E0B\u9762\u8FD9\u5F20\u5B8C\u6574 <code>CICD</code> \u6D41\u7A0B\u56FE</p><p><img src="'+d+'" alt="CICD"></p><p>\u770B\u8FD9\u4E2A\u56FE\u7B2C\u4E00\u773C\u5C31\u662F\uFF0Cwhat\uFF1F\uFF01\u8FD9\u5565\u3002</p><p>\u5173\u4E8E <code>CICD</code> \u4ECB\u7ECD\u7684\u6587\u7AE0\u5462\uFF0C\u5F88\u591A\uFF0C\u6211\u8FD9\u91CC\u53EA\u662F\u505A\u4E00\u4E0B\u81EA\u6211\u7684\u6982\u8FF0\uFF0C\u5176\u5B9E\u4E5F\u5C31\u662F\u5927\u767D\u8BDD\u8BF4\u4E0B\u3002</p><p>\u6982\u5FF5\uFF1A</p><ul><li>CI\uFF0CContinuous Integration\uFF0C\u6301\u7EED\u96C6\u6210\u3002</li><li>CD\uFF0CContinuous Deployment\uFF0C\u6301\u7EED\u90E8\u7F72\u3002</li></ul><p><code>CICD</code> \u4E00\u822C\u5408\u79F0\uFF0C\u65E0\u9700\u7279\u610F\u533A\u5206\u4E8C\u8005\u533A\u522B\u3002</p><h2 id="\u65E0-cicd" tabindex="-1">\u65E0 CICD <a class="header-anchor" href="#\u65E0-cicd" aria-hidden="true">#</a></h2><p>\u6240\u8C13\u7684\u6301\u7EED\u96C6\u6210\u3001\u90E8\u7F72\uFF0C\u8BF4\u5927\u767D\u8BDD\uFF0C\u5C31\u662F\u5F53\u6211\u4EEC\u6539\u4E86\u4EE3\u7801\uFF0C\u8981\u5C06\u65B0\u4EE3\u7801\u653E\u5230\u670D\u52A1\u5668\u4E0A\u6267\u884C\uFF0C\u53EF\u4EE5\u662F\u6D4B\u8BD5\u670D\u52A1\u5668\uFF0C\u4E5F\u53EF\u4EE5\u662F\u751F\u4EA7\u73AF\u5883\u670D\u52A1\u5668\uFF0C\u7ED9\u6D4B\u8BD5\u6216\u8005\u7528\u6237\u4F7F\u7528\u3002</p><p>\u5982\u679C\u6CA1\u6709 <code>CICD</code>\uFF0C\u6211\u4EEC\u5927\u81F4\u9700\u8981\u5982\u4E0B\u64CD\u4F5C\uFF1A</p><blockquote><p>\u524D\u7AEF\u54E6</p></blockquote><ol><li>\u6267\u884C\u9879\u76EE\u7684\u6253\u5305\u547D\u4EE4\uFF0C\u7136\u540E\u6253\u5305\u4E4B\u540E\u7684\u4EE3\u7801\u505A\u6210\u538B\u7F29\u5305\u3002</li><li>\u628A\u5305\u7ED9\u540E\u7AEF\u6216\u8005\u8FD0\u7EF4\u540C\u4E8B\uFF0C\u8BA9\u4ED6\u4EEC\u5E2E\u52A9\u6211\u4EEC\u90E8\u7F72\u5230\u4E22\u5230\u5BF9\u5E94\u670D\u52A1\u5668\u4E0A\uFF0C\u7136\u540E\u8BBF\u95EE\u3002</li><li>\u6D4B\u8BD5\u53D1\u73B0\u95EE\u9898\uFF0C\u4F60\u518D\u6539\uFF0C\u6539\u5B8C\u5728\u6253\u5305</li><li>\u5982\u6B64\u53CD\u53CD\u590D\u590D\uFF0C\u4ECE\u5F00\u53D1\u5230\u4E0A\u7EBF\uFF0C\u524D\u7AEF\u3001\u540E\u7AEF\u3001\u8FD0\u7EF4\uFF0C\u90FD\u5728\u6363\u9F13\u8FD9\u4E2A\u524D\u7AEF\u5305\uFF0C\u6709\u95EE\u9898\u5C31\u6539\u3002</li></ol><p>\u8FD9\u5C31\u7279\u522B\u7E41\u7410\uFF0C\u4E5F\u5F88\u6D6A\u8D39\u6548\u7387\uFF0C\u8FD9\u5C31\u662F\u6CA1\u6709 <code>CICD</code> \u7684\u60C5\u51B5\u3002</p><h2 id="\u6709-cicd" tabindex="-1">\u6709 CICD <a class="header-anchor" href="#\u6709-cicd" aria-hidden="true">#</a></h2><p>\u6709\u4E86 <code>CICD</code>\uFF0C\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u505A\u8FD9\u4E9B\u4E8B\u60C5\u4E86\u3002\u4E00\u5207\u90FD\u4EA4\u7ED9\u673A\u5668\u6267\u884C\u3002 \u6240\u4EE5\u6240\u8C13\u7684 <code>CICD</code> \u5C31\u662F <strong>\u81EA\u52A8\u5316</strong> \u7684\u5DE5\u5177\uFF0C\u4ED6\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u89E3\u653E\u4E00\u4E9B\u4E0D\u5FC5\u8981\u7684\u91CD\u590D\u5DE5\u4F5C\u3002</p><p>\u90A3\u4E48 <code>CICD</code> \u662F\u600E\u4E48\u505A\u5230\u7684\uFF1F</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A \u4F7F\u7528<code>Git</code>\uFF0C\u5E73\u65F6\u6211\u4EEC\u90FD\u4F1A\u4F7F\u7528\u4EE3\u7801\u4ED3\u5E93\uFF0C\u76EE\u524D\u4E3B\u8981\u90FD\u662F <code>Git</code>\uFF0C\u5728 <code>Git</code> \u4E2D\u7684\u64CD\u4F5C\uFF0C\u90FD\u662F\u6709\u8BB0\u5F55,\u5E76\u4E14\u53EF\u4EE5\u5728\u5BF9\u5E94\u64CD\u4F5C\u540E\u8FDB\u884C\u56DE\u8C03\u7684\uFF0C\u6BD4\u5982\u8BF4\uFF1A</p><ol><li>\u63D0\u4EA4\u4EE3\u7801 <code>push</code> \u4E4B\u540E\uFF0C\u505A\u6253\u5305\u53D1\u5E03\u64CD\u4F5C\uFF0C\u5728\u4E0B\u6587\u4F1A\u6709\u8BB2\u89E3\u5982\u4F55\u76D1\u542C\u3002</li><li><code>pull request</code> \u7684\u5408\u5E76\u8BF7\u6C42\uFF0C\u5408\u5E76\u524D\uFF0C\u8FDB\u884C\u4EE3\u7801\u9759\u6001\u68C0\u6D4B\uFF0C\u8FD0\u884C\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5408\u5E76\u4E4B\u540E\u8FDB\u884C\u91CD\u65B0\u90E8\u7F72\u7B49\u3002</li><li>\u50CF\u521B\u5EFA\u65B0\u5206\u652F\u3002\u3002\u3002\u7B49\u7B49</li></ol><p>\u6709\u4E86\u8FD9\u4E9B\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 <strong>\u7279\u5B9A\u7684\u65F6\u95F4\u70B9</strong>\u3001<strong>\u63D0\u4EA4\u4EE3\u7801</strong>\u3001<strong>\u5408\u5E76\u4EE3\u7801</strong> \u6216\u8005 <strong>\u5408\u5E76\u5206\u652F</strong> \u7B49\u64CD\u4F5C\u6267\u884C\u524D\u540E\u8FDB\u884C\u4E00\u4E9B <strong>\u81EA\u52A8\u5316</strong> \u7684\u64CD\u4F5C\uFF0C\u89E3\u653E\u81EA\u5DF1\u3002</p><p>\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u66F4\u6539\u4E86\u4E00\u6BB5\u4EE3\u7801\uFF0C<code>push</code> \u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u5F53\u4ED3\u5E93\u63A5\u6536\u5230\u4E4B\u540E\uFF0C\u8BA9\u5B83\u5E2E\u6211\u4EEC\u5F00\u4E00\u53F0\u865A\u62DF\u673A\uFF0C\u5E2E\u52A9\u6211\u4EEC\u8FD0\u884C\u6D4B\u8BD5\uFF0C\u68C0\u67E5\u4EE3\u7801\u683C\u5F0F\uFF0C\u7136\u540E\u6253\u5305\uFF0C\u653E\u5230\u5BF9\u5E94\u7684\u670D\u52A1\u5668\u7684\u5BF9\u5E94\u6587\u4EF6\u5939\u91CC\u9762\u3002</p><p>\u57FA\u672C\u6211\u4EEC\u80FD\u60F3\u5230\u7684\u5927\u90E8\u5206\u547D\u4EE4\u884C\u64CD\u4F5C\uFF0C\u90FD\u662F\u53EF\u4EE5\u5E2E\u6211\u4EEC\u505A\u7684\u3002</p>',22),r=[a];function s(l,n,p,C,_,h){return c(),o("div",null,r)}var I=e(i,[["render",s]]);export{D as __pageData,I as default};