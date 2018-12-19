let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
    const data = { 
        news: [],//
        slider:[],
        contentTreeList:[],
        locale:[],
        sitemanage:[]
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


    //TODO API slider
    data.contentTreeList =  Mock.mock({
            'treeNode|0-20':{
                "title|+1:":'',
                'subNum':Random.integer(0,100000),
                'key':Random.natural(10000)
            }
    });
    
    
    //TODO API locale
    data.locale = Mock.mock({
        'locale':'en-US'
    });



    //TODO API siteManage (站点管理)
    
    for(let i=0;i<30;i++){
        data.sitemanage.push({
            'no':`${i}`,
            'site':Random.cword(2,6),
            'domain':Random.cword(4,10),
            'language':Random.cword(4,10),
            'templates':Random.cword(2,6),
            'title':Random.cword(4,10),
            'keywords':'keyword',
            'describe':100,
            'status':1
        })
    }
    
  return data
}
