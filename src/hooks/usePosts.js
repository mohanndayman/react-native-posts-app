import { useState, useEffect, useCallback } from "react";
import { postsApi } from "../api/posts";

const usePosts = (initialPage = 1, limit = 10) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);

  const fetchPosts = useCallback(
    async (pageNum, append = false) => {
      try {
        setLoading(true);
        setError(null);

        const newPosts = await postsApi.getPosts(pageNum, limit);

        if (append) {
          setPosts((prevPosts) => {
            const existingIds = new Set(prevPosts.map((post) => post.id));
            const uniqueNewPosts = newPosts.filter(
              (post) => !existingIds.has(post.id)
            );
            return [...prevPosts, ...uniqueNewPosts];
          });
        } else {
          setPosts(newPosts);
        }

        setHasMore(newPosts.length === limit && newPosts.length > 0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage, true);
    }
  }, [loading, hasMore, page, fetchPosts]);

  const refresh = useCallback(() => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
    fetchPosts(1, false);
  }, [fetchPosts]);

  const retry = useCallback(() => {
    setError(null);
    fetchPosts(page, page === 1);
  }, [page, fetchPosts]);

  useEffect(() => {
    fetchPosts(page, false);
  }, []);

  return {
    posts,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
    retry,
  };
};

export default usePosts;
