import { Input, Table } from "antd";
import { useEffect, useState } from "react";

type Story = {
  id: string;
  title: string;
};

const Bai5lab5 = () => {
  const [data, setData] = useState<Story[]>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/stories")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase()),
  );

  return (
    <>
      <Input
        placeholder="Tìm kiếm truyện..."
        onChange={(e) => setKeyword(e.target.value)}
        style={{ marginBottom: 20 }}
      />

      <Table
        dataSource={filtered}
        columns={[{ title: "Title", dataIndex: "title" }]}
        rowKey="id"
      />
    </>
  );
};

export default Bai5lab5;
