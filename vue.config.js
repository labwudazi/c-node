// 导出的对象就是配置对象
module.exports = {
    // publicPath 公共路径，主要作用是资源的路径，就是 index.html 使用什么地址就去找css js img 等
    // 默认值是 '/'就是服务器根地址假如你的服务器地址是`` 那么publicPath 默认就是 ·· 当你的index.html 导入资源
    publicPath: process.env.NODE_ENV === 'production'
    ? '/c-node/'
    : '/'
}