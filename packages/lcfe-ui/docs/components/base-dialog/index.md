# BaseDialog 弹窗

+ 基于el-dialog 弹窗的二次封装

### 何时使用

+ 需要使内容在弹出层展示时。


### 基本用法
:::demo 

```vue
<template>
  <button @click="dialogVisible = true">点我打开弹窗-{{dialogVisible}}</button>
  <lc-base-dialog
    v-model="dialogVisible"
    title="详情"
    @close="dialogVisible = false"
  >
  弹窗的内容
  </lc-base-dialog>
</template>

<script setup >
import { ref } from 'vue'
const dialogVisible = ref(false)

</script>

<style>

</style>
```

:::

### lc-base-dialog

lc-base-dialog 参数

| 参数 | 类型 | 默认 | 说明 |
| ---- | ---- | ---- | ---- |
| modelValue | boolean |  |  |
| zIndex  |   number   |   -5   |    可选  |
| top        |    string  |   '15vh'   |    可选  |
| center  |   boolean   |  true    |  可选    |
| showClose  |   boolean   |  false    |  可选    |
| lockScroll  |   boolean   |  true    |  可选    |
| fullscreen  |   boolean   |    false  |  可选    |
| destroyOnClose  |   boolean   |   true   |  可选    |
| closeOnClickModal |   boolean   |   false   |  可选    |
| closeOnPressEscape |   boolean   |  false    |  可选    |
| title  |   string |      |  可选    |
| width  |   string   |      |  可选    |
| height  |   string   |      |  可选    |

lc-base-dialog 事件

| 事件 | 类型 | 说明 |
| ---- | ---- | ---- |
|   close   |      |   弹窗关闭时触发   |
|   closed   |      |   弹窗关闭时触发   |
|    open  |      |    同 el-dialog  |
|    opened  |      |  同 el-dialog     |

lc-base-dialog 插槽

| 插槽名 | 说明 |
| ---- | ---- |
|  header    |  标题    |
|   default   |   弹窗内容   |

