const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')  //导入在内存中自动生成 index 页面的插件

//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname,'./src/index.html'),   //源文件
	filename: 'index.html'  //生成内存中首页的名称
})
//向外暴露一个打包的配置对象；
//webpack 4.x 提供了约定大于配置的概念；默认约定了：npx webpack打包的入口是`src` -> `index.js 打包出口`dist` -> `main.js`
module.exports = {
    mode: 'development',
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase:'./dist',
        hot:true
    },
	plugins: [
		htmlPlugin
    ]

}