import { NavLink, Route, Routes } from "react-router-dom"
import Todo from "./pages/Todo"
import Counter from "./pages/Counter"
import Auth from "./pages/Auth"

function App() {
  
  return (
    <div className="max-w-3xl mx-auto">
     <nav className="flex p-2 text-xl items-center bg-sky-600 text-white">
        <h1 className="text-2xl w-fit">Redux toolkit</h1>
        <menu className="grow flex justify-center gap-10">
          <NavLink to="/">Todo</NavLink>
          <NavLink to="/counter">Counter</NavLink>
          <NavLink to="/auth">login/register</NavLink>
        </menu>
      </nav>
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </div>
  )
}

export default App
