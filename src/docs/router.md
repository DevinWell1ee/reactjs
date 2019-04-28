v2/v3 的版本采用的方式是将路由看成是一个整体的单元，与别的组件是分离的，一般会单独放到一个 router 文件中，对其进行集中式管理；并且，布局和页面的嵌套由路由的嵌套所决定。

v4 的版本则将路由进行了拆分，将其放到了各自的模块中，不再有单独的 router 模块，充分体现了组件化的思想

https://www.jianshu.com/p/bf6b45ce5bcc

v4:
  包含关系

  exact关键字
  独立路由switch
    渲染第一个被location匹配到的并且作为子元素的<Route>或者<Redirect>
    不使用location,每一个被location匹配到的<Route>将都会被渲染

  嵌套
  match


https://router.happyfe.com/web/guides/quick-start
https://www.jianshu.com/p/ed5e56994f13
https://www.zcfy.cc/article/react-router-v4-the-complete-guide-mdash-sitepoint-4448.html