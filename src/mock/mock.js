let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
    const data = { 
        news: [],//
        slider:[],
        contentTreeList:[]
    };
  

    //TODO param images 200x100
    let images200x100 = [1,2,3,4,5,6,7,8,9].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));

    //TODO API news 
    for (let i = 0; i < 100; i++) {
        let content = Random.cparagraph(0,100);
        data.news.push({
            id: i, 
            title: Random.cword(8,20),
            desc: content.substr(0,40),
            tag: Random.cword(2,6),
            views: Random.integer(100,5000),
            images: images200x100.slice(0,Random.integer(1,3))
        })
    }

    //TODO API slider 
    for (let i = 0; i < 30; i++) {
        data.slider.push({
            'no':`${i}`,
            'name':Random.cname(2,3),
            'href':Random.url('http'),
            'sort':`100${i}`,
            'status':1,
            'img':Random.image('200x100', Random.word(2,6)),
        })
    }



  return data
}
