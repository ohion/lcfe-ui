### 组件的维护需要做三件事情
1、维护组件
2、组件的说明 docs/components/组件名.md
3、组件的测试 ui/组件名/test

### 新增组件
目录切换到packages/cli，运行 pnpm cli 详情查看packages/cli/README.md

### 本地开发
```sh
pnpm dev
```

### 组件测试
```sh
pnpm test
```

### 本地预览打包文件
```sh
pnpm docs:serve
```

### 发布
```sh
pnpm docs:build
```

#### 生成 changelog 文件
#### doc 发布到 gitlab
