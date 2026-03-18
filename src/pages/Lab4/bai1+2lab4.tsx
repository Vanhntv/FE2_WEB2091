import { Button, Checkbox, Form, Input } from "antd";

type Category = {
  title: string;
  description?: string;
  active: boolean;
};

const Bai1L4 = () => {
  const onFinish = async (values: Category) => {
    try {
      const res = await fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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

      <Form.Item label="Description" name="description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Bai1L4;
