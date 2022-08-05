# GitHub Actions

## 简单介绍

GitHub Actions 是一个持续集成 (Continuous integration) 和持续交付 (Continuous delivery) 的平台，它可以做到**自动化构建**、**测试**、**部署**。你可以创建工作流，构建和测试每一个 `pull request` 或者部署合并后的代码到生产环境。

`GitHub Actions` 可以在你的代码仓库发生某一个事件时运行指定的一个工作流。比如说，你修改了代码，并执行了 `push` 操作，你可以跑一个工作流，进行部署操作，将最新代码更新到对应站点。

GitHub 提供了 Linux、Windows、和 macOS 虚拟机运行你的工作流，当然你也可以自定义运行环境。

> GitHub Actions 是一个 `CI/CD` 的工具平台，能帮助我们做很多集成和交付的工作。
>
> 类似帮助我们做这些事情的平台和工具、服务器还有很多，如 `Jenkins`、`Travis CI`、`GitLab CI` 等
>
> [关于 `CI/CD`](/CICD)

## GitHub Actions 的组件

你可以配置一个 GitHub Actions **工作流（workflow）**，他会在你的仓库发生某个时间的时候被触发，就比如一个 `pull request` 或者一个 `issue` 被创建的时候。

你的工作流包含一个或者多个任务（jobs）， 它们可以并行或者串行执行。每一个任务（jobs）都会在它自己的虚拟机运行器(runner)上，任务可以有一个或者多个步骤（steps），可以运行一个自定义的脚本或者运行一个动作（action），所谓动作（action）是一个可复用的扩展，用于简化你的工作流。

![overview-actions-simple](https://docs.github.com/assets/cb-25535/images/help/images/overview-actions-simple.png)

### Workflows（工作流）

工作流是一个可配置的自动化的程序。创建一个工作流，你需要定义一个 `YAML` 文件，当你的仓库触发某个事件的时候，工作流就会运行，当然也可以手动触发，或者定义一个时间表在特定时间点自动触发。

一个仓库可以创建多个工作流，每一个都执行不同的步骤，举个例子，一个工作流用于构建和测试 pull request，一个用于部署你的应用，再来一个，当有人新建 issue 的时候自动添加一个标签。

你也可以在一个工作流中引用另外一个工作流，查看「[可复用工作流](https://docs.github.com/en/actions/learn-github-actions/reusing-workflows)」。

### 事件（Events）

事件是指仓库触发运行工作流的具体的行为，比如创建一个 `pull request`，新建一个 `issue`、或者推送一个 `commit`。你也可以使用时间表触发一个工作流，或者通过请求一个 `REST API`，再或者手动触发。

事件完整的列表，可以查看「[触发工作流的事件](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)」。

### 任务（Jobs）

任务是在同一个运行器上执行的一组步骤（steps）。一个步骤（steps）要么是一个shell 脚本（script）要么是一个动作（action）。步骤会顺序执行，并彼此独立。因为每一个步骤都在同一个运行器上被执行，所以你可以从一个步骤（step）传递数据到另一个步骤（step） 。

你可以配置一个任务依赖其他任务，默认情况下，任务没有依赖，并行执行。当一个任务需要另外一个任务的时候，它会等到依赖的任务完成再执行。

### 动作（Actions）

动作是 GitHub Actions 平台的一个自定义的应用，它会执行一个复杂但是需要频繁重复的作业。使用动作可以减少重复代码。比如一个 action 可以实现从 GitHub 拉取你的 git 仓库，为你的构建环境创建合适的工具链等。

你可以写自己的动作 ，或者在 GitHub 市场找已经实现好的动作。

### 运行器（Runners）

一个运行器是一个可以运行工作流的服务。每一个运行器一次只运行一个单独的任务。GitHub 提供 Ubuntu Linux，Microsoft Windows 和 macOS 运行器，每一个工作流都运行在一个独立新建的虚拟机中。如果你需要一个不同的操作系统，你可以自定义运行器。请查看「[自定义运行器](https://docs.github.com/en/actions/hosting-your-own-runners)」。

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

![Status](https://user-images.githubusercontent.com/79979500/183048163-635c2c23-121e-4957-95be-48976c1b03f8.png)

