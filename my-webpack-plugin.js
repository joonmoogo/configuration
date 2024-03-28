class MyWebpackPlugin{
    apply(compiler){
        compiler.hooks.run.tap('My plugin', stats =>{
            console.log('My plguin : done')
        })
    }
}

module.exports = MyWebpackPlugin