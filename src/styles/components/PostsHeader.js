import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing, borderRadius, shadows } from "../../theme/spacing";

export const postsHeaderStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    paddingTop: 50,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
  },
  countBadge: {
    backgroundColor: colors.primary,
    marginLeft: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.full,
    minWidth: 24,
    alignItems: "center",
  },
  countText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: "500",
  },
  refreshButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surfaceLight,
    justifyContent: "center",
    alignItems: "center",
    ...shadows.sm,
  },
  refreshButtonActive: {
    backgroundColor: colors.primary,
  },
  refreshButtonText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "600",
  },
});
