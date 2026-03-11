import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ListPage from "./pages/list";
import Lab2Bai2 from "./pages/lab2bai2";

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
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {" "}
            <Link to="#">Đăng nhập</Link>
            <Link to="#">Đăng ký</Link>{" "}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/lab2bai2" element={<Lab2Bai2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
