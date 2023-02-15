import type { App } from 'vue'
import BaseDialog from './src/base-dialog.vue'

BaseDialog.install = function(app: App): void {
  app.component('lc-base-dialog', BaseDialog)
}

export { BaseDialog }

export default {
  title: 'BaseDialog 弹窗',
  category: '通用',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component('lc-base-dialog', BaseDialog);
  }
}
