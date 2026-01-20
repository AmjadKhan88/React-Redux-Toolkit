import { Route, Routes } from "react-router-dom"
import Todo from "./pages/Todo"
import Counter from "./pages/Counter"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  )
}

export default App
