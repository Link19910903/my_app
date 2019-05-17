const Mock = require('mockjs')
const Random = Mock.Random
const produceNewsData = () => {
    let articales = []
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5,30),
            thumbnail_pic_s: Random.dataImage('300x250','mock的图片'),
            author_name: Random.cname()
        }
        articales.push(newArticleObject) 
    }
    return {
        articales: articales
    }
}

Mock.mock('/news/api','post', produceNewsData)
