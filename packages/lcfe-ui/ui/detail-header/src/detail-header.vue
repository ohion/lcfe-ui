<script setup lang="ts">
import 'tailwindcss/tailwind.css'

interface headerProps {
  title: string
}
const prop = withDefaults(defineProps<headerProps>(), {
  title: '默认标题'
})
</script>
<template>
  <el-divider style="margin-top: 0" />
  <div class="flex items-center pl-3 pb-4">
    <span class="base-info-circle base-info-circle-left" />
    <span class="base-info-circle base-info-circle-right" />
    <h2 class="pl-2 font-bold" style="font-size: 18px">{{ title }}</h2>
    <slot />
  </div>
</template>
<style lang="scss" >
.base-info-circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.base-info-circle-left {
  background-color: #3761ee;
}
.base-info-circle-right {
  background-color: #95adff;
  position: relative;
  left: -2px;
  z-index: -9;
}
</style>
