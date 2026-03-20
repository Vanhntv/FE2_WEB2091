import { Table } from "antd";

type Story = {
  id: string;
  title: string;
};

const Bai3lab5 = () => {
  const data: Story[] = Array.from({ length: 20 }, (_, i) => ({
    id: `${i}`,
    title: `Truyện ${i}`,
  }));

  const columns = [{ title: "Title", dataIndex: "title" }];

  return (
    <Table
      dataSource={data}
      columns={columns}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default Bai3lab5;
