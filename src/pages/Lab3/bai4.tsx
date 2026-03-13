import { Button, Form, Input, Select } from "antd";
import { useState } from "react";

type Post = {
  title: string;
  slug: string;
  category: string;
  content: string;
  image: string;
};

const Bai4 = () => {
  const [data, setData] = useState<Post | null>(null);

  const onFinish = (values: Post) => {
    setData(values);
  };
  const [form] = Form.useForm();
  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        break;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        break;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
        break;
      default:
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "nhap title" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "nhap slug" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select
            allowClear
            placeholder="Select a option and change input text above"
            onChange={onGenderChange}
            options={[
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Content"
          name="content"
          rules={[{ required: true, message: "nhap content" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Image URL"
          name="image"
          rules={[{ required: true, message: "nhap link anh" }]}
        >
          <Input />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      {data && (
        <div style={{ marginTop: 30 }}>
          <h3>Kết quả</h3>

          <p>
            <a>Title:</a> {data.title}
          </p>
          <p>
            <a>Slug:</a> {data.slug}
          </p>
          <p>
            <a>Category:</a> {data.category}
          </p>
          <p>
            <a>Content:</a> {data.content}
          </p>
          <img src={data.image} alt="" width={200} />
        </div>
      )}
    </div>
  );
};

export default Bai4;
