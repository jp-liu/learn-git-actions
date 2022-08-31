# GitHub Actions

## 简单介绍

GitHub Actions 是一个持续集成 (Continuous integration) 和持续交付 (Continuous delivery) 的平台，它可以做到**自动化构建**、**测试**、**部署**。你可以创建工作流，构建和测试每一个 `pull request` 或者部署合并后的代码到生产环境。

`GitHub Actions` 可以在你的代码仓库发生某一个事件时运行指定的一个工作流。比如说，你修改了代码，并执行了 `push` 操作，你可以跑一个工作流，进行部署操作，将最新代码更新到对应站点。

GitHub 提供了 Linux、Windows、和 macOS 虚拟机运行你的工作流，当然你也可以自定义运行环境。

> GitHub Actions 是一个 `CI/CD` 的工具平台，能帮助我们做很多集成和交付的工作。
>
> 类似帮助我们做这些事情的平台和工具、服务器还有很多，如 `Jenkins`、`Travis CI`、`GitLab CI` 等
>
> [关于 `CI/CD`](/actions/ci-cd.md)
