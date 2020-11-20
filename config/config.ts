/*配置项目和插件*/

export default {
  title: '商学院',
  base: '/docs/',  //指定 react-router 的 base，部署到非根目录时需要配置。
  publicPath: '/static/',   //指定 webpack 的 publicPath，指向静态资源文件所在的路径
  hash: true,   //生成hash文件名
  history: {
    type: 'hash',
  },
  //routers:   //配置路由，如果配置了 routes，则约定式路由会不生效。
  // disableRedirectHoist  //出于一些原因的考虑，在处理路由时把所有redirect声明提到路由最前面进行匹配会导致一些问题，添加这个配置项，禁用redirect上提。
  // history   //如需切换 history 方式为 hash（默认是 browser history），配置 history: 'hash'。
  // runtimePublicPath    //true 时使用 HTML 里指定的 window.publicPath
  // hash //是否开启 hash 文件后缀

}
