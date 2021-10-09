module.exports={
    pages:{
        index:{
            entry:"src/main.js"
        }
    },
    // 关闭语法检查
    lintOnSave:false,
    devServer:{
        proxy:{
            "/api":{
                target:"http://localhost:4000",
                changeOrigin:true,
                pathRewrite:{"^/api":""}
            }
        },
    }
}