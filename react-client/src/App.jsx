import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            //   <Home />
            // </ProtectedRoute>
            <Home />
          }
        />
        <Route path="/login/" element={<Login></Login>} />
        <Route path="/register/" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
