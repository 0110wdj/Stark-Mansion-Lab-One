import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div onClick={() => {
      setCount(r => {
        console.log(`${r} => ${r + 1}`);
        return r + 1
      })
    }}>
      hello
      <span className='red'>world</span>
      <span>count:{count}</span>
    </div>
  );
}

export default App;
