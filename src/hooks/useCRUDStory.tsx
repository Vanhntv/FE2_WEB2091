// src/hooks/useCRUDStory.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCRUDStory = () => {
  const queryClient = useQueryClient();

  // GET LIST
  const { data: list = [], isLoading } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/stories");
      return data;
    },
  });

  // ADD
  const add = useMutation({
    mutationFn: async (story: any) => {
      const { data } = await axios.post("http://localhost:3000/stories", story);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  // DELETE
  const remove = useMutation({
    mutationFn: async (id: number) => {
      await axios.delete(`http://localhost:3000/stories/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  // UPDATE
  const update = useMutation({
    mutationFn: async (story: any) => {
      const { data } = await axios.put(
        `http://localhost:3000/stories/${story.id}`,
        story,
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["stories"],
      });
    },
  });

  return {
    list,
    isLoading,
    add,
    remove,
    update,
  };
};
