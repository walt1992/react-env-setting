const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
module.exports = {
    entry: './src/index.tsx', // 프로젝트의 시작점을 의미한다. 여기서부터 차근차큰 빌드가 시작된다.
    target: 'web',
    mode: 'development',
    output: { // 빌드된 파일이 위치할 경로 및 파일 명을 지정한다.
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map', // sourcemap을 사용할 수 있도록 설
    resolve: { // 번들에 포함되야 하거나 혹은 제외 되어야 하는 파일의 확장자를 명시한다.
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            }
        ]
    },
    plugins: [ // 웹팩이 할 수 없는 작업들에 대해서 플러그인이 대신 수행해 줄 수 있다.
        new HtmlWebPackPlugin({ // 화면에 렌더링 될 템플릿 파일을 생성하는 것을 도와준다.
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new CheckerPlugin()
    ]
}