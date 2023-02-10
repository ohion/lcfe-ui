import nav from './nav';
import markdown from './markdown';
import sidebar from './sidebar';

export default {
  base:'/lcfe-ui/',
  outDir:'../public',
  lang: 'zh-CN',
  title: 'lcfe-ui',
  description: 'lcfe 组件库',
  lastUpdated: true,
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  markdown,
  themeConfig: {
    sidebar,
    nav,
    logo: '/favicon.ico'
  }
};