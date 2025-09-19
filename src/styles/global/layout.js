import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import { spacing } from "../../theme/spacing";

export const layout = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  flexBetween: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  flexAround: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  flexStart: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  flexEnd: {
    justifyContent: "flex-end",
    alignItems: "center",
  },

  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  justifyAround: {
    justifyContent: "space-around",
  },

  absolute: {
    position: "absolute",
  },
  relative: {
    position: "relative",
  },
  absoluteFill: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  screenContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  headerContainer: {
    backgroundColor: colors.surface,
    paddingTop: 50,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  cardContainer: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: 16,
    padding: spacing.lg,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
    minHeight: 300,
  },
});
