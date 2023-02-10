import type { App } from 'vue'
import Form from './src/form.vue'

Form.install = function(app: App): void {
  app.component(Form.name, Form)
}

export { Form }

export default {
  title: 'Form 表单',
  category: '数据录入',
  status: undefined, // TODO: 组件若开发完成则填入"100%"，并删除该注释
  install(app: App): void {
    app.component(Form.name, Form);
  }
}
