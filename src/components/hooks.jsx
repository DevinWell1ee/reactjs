import React, { useState, useEffect } from 'react';

function Example () {
  const [count, setCount] = useState(0);
  console.log(count)
  console.log(setCount)

  useEffect(() => {
    console.log('click')
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Example
