只可以在顶层调用，不要在循环，嵌套中调用
只能在function components中使用

useState返回的值中第一个参数是以前的state,第二个参数是setState
每当 React更新之后，就会触发 useEffect（在第一次 render 和每次 update 后触发）。副作用

https://reactjs.org/docs/hooks-intro.html