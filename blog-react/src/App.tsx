import "./App.css";
import Login from "./pages/un-auth/Login";
import Dashboard from "./pages/auth/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRouts from "./layout/ProtectedRouts";

const App = () => {
  return (
    <ProtectedRouts>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Dashboard />} path={"/dashboard"} />
      </Routes>
    </ProtectedRouts>
  );
}

export default App;
