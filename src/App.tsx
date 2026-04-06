import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ListPage from "./pages/list";
import Lab2Bai2 from "./pages/lab2bai2";
import Bai1 from "./pages/Lab3/bai1";
import Bai2 from "./pages/Lab3/bai2";
import Bai3 from "./pages/Lab3/bai3";
import Bai4 from "./pages/Lab3/bai4";
import Bai1L4 from "./pages/Lab4/bai1+2lab4";

import Bai3L4 from "./pages/Lab4/bai3+4lab4";
import Bai1Lab5 from "./pages/Lab5/bai1lab5";
import Bai2lab5 from "./pages/Lab5/bai2lab5";
import Bai3lab5 from "./pages/Lab5/bai3lab5";
import Bai4lab5 from "./pages/Lab5/bai4lab5";
import Bai5lab5 from "./pages/Lab5/bai5lab5";
import EditPage from "./pages/EditPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddPage from "./pages/AddPage";
import StoryList from "./pages/StoryList";

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/lab2bai2">Lab2 Bài 2</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/story-list">Story</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {" "}
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>{" "}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<ListPage />} />

          <Route path="/lab2bai2" element={<Lab2Bai2 />} />
          <Route path="/bai1" element={<Bai1 />} />
          <Route path="/bai2" element={<Bai2 />} />
          <Route path="/bai3" element={<Bai3 />} />
          <Route path="/bai4" element={<Bai4 />} />
          <Route path="/bai1lab4" element={<Bai1L4 />} />
          <Route path="/bai3lab4" element={<Bai3L4 />} />
          <Route path="/bai1lab5" element={<Bai1Lab5 />} />
          <Route path="/bai2lab5" element={<Bai2lab5 />} />
          <Route path="/bai3lab5" element={<Bai3lab5 />} />
          <Route path="/bai4lab5" element={<Bai4lab5 />} />
          <Route path="/bai5lab5" element={<Bai5lab5 />} />

          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/add" element={<AddPage />} />

          <Route path="/story-list" element={<StoryList />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
