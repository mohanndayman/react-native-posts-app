import apiClient from "./client";

export const postsApi = {
  getPosts: (page = 1, limit = 10) => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return apiClient.get(`/posts?_start=${start}&_limit=${limit}`);
  },

  getPostById: (id) => {
    return apiClient.get(`/posts/${id}`);
  },

  getPostComments: (postId) => {
    return apiClient.get(`/posts/${postId}/comments`);
  },
};
