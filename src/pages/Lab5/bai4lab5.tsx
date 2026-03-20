import { Button, Form, Input, Table } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Story = {
  id: string;
  title: string;
};

const Bai4lab5 = () => {
  const queryClient = useQueryClient();

  const { data = [] } = useQuery<Story[]>({
    queryKey: ["stories"],
    queryFn: () =>
      fetch("http://localhost:3000/stories").then((res) => res.json()),
  });

  const mutation = useMutation({
    mutationFn: (values: { title: string }) =>
      fetch("http://localhost:3000/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const onFinish = (values: { title: string }) => {
    mutation.mutate(values);
  };

  return (
    <>
      <Form onFinish={onFinish} layout="inline">
        <Form.Item name="title" rules={[{ required: true }]}>
          <Input placeholder="Nhập truyện" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Thêm
        </Button>
      </Form>

      <Table
        dataSource={data}
        columns={[{ title: "Title", dataIndex: "title" }]}
        rowKey="id"
        style={{ marginTop: 20 }}
      />
    </>
  );
};

export default Bai4lab5;
