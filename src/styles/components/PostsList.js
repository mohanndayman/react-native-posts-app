import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const postsListStyles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContainer: {
    paddingBottom: spacing.xl,
    flexGrow: 1,
  },
  footerLoader: {
    paddingVertical: spacing.lg,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
    minHeight: 300,
  },
  emptyText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
});
