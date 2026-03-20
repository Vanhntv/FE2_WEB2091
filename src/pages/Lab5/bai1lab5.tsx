import { Table } from "antd";

type Story = {
  id: string;
  title: string;
  createdAt: string;
};

const Bai1Lab5 = () => {
  const data: Story[] = [
    { id: "1", title: "Truyện 1", createdAt: "2026-03-20T10:00:00" },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => {
        const d = new Date(date);
        return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
      },
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default Bai1Lab5;
