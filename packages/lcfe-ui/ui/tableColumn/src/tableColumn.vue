<script setup lang="ts">
import { useSlots, computed, StyleValue } from 'vue'
import {  ElTableColumn} from 'element-plus'

interface Props {
  prop?: string
  label?: string
  width?: string | number
  showOverflowTooltip?: boolean
  showPreview?: boolean
  placeholder?: string
  formatter?: any
  formatMap?: Record<string | number, string> | string[]
  align?: string
  type?: string
  style?: StyleValue
  hideOnClickModal?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  prop: undefined,
  label: undefined,
  width: undefined,
  placeholder: '-',
  formatter: undefined,
  formatMap: undefined,
  showOverflowTooltip: true,
  showPreview: false,
  align: 'center',
  type: undefined,
  style: undefined,
  hideOnClickModal: true
})
const enableSlot = computed(() => (name: string) => Object.keys(useSlots()).includes(name))
const selfFormatter =
  props.formatter ||
  ((row: any) => (props.formatMap ? props.formatMap[row[props.prop]] : row[props.prop] ?? props.placeholder))
</script>

<template>
  <el-table-column
    :prop="prop"
    :label="label"
    :width="width"
    :align="align"
    :formatter="selfFormatter"
    :show-overflow-tooltip="showOverflowTooltip"
  >
    <template v-if="enableSlot('header')" #header="{ column, $index }">
      <slot name="header" :column="column" :index="$index" />
    </template>
    <template v-if="enableSlot('default')" #default="{ row, $index }">
      <slot :row="row" :index="$index" />
    </template>
    <template v-else-if="enableSlot(prop)" #default="{ row, $index }">
      <slot :row="row" :index="$index" :name="prop" />
    </template>
    <template v-else-if="type === 'image'" #default="{ row }">
      <el-image
        :src="row[prop]"
        :alt="alt"
        :style="style"
        :fit="fill"
        :preview-src-list="showPreview ? [row[prop]] : []"
        preview-teleported
        :hide-on-click-modal="hideOnClickModal"
      />
    </template>
  </el-table-column>
</template>

<style lang="less" scoped></style>
