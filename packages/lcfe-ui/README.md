### 组件的维护需要做三件事情
1. 维护组件
2. 组件的说明 docs/components/组件名.md
3. 组件的测试 ui/组件名/test

### 新增组件
1. 项目根目录下运行 pnpm cli 选择component，会自动生成新增组件的目录和docs
2. 项目根目录下运行 pnpm cli 选择ui，会自动生成sidebar.ts

### 本地开发
```sh
pnpm dev
```

### 组件测试
```sh
pnpm test
```

### 打包
```sh
pnpm docs:build
```

### 本地预览打包文件
```sh
pnpm docs:serve
```

#### 生成 changelog 文件
#### docs 发布到 gitlab
