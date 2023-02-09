import Theme from "vitepress/theme";
import "./styles/index.scss";
import "vitepress-theme-demoblock/theme/styles/index.css";
import { registerComponents } from "./register-components.js";
// 引入组件 注册
import DevUI from '../../../ui/vue-lcfeui'

export default {
  ...Theme,
  enhanceApp({ app }) {
    //  注册组件
    app.use(DevUI);
    registerComponents(app);
  },
};