import { Button, Form, Input, message } from "antd";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const { data, isLoading: detailLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data, form]);

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.patch(`http://localhost:3000/products/${id}`, values);
    },
    onSuccess: () => {
      message.success("thanh cong");

      navigate("/list");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "20px auto" }}>
      <h2>Edit</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        disabled={mutation.isPending || detailLoading}
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
          update
        </Button>
      </Form>
    </div>
  );
}

export default EditPage;
