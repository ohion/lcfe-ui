<script lang="ts" setup>
import './base-dialog.scss'
import { ref, watch, computed, nextTick } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { ElDialog } from 'element-plus';
interface BaseDialogProps {
  modelValue: boolean
  zIndex?: number
  top?: string
  center?: boolean
  showClose?: boolean
  lockScroll?: boolean
  fullscreen?: boolean
  destroyOnClose?: boolean
  closeOnClickModal?: boolean
  closeOnPressEscape?: boolean
  title?: string // 标题
  width?: number
  height?: string
}
const props = withDefaults(defineProps<BaseDialogProps>(), {
  zIndex: -5,
  top: '15vh',
  center: true,
  showClose: false,
  lockScroll: true,
  fullscreen: false,
  destroyOnClose: true,
  closeOnClickModal: false,
  closeOnPressEscape: false,
  title: ''
})
const dialogVisible = ref<boolean>(props.modelValue)
watch(
  () => props.modelValue,
  (modelValue) => {
    dialogVisible.value = modelValue
    if (modelValue) {
      // nextTick(() => {
      //   const dialogEls = document.querySelectorAll('.base-dialog') as unknown as HTMLElement[]
      //   if (dialogEls.length) {
      //     dialogEls.forEach((dialogEl) => {
      //       setDomScale(dialogEl, 1920, 1080)
      //       window.addEventListener('resize', () => setDomScale(dialogEl, 1920, 1080))
      //     })
      //   }
      // })
    }
  },
  { immediate: true }
)

const inlineStyle = computed(() => ({ zIndex: props.zIndex, '--width': props.width + 'px' }))
const emit = defineEmits(['update:modelValue', 'open', 'opened', 'close', 'closed'])
const close = () => {
  dialogVisible.value = false
  emit('close')
  emit('update:modelValue', false)
}
</script>
<template>
  <div class="lc-base-dialog wrap">
    <el-dialog
      ref="dialog"
      v-model="dialogVisible"
      custom-class="base-dialog"
      :top="top"
      :center="center"
      :show-close="showClose"
      :lock-scroll="lockScroll"
      :fullscreen="fullscreen"
      :destroy-on-close="destroyOnClose"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :style="inlineStyle"
      @open="emit('open')"
      @opened="emit('opened')"
      @close="close"
      @closed="emit('closed')"
    >
      <template #header>
        <div class="header">
          <slot name="header">
            <div class="header-title">{{ title }}</div>
          </slot>
        </div>
        <div class="close-box">
          <el-icon color="#000" class="close" @click="close">
            <Close />
          </el-icon>
        </div>
      </template>
      <div :style="{ width: `calc(${props.width}px - 50px)`, height: props.height, maxWidth: '100%' }">
        <slot />
      </div>
    </el-dialog>
  </div>
</template>

