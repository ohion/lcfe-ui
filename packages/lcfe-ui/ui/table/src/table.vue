<script lang="ts" setup>
import { computed, ref, useSlots, watch } from 'vue'
import { ElMessage,ElTable, ElTableColumn,ElPagination} from 'element-plus'

type Fn = (params: any) => Promise<any>

interface Props {
  pageSize?: number
  useTableIndex?: boolean
  hideSelection?: boolean
  hideSinglePage?: boolean
  hiddenPagination?: boolean
  hiddenFilterButton?: boolean
  filterOptions?: object
  filterForm?: object
  getListApi?: Fn
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 10,
  useTableIndex: true,
  hideSelection: true,
  hiddenPagination: false,
  hiddenFilterButton: false,
  filterOptions: () => ({}),
  filterForm: () => ({}),
  getListApi: (): Promise<any> => new Promise(() => ({}))
})

const emit = defineEmits(['handleSelectionChange', 'handleSortChange', 'selectionChange', 'search', 'dataChange'])

const pageSizes = computed(() => [props.pageSize, props.pageSize * 2, props.pageSize * 3, props.pageSize * 4])

const filters = ref(props.filterForm)
watch(
  () => props.filterForm,
  (val) => {
    filters.value = { ...val }
  },
  { deep: true }
)

const selfPageSize = ref(props.pageSize)
const filter = ref({ pageIndex: 'pageIndex', pageSize: 'pageSize', ...props.filterOptions })
const currentPage = ref(1)
const totals = ref(0)
const tableData = ref([])

const enableSlot = computed(() => (name: string) => Object.keys(useSlots()).includes(name))

async function getList(pageIndex = 1, filterForm: any = {}) {
  filters.value = { ...filters.value, ...filterForm }
  try {
    const { rows, items, list, totalCount, total, records } = await props.getListApi({
      ...filters.value,
      [filter.value.pageIndex]: pageIndex || 1,
      pageNum: pageIndex || 1,
      [filter.value.pageSize]: selfPageSize.value || 10
    })
    totals.value = +String(total) || +(String(totalCount) || totals.value)
    tableData.value = items || list || rows || records
    emit('dataChange', tableData.value)
    currentPage.value = pageIndex
  } catch (error: any) {
    if (error?.message !== '请求过于频繁') {
      currentPage.value = 1
      totals.value = 0
      tableData.value = []
      emit('dataChange', tableData.value)
    }
    ElMessage.error(error.message)
  }
}
getList()

function handleSizeChange(size: number) {
  selfPageSize.value = size
  getList(1)
}

function handleSelectionChange(e: any) {
  const idSet = e.map((item: any) => item.id)
  emit('handleSelectionChange', idSet)
}

function handleSortChange(e: any) {
  emit('handleSortChange', e)
}

defineExpose({ getList })
</script>

<template>
  <div class="common-table flex-1 flex flex-col overflow-hidden">
    <div v-if="enableSlot('header')" class="common-table__header">
      <slot name="header" />
    </div>
    <div class="common-table__body flex-1 overflow-hidden">
      <el-table
        :data="tableData"
        height="100%"
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange"
      >
        <el-table-column v-if="useTableIndex" align="center" width="80" label="序号">
          <template #default="{ $index }">
            <span>{{ $index + 1 + pageSize * (currentPage - 1) }}</span>
          </template>
        </el-table-column>
        <slot />
      </el-table>
    </div>
    <div v-if="enableSlot('footer') || !hiddenPagination" class="common-table__footer">
      <slot name="footer">
        <el-pagination
          layout="prev, pager, next, total"
          class="flex mt-auto pagination"
          :total="totals"
          :page-sizes="pageSizes"
          :page-size="selfPageSize"
          :hide-on-single-page="hideSinglePage"
          :current-page="currentPage"
          background
          @size-change="handleSizeChange"
          @selection-change="$emit('selectionChange', $event)"
          @current-change="getList"
        />
      </slot>
    </div>
  </div>
</template>

