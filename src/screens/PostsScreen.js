import React, { memo, useCallback, useMemo } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
  Alert,
} from "react-native";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import usePosts from "../hooks/usePosts";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const PostsScreen = memo(() => {
  const { posts, loading, error, hasMore, loadMore, refresh, retry } =
    usePosts();

  const handlePostPress = useCallback((post) => {
    Alert.alert("Post Details", `Title: ${post.title}\n\nBody: ${post.body}`, [
      { text: "OK" },
    ]);
  }, []);

  const renderPost = useCallback(
    ({ item }) => <PostCard post={item} onPress={handlePostPress} />,
    [handlePostPress]
  );

  const renderFooter = useCallback(() => {
    if (!loading || posts.length === 0) return null;
    return <Loader size="small" text="Loading more posts..." />;
  }, [loading, posts.length]);

  const renderEmpty = useCallback(() => {
    if (loading) return <Loader text="Loading posts..." />;
    if (error) return <ErrorMessage message={error} onRetry={retry} />;
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No posts available</Text>
      </View>
    );
  }, [loading, error, retry]);

  const keyExtractor = useCallback((item, index) => `${item.id}-${index}`, []);

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 120,
      offset: 120 * index,
      index,
    }),
    []
  );

  const refreshControl = useMemo(
    () => (
      <RefreshControl
        refreshing={loading && posts.length === 0}
        onRefresh={refresh}
        colors={[colors.primary]}
        tintColor={colors.primary}
      />
    ),
    [loading, posts.length, refresh]
  );

  const handleEndReached = useCallback(() => {
    if (hasMore && !loading) {
      loadMore();
    }
  }, [hasMore, loading, loadMore]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Posts</Text>
        <Text style={styles.subtitle}>{posts.length} posts loaded</Text>
      </View>

      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        refreshControl={refreshControl}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
        initialNumToRender={10}
        updateCellsBatchingPeriod={50}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingTop: 50,
    paddingBottom: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  listContainer: {
    paddingBottom: spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: "center",
  },
});

export default PostsScreen;
