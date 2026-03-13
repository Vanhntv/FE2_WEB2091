import { Button, Form, Input, InputNumber } from "antd";
import { useState, useEffect } from "react";

type Product = {
  name: string;
  price: number;
  quantity: number;
  description: string;
};

const Bai3 = () => {
  const [value, setValue] = useState<Product | null>(null);

  const onFinish = (values: Product) => {
    setValue(values);
  };

  useEffect(() => {
    if (value) {
      console.log(JSON.stringify(value));
    }
  }, [value]);

  return (
    <div style={{ maxWidth: 500, margin: "40px auto" }}>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "nhập giá" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[{ required: true, message: "nhập số lượng" }]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item label="Mô tả" name="description">
          <Input.TextArea rows={4} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Bai3;
