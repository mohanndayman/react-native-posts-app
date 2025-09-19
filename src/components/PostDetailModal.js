import React, { memo } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import { postDetailModalStyles } from "../styles";

const { height: screenHeight } = Dimensions.get("window");

const PostDetailModal = memo(({ visible, post, onClose }) => {
  if (!post) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={postDetailModalStyles.container}>
        <View style={postDetailModalStyles.header}>
          <View style={postDetailModalStyles.headerContent}>
            <Text style={postDetailModalStyles.headerTitle}>Post Details</Text>
            <TouchableOpacity
              style={postDetailModalStyles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={postDetailModalStyles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          style={postDetailModalStyles.content}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={postDetailModalStyles.scrollContent}
        >
          <View style={postDetailModalStyles.badgeContainer}>
            <View style={postDetailModalStyles.postIdBadge}>
              <Text style={postDetailModalStyles.badgeText}>#{post.id}</Text>
            </View>
            <View style={postDetailModalStyles.userIdBadge}>
              <Text style={postDetailModalStyles.badgeText}>
                User {post.userId}
              </Text>
            </View>
          </View>

          <Text style={postDetailModalStyles.title}>{post.title}</Text>

          <View style={postDetailModalStyles.bodyContainer}>
            <Text style={postDetailModalStyles.bodyLabel}>Content:</Text>
            <Text style={postDetailModalStyles.body}>{post.body}</Text>
          </View>
        </ScrollView>

        <View style={postDetailModalStyles.footer}>
          <TouchableOpacity
            style={postDetailModalStyles.actionButton}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={postDetailModalStyles.actionButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
});

export default PostDetailModal;
