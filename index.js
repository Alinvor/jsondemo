var Mock = require('mockjs')
var Random = Mock.Random

module.exports = () => {

    return Mock.mock({
        'api': [
            {
                'id': 1,
                'title': Random.cname()
            }
        ],
        'article|1-3': [
            {
                'id|+1': 1,
                'article_name': '@ctitle(3, 10)',
                'article_author': '@cname()',
                'article_time': '@datetime("yyyy-MM-dd HH:mm:ss")',
                'article_click': '@natural(10000, 999999)',
                'article_reply': '@natural(100, 999999)',
                'article_capture_count': '@natural(1, 99)',
                'article_capture_last_time': '@datetime("yyyy-MM-dd HH:mm:ss")',
                'article_link': '@url("http", "dvsnier.com")',
                'article_online': '@natural(1, 9)',
                'article_version_name': ''.concat('v', "@natural(1, 9)", '.', "@natural(1, 9)", '.', "@natural(1, 9)"),
                'article_version_code': '@natural(1, 99)',
                'system_time': '@datetime("yyyy-MM-dd HH:mm:ss")',
                'system_timestamp': '@float(100000, 999999, 5, 5)',
                'item|0-5': [
                    {
                        'author_name': '@cname()',
                        'author_id': '@string(number, 9, 99)',
                        'author_time': '@datetime("yyyy-MM-dd HH:mm:ss")',
                        'author_content_set|0-9': [
                            {
                                'index|+1': 0,
                                'type': '@natural(1, 9)',
                                'resource_url_original': '@string(upper, 9, 99)',
                                'resource_url_thumbnail': '@string(upper, 9, 99)',
                                'resource_base64': '@string(upper, 9, 99)',
                                'resource_content': '@cparagraph()'
                            }
                        ],
                        'index|+1': 1,
                        'item|0-3': [
                            {
                                'comment_key_with_union_id': ''.concat('@string(lower, 9, 9)', '-', '@string(number, 8, 8)'),
                                'comment_key_with_union_rid': '@string(number, 8, 8)',
                                'comment_name': '@cname()',
                                'comment_id': '@string(number, 9, 9)',
                                'comment_time': '2021-08-22 16:32:00',
                                'reply_name': '@cname()',
                                'comment_content': '@cparagraph(3, 6)',
                                'type': '@natural(1, 9)',
                                'index|+1': 0
                            }
                        ],
                        'reply_key': '@string(number, 9, 9)',
                        'sequence': ''.concat('@string(number, 1, 4)', ' 楼'),
                        'type': '@natural(1, 9)',
                    }
                ]
            }
        ],
        'comment|1': {
            'id|+1': 1,
        },
        'item|1-3': [
            {
                'author_name': '@cname()',
                'author_id': '@string(number, 9, 99)',
                'author_time': '@datetime("yyyy-MM-dd HH:mm:ss")',
                'author_content_set|0-9': [
                    {
                        'index|+1': 0,
                        'type': '@natural(1, 9)',
                        'resource_content': '@cparagraph()'
                    }
                ],
                'index|+1': 1,
                'item|0-3': [
                    {
                        'comment_key_with_union_id': ''.concat('@string(lower, 9, 9)', '-', '@string(number, 8, 8)'),
                        'comment_key_with_union_rid': '@string(number, 8, 8)',
                        'comment_name': '@cname()',
                        'comment_id': '@string(number, 9, 9)',
                        'comment_time': '2021-08-22 16:32:00',
                        'reply_name': '@cname()',
                        'comment_content': '@cparagraph(3, 6)',
                        'type': '@natural(1, 9)',
                        'index|+1': 0
                    }
                ],
                'reply_key': '@string(number, 9, 9)',
                'sequence': ''.concat('@string(number, 1, 4)', ' 楼'),
                'type': '@natural(1, 9)',
            }
        ],
        'meta_data': {
            'id|+1': 1,
            '_host': '@natural(100000, 999999)',
            'js_activityurl': '@url("http", "dvsnier.com")',
            'js_activityuserid': '@natural(100000, 999999)',
            'js_activityusername': '@cname()',
            'js_activityusername_gbk': '@cname()',
            'js_appid': '@string(lower, 3, 3)',
            'js_blockid': '@string(upper, 3, 3)',
            'js_blockname': '@string(upper, 9, 99)',
            'js_blockname_gbk': '@string(upper, 9, 99)',
            'js_clickcount': '@string(number, 9, 99)',
            'js_grade': '@string(number, 9, 99)',
            'js_pageurl': '@url("http", "dvsnier.com")',
            'js_postid': '@natural(100000, 999999)',
            'js_posttime': '@natural(100000, 999999)',
            'js_powerreply': '@string(number, 0, 99)',
            'js_replycount': '@string(number, 9, 99)',
            'js_replytime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'js_title': '@ctitle(1, 99)',
            'js_title_gbk': '@ctitle(1, 99)',
            'support_ds_version': ''.concat("@natural(1, 9)", '.', "@natural(1, 9)", '.', "@natural(1, 9)")
        }
    })
}

