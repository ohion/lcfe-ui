import type { App } from 'vue'
import DetailHeader from './src/detail-header.vue'

DetailHeader.install = function(app: App): void {
  app.component('lc-detail-header', DetailHeader)
}

export { DetailHeader }

export default {
  title: 'DetailHeader 详情标题',
  category: '通用',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component('lc-detail-header', DetailHeader);
  }
}
