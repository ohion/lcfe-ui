- 安装依赖在最外层安装，不要在packages里面安装


docs build之前要生成sidebar.ts，这两个是不会同步到git仓库的。


### 打包组件库并发布到npm包
```shell
pnpm build:lib
```