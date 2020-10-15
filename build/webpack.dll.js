const path = require("path");
const webpack = require("webpack");
//打包时间变化 13021ms =>  6110ms

module.exports = {
    entry: {
        vendor: ['vue/dist/vue.esm.js',"vue-router","axios","loadsh"]
    },
    output: {
        path:path.join(__dirname,"../static/js"),
        filename:"[name].dll.js",
        library:"[name]_library"
    },
    plugins:[
        new webpack.DllPlugin({
            path:path.join(__dirname,".","[name]-manifest.json"),
            name:"[name]_library"
        })
    ]
}