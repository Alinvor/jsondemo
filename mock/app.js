var Mock = require('mockjs');

module.exports = () => {
    var data = Mock.mock({
        'api': [
            {
                'id|1-5': 1,
            }
        ]
    });
    return data;
};
