import { useState, useEffect, useCallback, useRef } from "react";
import { postsApi } from "../api/posts";

const usePosts = (initialPage = 1, limit = 10) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(initialPage);
  const hasInitialized = useRef(false);

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
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [limit]
  );

  const loadMore = useCallback(() => {
    if (!loading && hasMore && posts.length > 0) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchPosts(nextPage, true);
    }
  }, [loading, hasMore, page, fetchPosts, posts.length]);

  const refresh = useCallback(() => {
    setPage(1);
    setPosts([]);
    setHasMore(true);
    fetchPosts(1, false);
  }, [fetchPosts]);

  const retry = useCallback(() => {
    setError(null);
    setHasMore(true);
    fetchPosts(page, page === 1);
  }, [page, fetchPosts]);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      fetchPosts(1, false);
    }
  }, [fetchPosts]);

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
