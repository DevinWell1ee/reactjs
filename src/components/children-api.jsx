import React from 'react'

/**
 React 提供了便利的 children 属性。
 通过它父组件可以读取/访问它的嵌套子元素。
 此 API 可以使得 Header 组件不用知晓它的嵌套子元素，从而解放之前的依赖关系
 */
export default function ChildrenApi () {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}

function Header ({ children }) {
  return <header>{ children }</header>;
};

function Navigation () {
  return (
    <div>this is nav</div>
  );
}
