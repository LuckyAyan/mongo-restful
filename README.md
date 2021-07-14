# 基于 mongodb 自动编排 RESTFul 风格接口

只需在 model 文件夹内定义模型文件，即可自动生成 RESTFul 风格的 CRUD 接口。

## 示例

- GET /api/user
- GET /api/user/:id
- POST /api/user
- PUT /api/user/:id
- DELETE /api/user/:id

## 依赖

- mongoose
- koa
- koa-router
- koa-bodyparser
