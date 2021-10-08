module.exports={
    pages:{
        index:{
            // 入口
            entry:"src/main.js"
        }
    },
    // 关闭语法检查
    lintOnSave:false,
    // 方法二配置代理服务器
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:4000",
                changeOrigin:true,
                pathRewrite:{"^/api1:":""}
            }
        }
    }
}