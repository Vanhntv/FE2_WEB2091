// src/hooks/useUpdateStory.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useUpdateStory = () => {
  const queryClient = useQueryClient();

  return useMutation({
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
};
