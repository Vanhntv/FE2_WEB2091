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
    render: (_: any, record: DataType) => (
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

function ListPage() {
  return <Table columns={columns} dataSource={data} />;
}

export default ListPage;
