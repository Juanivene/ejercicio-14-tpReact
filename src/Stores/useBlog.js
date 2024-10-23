import { create } from "zustand";

export const useBlog = create((set) => {
  return {
    blogToEdit: null,
    
    setBlogToEdit: (newBlog) => {
      set({
        blogToEdit: newBlog,
      });
    },

    clearBlogToEdit: () => {
      set({
        blogToEdit: null,
      });
    },
  };
});
