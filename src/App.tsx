import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Space, Table } from "antd";
import type { TableProps } from "antd";
interface DataType {
  key: string;
  id: number;
  name: string;
  age: number;
  major: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Major",
    dataIndex: "major",
    key: "major",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: 1,
    name: "Nguyen Van A",
    age: 20,
    major: "IT",
  },
  {
    key: "2",
    id: 2,
    name: "Tran Thi B",
    age: 21,
    major: "AI",
  },
  {
    key: "3",
    id: 3,
    name: "Le Van C",
    age: 19,
    major: "Software",
  },
];

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#">Đăng nhập</Link>
            <Link to="#">Đăng ký</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Table columns={columns} dataSource={data} />
      </div>
    </>
  );
}

export default App;
