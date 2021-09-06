var Mock = require('mockjs');

module.exports = () => {
    return Mock.mock({
        'key': {
            'id|1-5': 0,
            'name': '@cname()'
        },
        'sample|1-5': [
            {
                'id|+1': 0,
                'title': '@ctitle(3, 10)',
                'url': '@url("http", "dvsnier.com")',
                'time': '@datetime("yyyy-MM-dd HH:mm:ss")'
            }
        ],
        'article|0-5': [
            {
                'id|+1': 0,
                'title': '@ctitle(3, 10)',
                'url': '@url("http", "dvsnier.com")',
            }
        ]
    });
};
