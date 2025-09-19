import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing, borderRadius, shadows } from "../../theme/spacing";

export const postCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    ...shadows.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    marginBottom: spacing.md,
  },
  badgeContainer: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  postIdBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  userIdBadge: {
    backgroundColor: colors.secondary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
  },
  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "600",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.md,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  body: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    marginBottom: spacing.lg,
    letterSpacing: -0.1,
  },
  footer: {
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  readMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  readMoreText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "600",
    marginRight: spacing.xs,
  },
  arrow: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
});
