import { Layout, Menu, Form, Input, Button, Table, Modal, Select } from "antd";
import { useState } from "react";

const { Header, Sider, Content } = Layout;

interface User {
  name: string;
  email: string;
  role: string;
}

function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [open, setOpen] = useState(false);

  const [form] = Form.useForm();

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  const addUser = (values: User) => {
    setUsers([...users, values]);
    setOpen(false);
    form.resetFields();
  };

  return (
    <Layout style={{ minHeight: "80vh" }}>
      {/* Sidebar */}
      <Sider>
        <Menu
          theme="dark"
          items={[
            { key: "1", label: "Dashboard" },
            { key: "2", label: "Users" },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ color: "white" }}>Admin Dashboard</Header>

        {/* Content */}
        <Content style={{ padding: 20 }}>
          <h2>Register</h2>

          {/* FORM REGISTER */}
          <Form layout="vertical" style={{ maxWidth: 400 }}>
            <Form.Item label="Name">
              <Input />
            </Form.Item>

            <Form.Item label="Email">
              <Input />
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password />
            </Form.Item>

            <Button type="primary">Submit</Button>
          </Form>

          {/* TABLE USER */}
          <h2 style={{ marginTop: 40 }}>User List</h2>

          <Button type="primary" onClick={() => setOpen(true)}>
            Add User
          </Button>

          <Table
            columns={columns}
            dataSource={users}
            rowKey="email"
            style={{ marginTop: 20 }}
          />

          {/* MODAL */}
          <Modal
            title="Add User"
            open={open}
            footer={null}
            onCancel={() => setOpen(false)}
          >
            <Form form={form} layout="vertical" onFinish={addUser}>
              <Form.Item name="name" label="Name">
                <Input />
              </Form.Item>

              <Form.Item name="email" label="Email">
                <Input />
              </Form.Item>

              <Form.Item name="role" label="Role">
                <Select
                  options={[
                    { value: "Admin", label: "Admin" },
                    { value: "User", label: "User" },
                  ]}
                />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form>
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
