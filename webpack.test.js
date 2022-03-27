const PlistFactoryPlugin = require('./index.js');
const path = require('path');
module.exports = {
    mode: 'development',
    // 打包入口文件
    // entry: './index.js',
    // 最终打包结果配置
    output: {
        // filename: 'index.js',
        // path: path.resolve(__dirname, ('./output/test'))
    },
    // 配置 loader，不同文件应用不同的 loader
    module: {
        rules: [
        ]
    },
    plugins: [
        new PlistFactoryPlugin({
            output: {
                filename: "test",
                path: './xyz'
            },
            template: './manifest_temp.plist',
            key: 'myKey',
            value: 'myValue'
        })
    ]
};
