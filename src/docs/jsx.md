JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
React.js 可以用 JSX 来描述你的组件长什么样的。

JSX 在编译的时候会变成相应的 JavaScript 对象描述。 babel编译
  const element = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world!'
  );
react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。


jsx 首字母大些？

https://react.docschina.org/docs/introducing-jsx.html