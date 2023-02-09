# Table 表格

+ 集成了获取表格数据、分页的table组件

## 何时使用

+ 需要使用表格时

## 基本用法

:::demo Table 示例

```vue

<template>
<div style="height:500px;">
     <lc-table
        ref="commonTable"
        :get-list-api="getUserListApi"
        style="width: 100%"
        class="mytable"
        :filter-form="filterForm"
    >
        <template #header>
            <div class="flex justify-between">
                新增人员
            </div>
        </template>
        <lc-table-column prop="realName" label="姓名" width="80" />
        <lc-table-column prop="userName" label="账号" width="120" />
        <lc-table-column prop="phoneNumber" label="手机号" width="120" />
        <lc-table-column prop="postName" label="任职岗位" />
        <lc-table-column prop="orgName" label="所在组织" />
        <lc-table-column prop="roleName" label="角色" />
    </lc-table>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const DEFAULT_OPTION = {
  isEnabled: true,
  keyword: undefined
}
const filterForm = ref(JSON.parse(JSON.stringify(DEFAULT_OPTION)))
const getUserListApi = ()=>{
    return Promise.resolve({
        items:[]
    })
}
</script>
```

