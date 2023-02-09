import type { App } from 'vue';
import Card from './src/card.vue';
console.log(Card.name)
// 作为插件引入
Card.install = function (app: App): void {
  app.component('lc-card', Card);
};

// 按需
export { Card };

// 内部统一注册
export default {
  title: 'Card 卡片',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component('lc-card', Card);
  }
};