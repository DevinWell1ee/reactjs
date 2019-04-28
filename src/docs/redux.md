1.单一数据源
  整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中
2.state是只读的
  唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象
3.使用纯函数来执行修改
  为了描述 action 如何改变 state tree ，你需要编写 reducers


总结：
  store 接收到动作，它会将当前状态和给定动作发送给 reducer 并要求其返回一个新的状态。然后，在数据不可变的方式下， reducer 需要返回新的状态。再然后， store 更新自身的内部状态。最后，与 store 连接的 React 组件会重新渲染。

action:
  有type属性的对象而已

store:
  Redux 提供辅助函数 createStore 来创建 store
  建好的 store 具有四个方法: getState、dispatch、subscribe 和 replaceReducer

reducer:
  精华---纯函数

链接redux: react-redux

react-redux:
  <Provider> 组件 - 它是一个组件，它接收 store 并使得所有的子组件都可以通过 React 的 context API 来访问 store
  connect 函数 - 它是一个函数，它负责订阅 store 的更新和重新渲染组件。它是通过 高阶组件 实现的

  connect(
    [mapStateToProps],
    [mapDispatchToProps],
    [mergeProps],
    [options]
  )

Immutable
  Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

  Map：键值对集合，对应于 Object，ES6 也有专门的 Map 对象
  List：有序可重复的列表，对应于 Array
  Set：无序且不可重复的列表


redux-saga
  Generator

  启动saga唯一入口

  监听副作用的action -> 校验  -> dispatch

  redux-saga提供 takeEvery（每次）和 takeLatest (最后一次)来触发副作用

  put -> 与dispatch作用相同

redux-thunk
  reducer 里面dispatch another action (将返回结果作为参数)

reslector
  优化，缓存


https://redux-saga-in-chinese.js.org/docs/introduction/BeginnerTutorial.html
https://www.redux.org.cn/docs/basics/ExampleTodoList.html
https://sangka.github.io/react-in-patterns-cn/chapter-9/
