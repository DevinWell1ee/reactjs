高阶组件通常是函数，它接收原始组件并返回原始组件的增强/填充版本


确切的说高阶组件是一种 React 组件模式，它是一个 JavaScript 函数，将组件作为参数并返回一个新组件


HOC可以做什么？

1.代码重用，逻辑和引导抽象
2.渲染劫持（Render Highjacking）
3.state(状态)抽象和操作
4.props(道具)操作

实现：2种方式

1.Props Proxy(属性代理)： HOC 对传给 WrappedComponent W 的 porps 进行操作，
2.Inheritance Inversion(反向继承)： HOC 扩展了 WrappedComponent W。

Props Proxy可以做什么

1.操作props(读取、添加、编辑、删除)
2.通过refs访问到组件实例
3.提取state
4.用去其他元素包裹W

Inheritance Inversion(反向继承)

1.渲染劫持(Render Highjacking)
2.操作 state(状态)


http://www.css88.com/archives/9462