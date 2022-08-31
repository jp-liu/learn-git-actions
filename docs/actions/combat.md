# 实战

在上一篇中我们了解了 GitHub Actions 和它的一些名词，以及一个小小的测试用例。

接下来让我们来通过 GitHub Actions 自动发布当前文档到 `GitHub Pages`。

> `GitHub Pages` 是 `GitHub` 提供的免费的服务器平台（仅支持静态站点，不支持后端服务），我们可以通过它发布一些自己的博客、文档等。

## 任务

首先我们来看看，我们要实现自动部署 `GitHub Pages` 需要做哪些操作。

1. 在提交代码的时候，自动执行部署操作。 对应一个 `push` 事件。
2. 运行打包操作，获取需要部署的项目代码。对应一个 `job`
3. 将结果代码放到仓库的文档分支。

是不是也蛮简单，接下来我们来实现一下，创建一个工作流文件，我这里为 `deploy.yml`

```yaml
name: deploy
on:
  push:
    branches:
      - 'main'
jobs:
  deploy-docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2 # 检出仓库代码到运行器
      - uses: actions/setup-node@v2 # 安装 node 环境
        with:
          node-version: 14 # node -v:14
      - name: install dependencies
        run: |
          npm install
          npm run build
      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@v4.3.3 # 一个 action 市场定义好的工具，辅助我们将文件提交到对应的分支
        with:
          token: ${{ secrets.ACCESS_TOKEN }} # 我们自己的 git 凭证，下文会介绍如何生成
          branch: gh-pages-deploy # 文件提交的分支
          folder: docs/.vitepress/dist # 上面打完包之后静态文件的文件夹

```

OK，接下来我们提交试试看

![success](https://user-images.githubusercontent.com/79979500/183091802-d8fc3202-af68-42f0-86f7-88e65348d317.png)

成功了呢！

接下来看看上面需要的 `secrets.ACCESS_TOKEN` 是怎么生成的。

1. 每个仓库都可以给 Actions 提供各种凭证，让我们在执行命令期间提供对应的信息，比如我们这里的 `token` ，还有类似于 `npm` 发包的凭证等，他们都被记录在仓库的 `settings` 面板内

   ![acctions](https://user-images.githubusercontent.com/79979500/183093125-2e401960-e8ec-4fdd-a80c-0f6902ccaa8d.png)

2. 新建一个 git 用户凭证，就是验证我们自己身份的

   ![new secret](https://user-images.githubusercontent.com/79979500/183093445-ed2eacd9-37b5-459a-813b-856eef227f80.png)

3. 在上面名字我们是随便写，在 GitHub Actions 中使用的时候，使用对应的名称就行，这里的值呢，来源是格子网站对应提供的凭证信息，我们以 GitHub 为例。

   ![1](https://user-images.githubusercontent.com/79979500/183093941-4054bca2-f644-409c-84d1-c6b9149cada1.png)

   ![2](https://user-images.githubusercontent.com/79979500/183094357-92e334a5-a866-41a0-9f13-fb89ae5edde1.png)

   ![3](https://user-images.githubusercontent.com/79979500/183094507-53415a9f-6f55-45a1-90eb-f4cdc939a098.png)

   ![4](https://user-images.githubusercontent.com/79979500/183094870-69eee565-bea9-4425-922c-f1acee7fc19e.png)

   ![5](https://user-images.githubusercontent.com/79979500/183094973-57672531-cf07-45e9-a7b8-a17794f5ca44.png)

4. 好了我们的凭证拿到了，可以去粘贴到我们创建的凭证窗口中了。这样就可以让完成上传了

## GitHub Pages

上面的操作完成之后，我们就可以去开启我们自己的静态站点了。

我们在仓库的 Settings 的 Pages 面板中，完成一些配置

![GitHub Pages](https://user-images.githubusercontent.com/79979500/183097188-8def602a-a3ad-4132-af47-25c9466ea5ae.png)

完成之后，就可以通过上面的地址访问了，我这里是 **<https://jp-liu.github.io/learn-git-actions/>**

访问一下

![white](https://user-images.githubusercontent.com/79979500/183097716-d1b47e01-2538-4968-8b97-f594ec48b3fc.png)

样式错乱了，这个是我这个 `vitepress` 的打包路径 `base` 没有配置，我来加一下,大家可以自己设置自己的 base

```js
import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/learn-git-actions/',
  title: 'learn-git-actions',
  description: 'Learn Git Actions',
})
```

接下来提交，就会自动部署了，我们提交一下再访问
