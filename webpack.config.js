/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-07 11:48:54
 */
let path = require('path'); //内置模块
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin =require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',  //模式 开发和生产  production
    // devServer:{
    //     port:3333,
    //     progress:true,
    //     contentBase:'./dist'
    // },
    entry :'./src/index.js', //入口
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        filename:'bundle.js',//出口
        path:path.join(__dirname,'./dist'), //路径必须是一个绝对路径
        // publicPath:'http://baid.com'
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'index.html'
    }),
    new MiniCssExtractPlugin({
        filename:'main.css'
    })
   ],
    module:{ //模块
        rules:[//规则,css-loader 处理@import这种语法的，style-loader 把css插入到head标签中
            //laoder 特点是 单一
            {  
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
            },
            { //less
                test:/\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader', 'less-loader']
            },
            { //打包scss文件
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader']
            },
            {
                test:/\.js$/,
                use:{
                    loader:'eslint-loader'
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            '@babel/preset-env'
                        ],
                        plugins:[
                            '@babel/plugin-proposal-class-properties'
                        ]


    
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1*1024
                    }
                }

            }

        ]
    }
}