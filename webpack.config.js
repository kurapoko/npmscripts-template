module.exports = {
    mode: "development",

    entry: `./src/js/index.js`,

    output: {
        path: `${__dirname}/dist/assets/js`,

        filename: "bundle.js"
    },

    module: {
        rules: [
            {
              // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            presets: [
                                // プリセットを指定することで、ES2019 を ES5 に変換
                                "@babel/preset-env"
                            ]
                        }
                    }
                ]
            }
        ]
    }
};