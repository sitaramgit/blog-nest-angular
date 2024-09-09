import "./App.css";
import Login from "./pages/un-auth/Login";
import Dashboard from "./pages/auth/Dashboard";
import { Route, Routes } from "react-router-dom";
import ProtectedRouts from "./layout/ProtectedRouts";
import Post from "./pages/auth/posts/Post";

const App = () => {
  return (
    <ProtectedRouts>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route element={<Dashboard />} path={"/dashboard"} />
        <Route path="post">
          <Route path=":postId" element={<Post />} />
        </Route>
      </Routes>
    </ProtectedRouts>
  );
};

export default App;
