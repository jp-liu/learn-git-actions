# 工作流

工作流简单说就是一个一套流程，列出从开头到结束都做那些事，在什么环境下制作

## 创建一个工作流

GitHub Actions 使用 YAML 语法定义工作流。每一个工作流保存为一个独立的 YAML 文件，目录是 .github/workflows 。

接下来我们在当前仓库创建一个示例工作流，当代码被推送的时候，就会执行特定的一些列命令。在这个示例工作流中， GitHub Actions 会检出提交后的仓库代码，安装依赖，运行 `bats -v`。

创建流程：

1. 在代码仓库根目录创建 `.github/workflows/` 目录。
2. 在 `.github/workflows` 目录，创建文件，名为 `learn-github-actions.yml`，添加以下代码：

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
    check-bats-version:
     runs-on: ubuntu-latest
     steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
   ```

3. 提交这些改动推送到 GitHub 仓库

你的新 GitHub Actions 工作流文件就会被安装在你的仓库，当有人提交代码的时候，工作流就会自动执行。关于一个任务的执行状态、历史，可以在仓库的 Actions 面板内查看。

![Actions](https://user-images.githubusercontent.com/79979500/183047081-a311951a-6d05-4dba-ad79-fa5506b88c4e.png)

我们来提交一次，看看运行状态和历史

![Status](https://user-images.githubusercontent.com/79979500/183051526-ed90c4e3-b6e2-4bcc-a644-2a6288106bd4.png)

## 理解工作流文件

为了更好的理解 YAML 语法，这节会解释例子中的每行代码：

```yaml
name: learn-github-actions
```

可选，工作流的名字，会出现在 GitHub 仓库的 Actions 选项栏里（上图中，箭头所指的地方）。

```yaml
on: [push]
```

指定工作流的触发事件。这个例子里，使用是 `push` 事件，当有人提交了一个代码修改或者合并了一个 pull request ，工作流就会触发。提交到每个分支都会被触发，如果你想在指定分支、路径、标签，查看 「[GitHub Actions 工作流语法](https://docs.github.com/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」

```yaml
jobs:
```

在 `learn-github-actions` 工作流的任务集合，一个工作流由一个或者多个任务组成。

```yaml
check-bats-version:
```

定义了一个名为`check-bats-version` 的任务，子键（child key）会定义该任务的属性。

```yaml
  runs-on: ubuntu-latest # 运行命令的环境
```

配置任务运行在最新的 Ubuntu Linux 运行器。

```yaml
 steps:
```

将 `check-bats-version` 任务下的所有步骤分为一组，嵌套的每一个条目都是一个独立的 action 或者 shell 脚本。

```yaml
- uses: actions/checkout@v2 # 使用一个动作
```

`uses` 关键字指定了这个步骤运行 `actions/checkout` 动作的 `v2` 大版本 。这是一个可以检出仓库代码到运行器的动作，它允许你运行脚本或者其他动作侵入你的代码（比如构建或者测试工具）。

```yaml
- uses: actions/setup-node@v2 # 使用一个动作，并携带配置
  with:
    node-version: '14'
```

这个步骤会使用 `actions/setup-node@v2` 动作安装指定版本的 Nodejs ，这会在你的 `PATH` 加上 `node` 和 `npm` 命令。

```yaml
- run: npm install -g bats
```

`run` 关键字会告诉任务在运行器上执行一个命令。在这个例子中，你正在使用 `npm` 安装 `bats` 软件测试包。

```yaml
- run: bats -v
```

最终，你运行 `bats` 命令，传入一个可以打印软件版本的参数。

## 可视化工作流文件

在这个图表，你可以看到你刚创建的工作流文件，以及这些 GitHub Actions 组件是如何组织的。每一个步骤都会执行一个独立的动作或者脚本文件。任务1 和 2 是运行命令，任务3 和 任务 4 是运行脚本文件。找到更多预构建的动作，查看 「[查找和自定义动作](https://docs.github.com/cn/actions/learn-github-actions/finding-and-customizing-actions)」。

[![img](https://camo.githubusercontent.com/15c0d5f8ec62b70b7f8cf07f1dfa5796ca6c588280e93b3977890ca4c2a59437/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323134383134372d38363635306632302d333265612d343361632d613766652d3637323563343831633466312e706e67)](https://camo.githubusercontent.com/15c0d5f8ec62b70b7f8cf07f1dfa5796ca6c588280e93b3977890ca4c2a59437/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323134383134372d38363635306632302d333265612d343361632d613766652d3637323563343831633466312e706e67)

## 查看工作流活动

一旦你的工作流开始运行，你可以在 GitHub 看到一个可视化的运行进度图表 ，查看每一个步骤的执行情况。

1. 在 GitHub.com ，导航至仓库主主页
2. 在你的仓库名下，点击 `Actions`。

[![img](https://user-images.githubusercontent.com/79979500/183052805-eb459bb0-edf9-4585-a89b-f66fdf464ab8.png)](https://camo.githubusercontent.com/663650c0d1ab84a007525b5937abedb87c978d0ffd965a861495abd5e2d3ff7a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323238323936312d65633633616236302d393931642d343738372d613137362d6165633237303633643564632e706e67)

1. 在左侧 sidebar，点击你想查看的工作流

[![img](https://camo.githubusercontent.com/a012b4e27fa7fa332879008bde78eafba0c4d9b5d1011c582f9aa82279898250/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323331323633362d66623663343235652d643164332d343063642d626235392d3339636465366634353834322e706e67)](https://user-images.githubusercontent.com/79979500/183053363-a8e88371-b8c6-4576-8535-1aeaed0be199.png)

1. 在 `Workflow runs` ，点击你想查看的运行记录的名称：

[![img](https://user-images.githubusercontent.com/79979500/183053733-192f2ff3-3a1b-4b9e-9235-24cc5bd53289.png)](https://camo.githubusercontent.com/5c5e7400e66eb3226959a2c851ae164b721e647e9b046d57a50021ac791c6600/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323335373634332d64306665393839372d626464362d346638312d616532622d3130353932356639333463382e706e67)

1. 在 Jobs 或者在可视化图表中，点击你想看到的任务：

[![img](https://user-images.githubusercontent.com/79979500/183054538-c6075019-0e2b-448c-a429-2c9c92f5eff8.png)](https://camo.githubusercontent.com/9c294b83a3edd6a8c43305600a09d66b355f176469a83caaeeb36054b4e9284e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636323432363037312d30363835656238302d633961322d343361332d393438662d6361363430656361646630332e706e67)

1. 查看每一个步骤的结果：

[![img](https://user-images.githubusercontent.com/79979500/183054683-fc91bad9-5212-49a9-97ad-b21aa7eb2714.png)](https://camo.githubusercontent.com/8aabb478b487375f2715eb0d4472fb12e85aef559dc383f08ebcee3855aa6f7a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f706963747572652f313633393636343434363839362d36396661626433612d393431362d343732612d616336362d3862313566333666396434352e706e67)
