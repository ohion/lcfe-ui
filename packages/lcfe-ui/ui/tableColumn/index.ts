import type { App } from 'vue';
import TableColumn from './src/tableColumn.vue'
// 作为插件引入
TableColumn.install = function (app: App): void {
  app.component('lc-table-column', TableColumn);
};

// 按需
export { TableColumn };

// 内部统一注册
export default {
  title: 'table',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component('lc-table-column', TableColumn);
  }
};