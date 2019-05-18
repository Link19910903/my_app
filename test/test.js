import React from "react";
import echartsi from 'echarts'
import api from '../../services/axios'

let testArr = []
export default class Msg extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: null
        }
        this.echarts = React.createRef()
    }
    getData(){
        api.mockdata('/news/api')
            .then(res => {
                this.setState({
                    data: res
                })
                testArr.push(res)
            })
    }
    //----------------lodash array方法--------------------
    //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
    chunk(){
        setTimeout(() => {
            let arr2 = _.chunk(testArr[0].articales,10)
            console.log(testArr[0].articales)
            console.log('arr2',arr2)
        },1000)
    }
    //返回过滤掉假值的新数组, 例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
    compact(){
        let arr=[1,2,3,4,false,0,2,undefined,NaN,2,2,2,"",2]
        console.log('compact: ',_.compact(arr))
    }
    //创建一个新数组，将array与任何数组 或 值连接在一起。
    concat(){
        let arr1 = [1,2,3,4,'hehe',5,6]
        let arr2 = ['lala','haha',5]
        let arr3 = _.concat(arr1,arr2)
        console.log('arr3',arr3)
    }
    //创建一个具有唯一array值的数组,，每个值不包含在其他给定的数组中。
    difference(){
        let arr1 = [1,1,2,3,44,4,5,5,6,7,8,9,10,10]
        let arr2 = [2,5,10]
        let arr3 = _.difference(arr1,arr2)
        console.log('difference:',arr3)
    }

    //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
    drop(){
        let arr1 = [1,1,2,3,44,4,5,5,6,7,8,9,10,10]
        console.log('drop',_.drop(arr1,10))
    }
    //返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
    findIndex(){
        let users = [
            { 'user': 'barney',  'active': false },
            { 'user': 'fred',    'active': false },
            { 'user': 'pebbles', 'active': true }
          ];
        let findindex = _.findIndex(users, o => o.user == 'fred')
        console.log('findIndex',findindex)
    }
    //移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。 
    remove(){
        let array = [1,2,3,4]
        let evens = _.remove(array,(n)=>{
            return n % 2 == 0
        })
        console.log('array',array)
        console.log('evens',evens)
    }



    promiseTest(resolve, reject){
        let timeOut = Math.random() * 2
        console.log('set time to:' + timeOut + 'seaconds')
        setTimeout(()=>{
            if(timeOut < 1){
                console.log('call resolve()')
                resolve(100)
            }
            else{
                console.log('call reject()...')
                reject('timeout in ' + timeOut + ' seconds.')
            }
        }, timeOut * 1000)
    }
    // getData(){
    //     fetch('/news/api')
    //         .then((res) => {
    //             console.log(res)
    //         }).then((body) => {
    //             document.body.innerHTML = body
    //         })
    // }
    componentWillMount(){
        this.getData()
    }
    componentDidMount(){
        this.chunk()
        this.compact()
        this.concat()
        this.difference()
        this.drop()
        this.findIndex()
        // let p1 = new Promise(this.promiseTest)
        // let p2 = p1.then((result) => {
        //     console.log('success: ' + result)
        // })
        // let p3 = p1.catch((reason) => {
        //     console.log('fail: ' + reason)
        // })

        new Promise(this.promiseTest).then((result) => {
            console.log('成功：' + (result + 1))
        }).catch((reason) => {
            console.log('失败：' + reason)
        })
    }
    componentWillReceiveProps(){
        const myChart = echarts.init(this.echarts.current);
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
    render(){
        
        return (
            <div>
                <div ref={this.echarts}  style={{ height: 260 }}>
                
                </div>
            </div>
        )
    }
}