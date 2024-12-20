const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // process all .js files or .m files
                exclude: /node_modules/, // exclude node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env'], // process react codes like jsx etc, convert all latest ES to es5
                        plugins: ['@babel/plugin-transform-runtime'], // allow features like async/await etc
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ // to inject some javascript into index.html
            template: './public/index.html'
        }),
    ]
}