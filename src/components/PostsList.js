import React, { memo, useCallback, useMemo } from "react";
import { FlatList, RefreshControl, View, Text } from "react-native";
import PostCard from "./PostCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { postsListStyles } from "../styles";
import { colors } from "../theme/colors";

const PostsList = memo(
  ({
    posts,
    loading,
    error,
    hasMore,
    onLoadMore,
    onRefresh,
    onPostPress,
    onRetry,
  }) => {
    const renderPost = useCallback(
      ({ item }) => <PostCard post={item} onPress={onPostPress} />,
      [onPostPress]
    );

    const renderFooter = useCallback(() => {
      if (!loading || posts.length === 0) return null;
      return (
        <View style={postsListStyles.footerLoader}>
          <Loader size="small" text="Loading more posts..." />
        </View>
      );
    }, [loading, posts.length]);

    const renderEmpty = useCallback(() => {
      if (loading) {
        return (
          <View style={postsListStyles.emptyContainer}>
            <Loader text="Loading posts..." />
          </View>
        );
      }

      if (error) {
        return (
          <View style={postsListStyles.emptyContainer}>
            <ErrorMessage message={error} onRetry={onRetry} />
          </View>
        );
      }

      return (
        <View style={postsListStyles.emptyContainer}>
          <Text style={postsListStyles.emptyText}>No posts available</Text>
          <Text style={postsListStyles.emptySubtext}>
            Pull down to refresh or check your connection
          </Text>
        </View>
      );
    }, [loading, error, onRetry]);

    const keyExtractor = useCallback(
      (item, index) => `${item.id}-${index}`,
      []
    );

    const getItemLayout = useCallback(
      (data, index) => ({
        length: 140,
        offset: 140 * index,
        index,
      }),
      []
    );

    const refreshControl = useMemo(
      () => (
        <RefreshControl
          refreshing={loading && posts.length === 0}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
          progressBackgroundColor={colors.surface}
        />
      ),
      [loading, posts.length, onRefresh]
    );

    const handleEndReached = useCallback(() => {
      if (hasMore && !loading) {
        onLoadMore();
      }
    }, [hasMore, loading, onLoadMore]);

    return (
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
        contentContainerStyle={postsListStyles.listContainer}
        showsVerticalScrollIndicator={false}
        style={postsListStyles.list}
      />
    );
  }
);

export default PostsList;
