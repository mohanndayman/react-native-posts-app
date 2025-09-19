import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "800",
    color: colors.text,
    lineHeight: 40,
    letterSpacing: -0.8,
  },
  h2: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.text,
    lineHeight: 36,
    letterSpacing: -0.6,
  },
  h3: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.text,
    lineHeight: 32,
    letterSpacing: -0.5,
  },
  h4: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 28,
    letterSpacing: -0.4,
  },
  h5: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 24,
    letterSpacing: -0.3,
  },
  h6: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    lineHeight: 22,
    letterSpacing: -0.2,
  },

  bodyLarge: {
    fontSize: 18,
    fontWeight: "400",
    color: colors.text,
    lineHeight: 28,
    letterSpacing: -0.1,
  },
  body: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.text,
    lineHeight: 24,
    letterSpacing: -0.2,
  },
  bodySmall: {
    fontSize: 14,
    fontWeight: "400",
    color: colors.text,
    lineHeight: 20,
    letterSpacing: -0.1,
  },

  secondary: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textSecondary,
    lineHeight: 20,
  },
  secondarySmall: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textSecondary,
    lineHeight: 16,
  },

  caption: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textTertiary,
    lineHeight: 16,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.textSecondary,
    lineHeight: 20,
  },

  button: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  buttonSmall: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  success: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.success,
    lineHeight: 20,
  },
  warning: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.warning,
    lineHeight: 20,
  },
  error: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.error,
    lineHeight: 20,
  },
  info: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.info,
    lineHeight: 20,
  },
});
