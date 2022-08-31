import{_ as e,c as t,o as s,a as o}from"./app.ccf4f0a4.js";const _=JSON.parse('{"title":"GitHub Actions \u7684\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Workflows\uFF08\u5DE5\u4F5C\u6D41\uFF09","slug":"workflows\uFF08\u5DE5\u4F5C\u6D41\uFF09"},{"level":2,"title":"\u4E8B\u4EF6\uFF08Events\uFF09","slug":"\u4E8B\u4EF6\uFF08events\uFF09"},{"level":2,"title":"\u4EFB\u52A1\uFF08Jobs\uFF09","slug":"\u4EFB\u52A1\uFF08jobs\uFF09"},{"level":2,"title":"\u52A8\u4F5C\uFF08Actions\uFF09","slug":"\u52A8\u4F5C\uFF08actions\uFF09"},{"level":2,"title":"\u8FD0\u884C\u5668\uFF08Runners\uFF09","slug":"\u8FD0\u884C\u5668\uFF08runners\uFF09"}],"relativePath":"actions/component.md"}'),r={name:"actions/component.md"},n=o('<h1 id="github-actions-\u7684\u7EC4\u4EF6" tabindex="-1">GitHub Actions \u7684\u7EC4\u4EF6 <a class="header-anchor" href="#github-actions-\u7684\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u4F60\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A GitHub Actions <strong>\u5DE5\u4F5C\u6D41\uFF08workflow\uFF09</strong>\uFF0C\u4ED6\u4F1A\u5728\u4F60\u7684\u4ED3\u5E93\u53D1\u751F\u67D0\u4E2A\u65F6\u95F4\u7684\u65F6\u5019\u88AB\u89E6\u53D1\uFF0C\u5C31\u6BD4\u5982\u4E00\u4E2A <code>pull request</code> \u6216\u8005\u4E00\u4E2A <code>issue</code> \u88AB\u521B\u5EFA\u7684\u65F6\u5019\u3002</p><p>\u4F60\u7684\u5DE5\u4F5C\u6D41\u5305\u542B\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u4EFB\u52A1\uFF08jobs\uFF09\uFF0C \u5B83\u4EEC\u53EF\u4EE5\u5E76\u884C\u6216\u8005\u4E32\u884C\u6267\u884C\u3002\u6BCF\u4E00\u4E2A\u4EFB\u52A1\uFF08jobs\uFF09\u90FD\u4F1A\u5728\u5B83\u81EA\u5DF1\u7684\u865A\u62DF\u673A\u8FD0\u884C\u5668(runner)\u4E0A\uFF0C\u4EFB\u52A1\u53EF\u4EE5\u6709\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u6B65\u9AA4\uFF08steps\uFF09\uFF0C\u53EF\u4EE5\u8FD0\u884C\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u811A\u672C\u6216\u8005\u8FD0\u884C\u4E00\u4E2A\u52A8\u4F5C\uFF08action\uFF09\uFF0C\u6240\u8C13\u52A8\u4F5C\uFF08action\uFF09\u662F\u4E00\u4E2A\u53EF\u590D\u7528\u7684\u6269\u5C55\uFF0C\u7528\u4E8E\u7B80\u5316\u4F60\u7684\u5DE5\u4F5C\u6D41\u3002</p><p><img src="https://docs.github.com/assets/cb-25535/images/help/images/overview-actions-simple.png" alt="overview-actions-simple"></p><h2 id="workflows\uFF08\u5DE5\u4F5C\u6D41\uFF09" tabindex="-1">Workflows\uFF08\u5DE5\u4F5C\u6D41\uFF09 <a class="header-anchor" href="#workflows\uFF08\u5DE5\u4F5C\u6D41\uFF09" aria-hidden="true">#</a></h2><p>\u5DE5\u4F5C\u6D41\u662F\u4E00\u4E2A\u53EF\u914D\u7F6E\u7684\u81EA\u52A8\u5316\u7684\u7A0B\u5E8F\u3002\u521B\u5EFA\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u4F60\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A <code>YAML</code> \u6587\u4EF6\uFF0C\u5F53\u4F60\u7684\u4ED3\u5E93\u89E6\u53D1\u67D0\u4E2A\u4E8B\u4EF6\u7684\u65F6\u5019\uFF0C\u5DE5\u4F5C\u6D41\u5C31\u4F1A\u8FD0\u884C\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u624B\u52A8\u89E6\u53D1\uFF0C\u6216\u8005\u5B9A\u4E49\u4E00\u4E2A\u65F6\u95F4\u8868\u5728\u7279\u5B9A\u65F6\u95F4\u70B9\u81EA\u52A8\u89E6\u53D1\u3002</p><p>\u4E00\u4E2A\u4ED3\u5E93\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u6BCF\u4E00\u4E2A\u90FD\u6267\u884C\u4E0D\u540C\u7684\u6B65\u9AA4\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u7528\u4E8E\u6784\u5EFA\u548C\u6D4B\u8BD5 pull request\uFF0C\u4E00\u4E2A\u7528\u4E8E\u90E8\u7F72\u4F60\u7684\u5E94\u7528\uFF0C\u518D\u6765\u4E00\u4E2A\uFF0C\u5F53\u6709\u4EBA\u65B0\u5EFA issue \u7684\u65F6\u5019\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A\u6807\u7B7E\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u5728\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u4E2D\u5F15\u7528\u53E6\u5916\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u67E5\u770B\u300C<a href="https://docs.github.com/en/actions/learn-github-actions/reusing-workflows" target="_blank" rel="noopener noreferrer">\u53EF\u590D\u7528\u5DE5\u4F5C\u6D41</a>\u300D\u3002</p><h2 id="\u4E8B\u4EF6\uFF08events\uFF09" tabindex="-1">\u4E8B\u4EF6\uFF08Events\uFF09 <a class="header-anchor" href="#\u4E8B\u4EF6\uFF08events\uFF09" aria-hidden="true">#</a></h2><p>\u4E8B\u4EF6\u662F\u6307\u4ED3\u5E93\u89E6\u53D1\u8FD0\u884C\u5DE5\u4F5C\u6D41\u7684\u5177\u4F53\u7684\u884C\u4E3A\uFF0C\u6BD4\u5982\u521B\u5EFA\u4E00\u4E2A <code>pull request</code>\uFF0C\u65B0\u5EFA\u4E00\u4E2A <code>issue</code>\u3001\u6216\u8005\u63A8\u9001\u4E00\u4E2A <code>commit</code>\u3002\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u65F6\u95F4\u8868\u89E6\u53D1\u4E00\u4E2A\u5DE5\u4F5C\u6D41\uFF0C\u6216\u8005\u901A\u8FC7\u8BF7\u6C42\u4E00\u4E2A <code>REST API</code>\uFF0C\u518D\u6216\u8005\u624B\u52A8\u89E6\u53D1\u3002</p><p>\u4E8B\u4EF6\u5B8C\u6574\u7684\u5217\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u300C<a href="https://docs.github.com/en/actions/reference/events-that-trigger-workflows" target="_blank" rel="noopener noreferrer">\u89E6\u53D1\u5DE5\u4F5C\u6D41\u7684\u4E8B\u4EF6</a>\u300D\u3002</p><h2 id="\u4EFB\u52A1\uFF08jobs\uFF09" tabindex="-1">\u4EFB\u52A1\uFF08Jobs\uFF09 <a class="header-anchor" href="#\u4EFB\u52A1\uFF08jobs\uFF09" aria-hidden="true">#</a></h2><p>\u4EFB\u52A1\u662F\u5728\u540C\u4E00\u4E2A\u8FD0\u884C\u5668\u4E0A\u6267\u884C\u7684\u4E00\u7EC4\u6B65\u9AA4\uFF08steps\uFF09\u3002\u4E00\u4E2A\u6B65\u9AA4\uFF08steps\uFF09\u8981\u4E48\u662F\u4E00\u4E2Ashell \u811A\u672C\uFF08script\uFF09\u8981\u4E48\u662F\u4E00\u4E2A\u52A8\u4F5C\uFF08action\uFF09\u3002\u6B65\u9AA4\u4F1A\u987A\u5E8F\u6267\u884C\uFF0C\u5E76\u5F7C\u6B64\u72EC\u7ACB\u3002\u56E0\u4E3A\u6BCF\u4E00\u4E2A\u6B65\u9AA4\u90FD\u5728\u540C\u4E00\u4E2A\u8FD0\u884C\u5668\u4E0A\u88AB\u6267\u884C\uFF0C\u6240\u4EE5\u4F60\u53EF\u4EE5\u4ECE\u4E00\u4E2A\u6B65\u9AA4\uFF08step\uFF09\u4F20\u9012\u6570\u636E\u5230\u53E6\u4E00\u4E2A\u6B65\u9AA4\uFF08step\uFF09 \u3002</p><p>\u4F60\u53EF\u4EE5\u914D\u7F6E\u4E00\u4E2A\u4EFB\u52A1\u4F9D\u8D56\u5176\u4ED6\u4EFB\u52A1\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EFB\u52A1\u6CA1\u6709\u4F9D\u8D56\uFF0C\u5E76\u884C\u6267\u884C\u3002\u5F53\u4E00\u4E2A\u4EFB\u52A1\u9700\u8981\u53E6\u5916\u4E00\u4E2A\u4EFB\u52A1\u7684\u65F6\u5019\uFF0C\u5B83\u4F1A\u7B49\u5230\u4F9D\u8D56\u7684\u4EFB\u52A1\u5B8C\u6210\u518D\u6267\u884C\u3002</p><h2 id="\u52A8\u4F5C\uFF08actions\uFF09" tabindex="-1">\u52A8\u4F5C\uFF08Actions\uFF09 <a class="header-anchor" href="#\u52A8\u4F5C\uFF08actions\uFF09" aria-hidden="true">#</a></h2><p>\u52A8\u4F5C\u662F GitHub Actions \u5E73\u53F0\u7684\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u5E94\u7528\uFF0C\u5B83\u4F1A\u6267\u884C\u4E00\u4E2A\u590D\u6742\u4F46\u662F\u9700\u8981\u9891\u7E41\u91CD\u590D\u7684\u4F5C\u4E1A\u3002\u4F7F\u7528\u52A8\u4F5C\u53EF\u4EE5\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u3002\u6BD4\u5982\u4E00\u4E2A action \u53EF\u4EE5\u5B9E\u73B0\u4ECE GitHub \u62C9\u53D6\u4F60\u7684 git \u4ED3\u5E93\uFF0C\u4E3A\u4F60\u7684\u6784\u5EFA\u73AF\u5883\u521B\u5EFA\u5408\u9002\u7684\u5DE5\u5177\u94FE\u7B49\u3002</p><p>\u4F60\u53EF\u4EE5\u5199\u81EA\u5DF1\u7684\u52A8\u4F5C \uFF0C\u6216\u8005\u5728 GitHub \u5E02\u573A\u627E\u5DF2\u7ECF\u5B9E\u73B0\u597D\u7684\u52A8\u4F5C\u3002</p><h2 id="\u8FD0\u884C\u5668\uFF08runners\uFF09" tabindex="-1">\u8FD0\u884C\u5668\uFF08Runners\uFF09 <a class="header-anchor" href="#\u8FD0\u884C\u5668\uFF08runners\uFF09" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u8FD0\u884C\u5668\u662F\u4E00\u4E2A\u53EF\u4EE5\u8FD0\u884C\u5DE5\u4F5C\u6D41\u7684\u670D\u52A1\u3002\u6BCF\u4E00\u4E2A\u8FD0\u884C\u5668\u4E00\u6B21\u53EA\u8FD0\u884C\u4E00\u4E2A\u5355\u72EC\u7684\u4EFB\u52A1\u3002GitHub \u63D0\u4F9B Ubuntu Linux\uFF0CMicrosoft Windows \u548C macOS \u8FD0\u884C\u5668\uFF0C\u6BCF\u4E00\u4E2A\u5DE5\u4F5C\u6D41\u90FD\u8FD0\u884C\u5728\u4E00\u4E2A\u72EC\u7ACB\u65B0\u5EFA\u7684\u865A\u62DF\u673A\u4E2D\u3002\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u4E0D\u540C\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8FD0\u884C\u5668\u3002\u8BF7\u67E5\u770B\u300C<a href="https://docs.github.com/en/actions/hosting-your-own-runners" target="_blank" rel="noopener noreferrer">\u81EA\u5B9A\u4E49\u8FD0\u884C\u5668</a>\u300D\u3002</p>',19),a=[n];function i(c,d,l,p,h,u){return s(),t("div",null,a)}var f=e(r,[["render",i]]);export{_ as __pageData,f as default};