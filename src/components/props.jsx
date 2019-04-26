import React from 'react'

const Title = function () {
  return <h1>Hello there!</h1>;
}

const Header = function ({ title }) {
  return (
    <header>
      { title }
    </header>
  );
}

// export default function Props () { // props传入组件
//   return (
//     <Header title={ <Title /> }>
//     </Header>
//   );
// };

// 将函数作为 children 传入和 render prop

function TodoList ({ todos, children }) {
  return (
    <section>
      <ul>{
        todos.map((todo, i) => (
          <li key={ i }>{ children(todo) }</li>
        ))
      }</ul>
    </section>
  );
}

// 当父组件所知道的内容不需要传给子组件时，do not know status and label
export default function Props () {
  const todos = [
    { label: 'Write tests', status: 'done' },
    { label: 'Sent report', status: 'progress' },
    { label: 'Answer emails', status: 'done' }
  ];

  const isCompleted = todo => todo.status === 'done';

  return (
    <TodoList todos={ todos }>
      {
        todo => isCompleted(todo) ?
          <b>{ todo.label }</b> :
          todo.label
      }
    </TodoList>
  );
}

// http://sangka-z.com/react-in-patterns-cn/chapter-4/#%E5%B0%86%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA-children-%E4%BC%A0%E5%85%A5%E5%92%8C-render-prop

// http://www.css88.com/archives/9471
