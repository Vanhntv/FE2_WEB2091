import { Button, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";

type Category = {
  title: string;
};

const Bai3L4 = () => {
  const mutation = useMutation({
    mutationFn: async (values: Category) => {
      const res = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      return res.json();
    },
  });

  const onFinish = (values: Category) => {
    mutation.mutate(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 500, margin: "40px auto" }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Nhập title" }]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Submit
      </Button>
    </Form>
  );
};

export default Bai3L4;
