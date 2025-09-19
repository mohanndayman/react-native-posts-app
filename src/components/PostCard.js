import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { postCardStyles } from "../styles";

const PostCard = memo(({ post, onPress }) => {
  const handlePress = () => {
    onPress?.(post);
  };

  return (
    <TouchableOpacity
      style={postCardStyles.container}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={postCardStyles.content}>
        <View style={postCardStyles.header}>
          <View style={postCardStyles.badgeContainer}>
            <View style={postCardStyles.postIdBadge}>
              <Text style={postCardStyles.badgeText}>#{post.id}</Text>
            </View>
            <View style={postCardStyles.userIdBadge}>
              <Text style={postCardStyles.badgeText}>User {post.userId}</Text>
            </View>
          </View>
        </View>

        <Text style={postCardStyles.title} numberOfLines={2}>
          {post.title}
        </Text>

        <Text style={postCardStyles.body} numberOfLines={3}>
          {post.body}
        </Text>

        <View style={postCardStyles.footer}>
          <View style={postCardStyles.readMoreContainer}>
            <Text style={postCardStyles.readMoreText}>Read more</Text>
            <Text style={postCardStyles.arrow}>→</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default PostCard;
