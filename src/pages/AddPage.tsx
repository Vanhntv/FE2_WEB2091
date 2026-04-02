import { Button, Form, Input, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.post("http://localhost:3000/products", values);
    },
    onSuccess: () => {
      message.success("thanh cong");

      form.resetFields();

      navigate("/list");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Add</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        disabled={mutation.isPending}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "khong duoc de trong",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[
            {
              required: true,
              message: "khong duoc de trong",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Image" name="image">
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Add
        </Button>
      </Form>
    </div>
  );
}

export default AddPage;
