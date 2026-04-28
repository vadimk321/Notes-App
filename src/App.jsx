import { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="main-wrapper">
        <Sidebar/>
        <section id="center">
          <div>
            <h1>Get started</h1>
            <p>
              Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
            </p>
          </div>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
      </section>
      </div>
  )
}

export default App
