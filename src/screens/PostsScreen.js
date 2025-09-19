import React, { memo, useState, useCallback } from "react";
import { View } from "react-native";
import PostsHeader from "../components/PostsHeader";
import PostsList from "../components/PostsList";
import PostDetailModal from "../components/PostDetailModal";
import usePosts from "../hooks/usePosts";
import { postsScreenStyles } from "../styles";

const PostsScreen = memo(() => {
  const { posts, loading, error, hasMore, loadMore, refresh, retry } =
    usePosts();

  const [selectedPost, setSelectedPost] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePostPress = useCallback((post) => {
    setSelectedPost(post);
    setModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
    setSelectedPost(null);
  }, []);

  const handleRefresh = useCallback(() => {
    refresh();
  }, [refresh]);

  return (
    <View style={postsScreenStyles.container}>
      <PostsHeader
        postsCount={posts.length}
        onRefresh={handleRefresh}
        refreshing={loading && posts.length === 0}
      />

      <PostsList
        posts={posts}
        loading={loading}
        error={error}
        hasMore={hasMore}
        onLoadMore={loadMore}
        onRefresh={refresh}
        onPostPress={handlePostPress}
        onRetry={retry}
      />

      <PostDetailModal
        visible={modalVisible}
        post={selectedPost}
        onClose={handleCloseModal}
      />
    </View>
  );
});

export default PostsScreen;
