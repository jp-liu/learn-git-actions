import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/learn-git-actions/',
  title: 'Learn-git-actions',
  description: 'Learn Git Actions',
  themeConfig: {
    sidebar: {
      '/actions/': [
        {
          text: 'What is CICD',
          items: [
            { text: 'CICD', link: '/actions/ci-cd' }
          ]
        },
        {
          text: 'Git Actions',
          collapsible: true,
          items: [
            { text: 'What is Git Actions', link: '/actions/' },
            { text: 'Git Actions Component', link: '/actions/component' },
            { text: 'workflow', link: '/actions/workflow' },
          ]
        },
        {
          text: '实战',
          collapsible: true,
          items: [
            { text: '自动部署 Git Pages', link: '/actions/combat' },
          ]
        },
      ],
    }
  }
})

// function gen
