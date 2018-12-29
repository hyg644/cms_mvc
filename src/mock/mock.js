let Mock  = require('mockjs');
let Random = Mock.Random;

module.exports = function() {
    const data = { 
        news: [],//
        slider:[],
        contentTreeList:[],
        locale:[],
        sitemanage:[],
        editContentList:[]
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


    //TODO API contentTreeList
    data.editContentTree =  Mock.mock([
        {
            "nodeName":Random.title(1,3),
            'nodeID':0,
            'total':Random.natural(0,10000),
            'subNode|0-3':[{
                "nodeName":Random.title(0, 3),
                'nodeID|+1':['0-0','0-1','0-2'],
                'total':Random.natural(0,1000),
            }]
        },{
            "nodeName":Random.title(1,3),
            'nodeID':1,
            'total':Random.natural(0,10000),
            'subNode':[{
                "nodeName":Random.title(1, 3),
                'nodeID':'1-0',
                'total':Random.natural(0,1000),
                'subNode|0-3':[{
                    "nodeName":Random.title(1, 3),
                    'nodeID|+1':['1-0-0','1-0-1','1-0-2'],
                    'total':Random.natural(0,100),
                }]
            }]
        },{
            "nodeName":Random.title(1,3),
            'nodeID':2,
            'total':Random.natural(0,10000),
            'subNode':[{
                "nodeName":Random.title(1, 3),
                'nodeID':'2-0',
                'total':Random.natural(0,1000),
                'subNode|0-3':[{
                    "nodeName":Random.title(1, 3),
                    'nodeID|+1':['2-0-0','2-0-1','2-0-2'],
                    'total':Random.natural(0,100),
                }]
            },{
                "nodeName":Random.title(1, 3),
                'nodeID':'2-1',
                'total':Random.natural(0,1000),
                'subNode|0-3':[{
                    "nodeName":Random.title(1, 3),
                    'nodeID|+1':['2-1-0','2-1-1','2-1-2'],
                    'total':Random.natural(0,100),
                }]
            }]
        }
    ]);
    
    //TODO API contentList
    for(let i=0;i<30;i++){
        data.editContentList.push({
            'key':`${i}`,
            'id':`${i}`,
            'browse':Random.integer(0,100000),
            'releaseTime':Random.datetime("yyyy-MM-dd HH:mm:ss"),
            'recommend':Random.integer(0,1),
            'status':Random.integer(0,1),
            'title':Random.cword(4,12),
        })
    }

    
    //TODO API locale
    data.locale = Mock.mock({
        'locale':'en-US'
    });



    //TODO API siteManage (站点管理)
    for(let i=0;i<30;i++){
        data.sitemanage.push({
            'key':`${i}`,
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
    

    //TODO return
    return data
}
