import { useState } from 'react'
import './App.css'

function Child() {
  console.log('Child: render')

  return <p>Я дочерний компонент</p>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Render и Commit</h1>

      <p>Счётчик: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Увеличить
      </button>

      <Child />
    </main>
  )
}

export default App