
const path = require("path");

let commonSetting = {
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: "ts-loader",
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']//程序会先加载css-loader，然后在加载style-loader文件
            },
            {
                // 增加对 SCSS 文件的支持
                test: /\.scss$/,
                // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    devtool: "inline-source-map",
    // 用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"],
    },
}

module.exports = [
    {
        entry: {
            common: './src/common.ts',
        },
        output: {
            path: path.resolve(__dirname, '../wwwroot/js'),
            filename: "[name].js",
            library: {
                // umd打包出来的js,可以在html引入后直接使用里面的函数
                type: 'umd'
            },
        },
        ...commonSetting
    },
    {
        entry: {
            // BlazorApp1是项目的名称，必须是这个名字
            "BlazorApp1.lib.module": "./src/BlazorApp1.lib.module.ts"
        },
        experiments: {
            outputModule: true
        },
        output: {
            path: path.resolve(__dirname, '../wwwroot/js'),
            filename: "[name].js",
            library: {
                // module打包出来,需要import导入后使用
                type: 'module'
            },
        },
        ...commonSetting
    }
];

