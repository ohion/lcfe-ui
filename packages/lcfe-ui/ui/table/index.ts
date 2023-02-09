import type { App } from 'vue';
import Table from './src/table.vue';
// 作为插件引入
Table.install = function (app: App): void {
  app.component('lc-table', Table);
};

// 按需
export { Table };

// 内部统一注册
export default {
  title: 'table',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component('lc-table', Table);
  }
};