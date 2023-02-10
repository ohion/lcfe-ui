import Theme from "vitepress/theme";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./styles/index.scss";
// import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components.js";
// 引入组件 注册
import DevUI from '../../../ui/vue-lcfeui'

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    ctx.app.use(ElementPlus)
    //  注册组件
    ctx.app.use(DevUI);
    registerComponents(ctx.app);
  },
};