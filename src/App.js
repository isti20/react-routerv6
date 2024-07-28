import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link> | <Link to={"/login"}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={
            <ProtectedRoute>
              <Detail />
            </ProtectedRoute>
          }
        >
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;