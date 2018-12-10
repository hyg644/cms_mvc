let Mock = require('mockjs');

var Random = Mock.Random;

module.exports = function () {
    var data = {};
    data.user = {
        'name': Random.cname(),
        'intro': Random.word(20)
    };
    // data.login = {
    //     'name': 'admin',
    //     'password': '123456'
    // };
    data.contentBody = {
        'name': Random.cname(),
        'intro': Random.word(20)
    };
    return data;
};