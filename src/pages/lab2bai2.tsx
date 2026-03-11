import { Table, Tag, Space, Button } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
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
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <Tag color={status === "active" ? "green" : "red"}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space>
        <Button type="primary">Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: 1,
    name: "Ngo Thi Van Anh",
    email: "vanh@gmail.com",
    status: "active",
  },
  {
    key: "2",
    id: 2,
    name: "Tran Thi Thuong",
    email: "trthuong@gmail.com",
    status: "inactive",
  },
  {
    key: "3",
    id: 3,
    name: "ABC",
    email: "vanc@gmail.com",
    status: "active",
  },
];

function Lab2Bai2() {
  return <Table columns={columns} dataSource={data} />;
}

export default Lab2Bai2;
