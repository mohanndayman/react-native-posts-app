import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postsHeaderStyles } from "../styles";

const PostsHeader = memo(({ postsCount, onRefresh, refreshing }) => {
  return (
    <View style={postsHeaderStyles.container}>
      <View style={postsHeaderStyles.content}>
        <View style={postsHeaderStyles.titleContainer}>
          <Text style={postsHeaderStyles.title}>Posts</Text>
          <View style={postsHeaderStyles.countBadge}>
            <Text style={postsHeaderStyles.countText}>{postsCount}</Text>
          </View>
        </View>
        <Text style={postsHeaderStyles.subtitle}>
          {postsCount === 0
            ? "No posts loaded"
            : `${postsCount} ${postsCount === 1 ? "post" : "posts"} loaded`}
        </Text>
      </View>

      <TouchableOpacity
        style={[
          postsHeaderStyles.refreshButton,
          refreshing && postsHeaderStyles.refreshButtonActive,
        ]}
        onPress={onRefresh}
        disabled={refreshing}
        activeOpacity={0.7}
      >
        <Text style={postsHeaderStyles.refreshButtonText}>
          {refreshing ? "⟳" : "↻"}
        </Text>
      </TouchableOpacity>
    </View>
  );
});

export default PostsHeader;
