import { defineConfig ,searchForWorkspaceRoot} from 'vite'
import vue from '@vitejs/plugin-vue'

// jsx 依赖
import vueJsx from '@vitejs/plugin-vue-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueJsx()],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts','.tsx']
  },
  optimizeDeps: {
    exclude: ['lodash-es', 'mitt', 'async-validator', 'css-vars-ponyfill', 'rxjs', '@vueuse/core', '@floating-ui/dom', 'vue-router'],
  },
  server: {
    fs: {

      // Allow serving files from one level up to the project root
      // allow: ['..',searchForWorkspaceRoot(process.cwd()),'*'],
      strict: false
    },
  },
})
