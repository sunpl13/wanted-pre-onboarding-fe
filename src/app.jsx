import RequireAuth from "components/RequireAuth";
import TodoListContainer from "components/TodoListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Login />
            </RequireAuth>
          }
        />
        <Route
          path="/register"
          element={
            <RequireAuth>
              <Register />
            </RequireAuth>
          }
        />
        <Route
          path="/todo"
          element={
            <RequireAuth>
              <TodoListContainer />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
