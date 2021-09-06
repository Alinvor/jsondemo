let Mock = require('mockjs');
var Random = Mock.Random

var dataset = Mock.mock({
    'api': {
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|1-10': [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }
        ]
    },
    'api_article|2-5': [
        {
            'id|+1': 1,
            // 'article_name': Random.ctitle(3, 10),
            'article_name': '@ctitle(3, 10)',
            'article_author': Random.cname(),
            'article_time': Random.datetime('yyyy-MM-dd HH:mm:ss'),
            'article_click': Random.natural(10000, 999999),
            'article_reply': Random.natural(100, 999999),
            'article_capture_count': Random.natural(1, 99),
            'article_capture_last_time': Random.datetime('yyyy-MM-dd HH:mm:ss'),
            'article_link': Random.url('http', 'dvsnier.com'),
            'article_online': Random.natural(1, 9),
            'article_version_name': ''.concat('v', Random.natural(1, 9), '.', Random.natural(1, 9), '.', Random.natural(1, 9)),
            'article_version_code': Random.natural(1, 99),
            'system_time': Random.datetime('yyyy-MM-dd HH:mm:ss'),
            'system_timestamp': Random.float(100000, 999999, 5, 5),
        }
    ]
})
// console.log(JSON.stringify(dataset, null, 4))
module.exports = () => { return dataset }
