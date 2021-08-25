# Json DeMo

the json demo project

- [一. 介绍](#一-介绍)
- [二. 脚本](#二-脚本)
  - [2.1. 配置](#21-配置)
  - [2.2. 实例](#22-实例)
- [三. 数据过滤](#三-数据过滤)
  - [3.1. 条件查询](#31-条件查询)
  - [3.2. 分页查询](#32-分页查询)
  - [3.3. 排序](#33-排序)
  - [3.4. 切片](#34-切片)
  - [3.5. 检索](#35-检索)
  - [3.6. 关联](#36-关联)
- [三. 参考](#三-参考)

## 一. 介绍

&nbsp;&nbsp;`json-server` 是一个 Node 模块，运行 Express 服务器，可以指定一个 `json/js` 文件托管成一个具备全`RESTful` 风格的 API ,并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器。

## 二. 脚本

本文档使用如下工具:

```bash
# 配置环境依赖
npm install --save-dev json-server
npm install --save-dev mockjs

# 运行脚本
npm run app
# 或
npm run mock
```

### 2.1. 配置

|        参数        | 简写 | 默认值                             |               说明                |
| :----------------: | :--: | :--------------------------------- | :-------------------------------: |
|      --config      |  -c  | 指定配置文件                       |   [默认值: "json-server.json"]    |
|       --port       |  -p  | 设置端口 [默认值: 3000]            |              Number               |
|       --host       |  -H  | 设置域 [默认值: "0.0.0.0"]         |              String               |
|      --watch       |  -w  | 监控文件                           |             [boolean]             |
|      --routes      |  -r  | 指定自定义路由                     |                                   |
|   --middlewares    |  -m  | 指定中间件 files                   |              [数组]               |
|      --static      |  -s  | 设置静态文件                       | 静态目录,类比：express 的静态目录 |
|     --readonly     | --ro | 只允许 GET 请求                    |             [boolean]             |
|     --no-cors      | --nc | 禁止跨域资源共享                   |             [boolean]             |
|     --no-gzip      | --ng | 禁止 GZIP                          |             [boolean]             |
|    --snapshots     |  -S  | 设置快照目录                       |           [默认值: "."]           |
|      --delay       |  -d  | 设置反馈延时 (ms)                  |                                   |
|        --id        |  -i  | 设置数据的 id 属性 (e.g. \_id)     |          [默认值: "id"]           |
|      --quiet       |  -q  | 不输出日志信息                     |             [boolean]             |
| --foreignKeySuffix |  --  | 设置外键 (e.g. \_id as in post_id) |          [默认值: "Id"]           |
|       --help       |  -h  | 显示帮助信息                       |             [boolean]             |
|     --version      |  -v  | 显示版本号                         |             [boolean]             |

### 2.2. 实例

```json
{
  "delay": 250,
  //   "help": true,
  "host": "localhost",
  "no-cors": false,
  "no-gzip": false,
  "port": 12345,
  "quiet": false,
  "watch": true,
  "read-only": false,
  //   "routes": "./route/route.json",
  "static": "./public",
  "snapshots": "./snapshots"
  //   "version": true
}
```

## 三. 数据过滤

### 3.1. 条件查询

可以用的`运算符` 拼接条件为：

- `_gte` : 大于等于
- `_lte` : 小于等于
- `_ne` : 不等于
- `_like` : 包含, 模糊查找, 支持正则

### 3.2. 分页查询

默认后台处理分页参数为： `_page` 第几页， `_limit` 一页多少条。

### 3.3. 排序

`_sort` 设定排序的字段, `_order` 设定排序的方式(默认升序\[`ASC`|`DESC`\]);

### 3.4. 切片

使用 `_start` 和 `_end` 或者 `_limit` (response 中会包含 `X-Total-Count`);

### 3.5. 检索

使用 `q`，进行全文检索(Full-text search);

### 3.6. 关联

关系图谱(Relationships), 获取包含下级资源的数据, 使用 `_embed`;获取包含上级资源的数据, 使用 `_expand`;

## 三. 参考

1. [json-server](https://github.com/typicode/json-server)
2. [mockjs](https://github.com/nuysoft/Mock/wiki)
