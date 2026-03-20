import { Button, Table } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Story = {
  id: string;
  title: string;
};

const Bai2lab5 = () => {
  const queryClient = useQueryClient();

  const { data = [] } = useQuery<Story[]>({
    queryKey: ["stories"],
    queryFn: () =>
      fetch("http://localhost:3000/stories").then((res) => res.json()),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) =>
      fetch(`http://localhost:3000/stories/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
    },
  });

  const columns = [
    { title: "Title", dataIndex: "title" },
    {
      title: "Action",
      render: (_: any, record: Story) => (
        <Button danger onClick={() => deleteMutation.mutate(record.id)}>
          Xóa
        </Button>
      ),
    },
  ];

  return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default Bai2lab5;
