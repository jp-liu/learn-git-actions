import{_ as s,c as a,o as n,a as p}from"./app.ccf4f0a4.js";const A=JSON.parse('{"title":"\u5B9E\u6218","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4EFB\u52A1","slug":"\u4EFB\u52A1"},{"level":2,"title":"GitHub Pages","slug":"github-pages"}],"relativePath":"actions/combat.md"}'),l={name:"actions/combat.md"},o=p(`<h1 id="\u5B9E\u6218" tabindex="-1">\u5B9E\u6218 <a class="header-anchor" href="#\u5B9E\u6218" aria-hidden="true">#</a></h1><p>\u5728\u4E0A\u4E00\u7BC7\u4E2D\u6211\u4EEC\u4E86\u89E3\u4E86 GitHub Actions \u548C\u5B83\u7684\u4E00\u4E9B\u540D\u8BCD\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5C0F\u5C0F\u7684\u6D4B\u8BD5\u7528\u4F8B\u3002</p><p>\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u6765\u901A\u8FC7 GitHub Actions \u81EA\u52A8\u53D1\u5E03\u5F53\u524D\u6587\u6863\u5230 <code>GitHub Pages</code>\u3002</p><blockquote><p><code>GitHub Pages</code> \u662F <code>GitHub</code> \u63D0\u4F9B\u7684\u514D\u8D39\u7684\u670D\u52A1\u5668\u5E73\u53F0\uFF08\u4EC5\u652F\u6301\u9759\u6001\u7AD9\u70B9\uFF0C\u4E0D\u652F\u6301\u540E\u7AEF\u670D\u52A1\uFF09\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5B83\u53D1\u5E03\u4E00\u4E9B\u81EA\u5DF1\u7684\u535A\u5BA2\u3001\u6587\u6863\u7B49\u3002</p></blockquote><h2 id="\u4EFB\u52A1" tabindex="-1">\u4EFB\u52A1 <a class="header-anchor" href="#\u4EFB\u52A1" aria-hidden="true">#</a></h2><p>\u9996\u5148\u6211\u4EEC\u6765\u770B\u770B\uFF0C\u6211\u4EEC\u8981\u5B9E\u73B0\u81EA\u52A8\u90E8\u7F72 <code>GitHub Pages</code> \u9700\u8981\u505A\u54EA\u4E9B\u64CD\u4F5C\u3002</p><ol><li>\u5728\u63D0\u4EA4\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u81EA\u52A8\u6267\u884C\u90E8\u7F72\u64CD\u4F5C\u3002 \u5BF9\u5E94\u4E00\u4E2A <code>push</code> \u4E8B\u4EF6\u3002</li><li>\u8FD0\u884C\u6253\u5305\u64CD\u4F5C\uFF0C\u83B7\u53D6\u9700\u8981\u90E8\u7F72\u7684\u9879\u76EE\u4EE3\u7801\u3002\u5BF9\u5E94\u4E00\u4E2A <code>job</code></li><li>\u5C06\u7ED3\u679C\u4EE3\u7801\u653E\u5230\u4ED3\u5E93\u7684\u6587\u6863\u5206\u652F\u3002</li></ol><p>\u662F\u4E0D\u662F\u4E5F\u86EE\u7B80\u5355\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u6587\u4EF6\uFF0C\u6211\u8FD9\u91CC\u4E3A <code>deploy.yml</code></p><div class="language-yaml"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deploy</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">deploy-docs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u68C0\u51FA\u4ED3\u5E93\u4EE3\u7801\u5230\u8FD0\u884C\u5668</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/setup-node@v2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u5B89\u88C5 node \u73AF\u5883</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># node -v:14</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install dependencies</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">          npm install</span></span>
<span class="line"><span style="color:#C3E88D;">          npm run build</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build and Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JamesIves/github-pages-deploy-action@v4.3.3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u4E00\u4E2A action \u5E02\u573A\u5B9A\u4E49\u597D\u7684\u5DE5\u5177\uFF0C\u8F85\u52A9\u6211\u4EEC\u5C06\u6587\u4EF6\u63D0\u4EA4\u5230\u5BF9\u5E94\u7684\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.ACCESS_TOKEN }}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u6211\u4EEC\u81EA\u5DF1\u7684 git \u51ED\u8BC1\uFF0C\u4E0B\u6587\u4F1A\u4ECB\u7ECD\u5982\u4F55\u751F\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gh-pages-deploy</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u6587\u4EF6\u63D0\u4EA4\u7684\u5206\u652F</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">folder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># \u4E0A\u9762\u6253\u5B8C\u5305\u4E4B\u540E\u9759\u6001\u6587\u4EF6\u7684\u6587\u4EF6\u5939</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>OK\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u63D0\u4EA4\u8BD5\u8BD5\u770B</p><p><img src="https://user-images.githubusercontent.com/79979500/183091802-d8fc3202-af68-42f0-86f7-88e65348d317.png" alt="success"></p><p>\u6210\u529F\u4E86\u5462\uFF01</p><p>\u63A5\u4E0B\u6765\u770B\u770B\u4E0A\u9762\u9700\u8981\u7684 <code>secrets.ACCESS_TOKEN</code> \u662F\u600E\u4E48\u751F\u6210\u7684\u3002</p><ol><li><p>\u6BCF\u4E2A\u4ED3\u5E93\u90FD\u53EF\u4EE5\u7ED9 Actions \u63D0\u4F9B\u5404\u79CD\u51ED\u8BC1\uFF0C\u8BA9\u6211\u4EEC\u5728\u6267\u884C\u547D\u4EE4\u671F\u95F4\u63D0\u4F9B\u5BF9\u5E94\u7684\u4FE1\u606F\uFF0C\u6BD4\u5982\u6211\u4EEC\u8FD9\u91CC\u7684 <code>token</code> \uFF0C\u8FD8\u6709\u7C7B\u4F3C\u4E8E <code>npm</code> \u53D1\u5305\u7684\u51ED\u8BC1\u7B49\uFF0C\u4ED6\u4EEC\u90FD\u88AB\u8BB0\u5F55\u5728\u4ED3\u5E93\u7684 <code>settings</code> \u9762\u677F\u5185</p><p><img src="https://user-images.githubusercontent.com/79979500/183093125-2e401960-e8ec-4fdd-a80c-0f6902ccaa8d.png" alt="acctions"></p></li><li><p>\u65B0\u5EFA\u4E00\u4E2A git \u7528\u6237\u51ED\u8BC1\uFF0C\u5C31\u662F\u9A8C\u8BC1\u6211\u4EEC\u81EA\u5DF1\u8EAB\u4EFD\u7684</p><p><img src="https://user-images.githubusercontent.com/79979500/183093445-ed2eacd9-37b5-459a-813b-856eef227f80.png" alt="new secret"></p></li><li><p>\u5728\u4E0A\u9762\u540D\u5B57\u6211\u4EEC\u662F\u968F\u4FBF\u5199\uFF0C\u5728 GitHub Actions \u4E2D\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u5BF9\u5E94\u7684\u540D\u79F0\u5C31\u884C\uFF0C\u8FD9\u91CC\u7684\u503C\u5462\uFF0C\u6765\u6E90\u662F\u683C\u5B50\u7F51\u7AD9\u5BF9\u5E94\u63D0\u4F9B\u7684\u51ED\u8BC1\u4FE1\u606F\uFF0C\u6211\u4EEC\u4EE5 GitHub \u4E3A\u4F8B\u3002</p><p><img src="https://user-images.githubusercontent.com/79979500/183093941-4054bca2-f644-409c-84d1-c6b9149cada1.png" alt="1"></p><p><img src="https://user-images.githubusercontent.com/79979500/183094357-92e334a5-a866-41a0-9f13-fb89ae5edde1.png" alt="2"></p><p><img src="https://user-images.githubusercontent.com/79979500/183094507-53415a9f-6f55-45a1-90eb-f4cdc939a098.png" alt="3"></p><p><img src="https://user-images.githubusercontent.com/79979500/183094870-69eee565-bea9-4425-922c-f1acee7fc19e.png" alt="4"></p><p><img src="https://user-images.githubusercontent.com/79979500/183094973-57672531-cf07-45e9-a7b8-a17794f5ca44.png" alt="5"></p></li><li><p>\u597D\u4E86\u6211\u4EEC\u7684\u51ED\u8BC1\u62FF\u5230\u4E86\uFF0C\u53EF\u4EE5\u53BB\u7C98\u8D34\u5230\u6211\u4EEC\u521B\u5EFA\u7684\u51ED\u8BC1\u7A97\u53E3\u4E2D\u4E86\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BA9\u5B8C\u6210\u4E0A\u4F20\u4E86</p></li></ol><h2 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u7684\u64CD\u4F5C\u5B8C\u6210\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u53BB\u5F00\u542F\u6211\u4EEC\u81EA\u5DF1\u7684\u9759\u6001\u7AD9\u70B9\u4E86\u3002</p><p>\u6211\u4EEC\u5728\u4ED3\u5E93\u7684 Settings \u7684 Pages \u9762\u677F\u4E2D\uFF0C\u5B8C\u6210\u4E00\u4E9B\u914D\u7F6E</p><p><img src="https://user-images.githubusercontent.com/79979500/183097188-8def602a-a3ad-4132-af47-25c9466ea5ae.png" alt="GitHub Pages"></p><p>\u5B8C\u6210\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u4E0A\u9762\u7684\u5730\u5740\u8BBF\u95EE\u4E86\uFF0C\u6211\u8FD9\u91CC\u662F <strong><a href="https://jp-liu.github.io/learn-git-actions/" target="_blank" rel="noopener noreferrer">https://jp-liu.github.io/learn-git-actions/</a></strong></p><p>\u8BBF\u95EE\u4E00\u4E0B</p><p><img src="https://user-images.githubusercontent.com/79979500/183097716-d1b47e01-2538-4968-8b97-f594ec48b3fc.png" alt="white"></p><p>\u6837\u5F0F\u9519\u4E71\u4E86\uFF0C\u8FD9\u4E2A\u662F\u6211\u8FD9\u4E2A <code>vitepress</code> \u7684\u6253\u5305\u8DEF\u5F84 <code>base</code> \u6CA1\u6709\u914D\u7F6E\uFF0C\u6211\u6765\u52A0\u4E00\u4E0B,\u5927\u5BB6\u53EF\u4EE5\u81EA\u5DF1\u8BBE\u7F6E\u81EA\u5DF1\u7684 base</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vitepress</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineConfig</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/learn-git-actions/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">learn-git-actions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">description</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Learn Git Actions</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u63A5\u4E0B\u6765\u63D0\u4EA4\uFF0C\u5C31\u4F1A\u81EA\u52A8\u90E8\u7F72\u4E86\uFF0C\u6211\u4EEC\u63D0\u4EA4\u4E00\u4E0B\u518D\u8BBF\u95EE</p>`,24),e=[o];function t(c,r,i,y,D,C){return n(),a("div",null,e)}var d=s(l,[["render",t]]);export{A as __pageData,d as default};