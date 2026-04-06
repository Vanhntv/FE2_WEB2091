// src/pages/StoryList.tsx
import { useState } from "react";
import { useCRUDStory } from "../hooks/useCRUDStory";

export default function StoryList() {
  const { list, add, remove, update } = useCRUDStory();
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    add.mutate({
      title,
      author: "Vanh",
      description: "Sản phẩm mới",
    });

    setTitle("");
  };

  const handleEdit = (story: any) => {
    update.mutate({
      ...story,
      title: story.title + " sửa",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-3 mb-8">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="nhập tên truyện..."
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
          Thêm
        </button>
      </div>

      <div className="grid gap-4">
        {list.map((story: any) => (
          <div key={story.id}>
            <h3 className="text-xl font-semibold text-gray-800">
              {story.title}
            </h3>

            <p className="text-gray-500 mb-4">Author: {story.author}</p>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(story)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Sửa
              </button>

              <button
                onClick={() => remove.mutate(story.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg "
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
