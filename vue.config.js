module.exports={
    pages:{
        index:{
            // 入口
            entry:"src/main.js"
        }
    },
    // 关闭语法检查
    lintOnSave:false,
    devServer:{
        proxy:{
            "/api":{//匹配所有以"/api1"开头的请求路径
                target:"http://localhost:4000",//代理目标的基础路径
                changeOrigin:true,
                pathRewrite:{"^/api":""}
            }
        },
    }
}