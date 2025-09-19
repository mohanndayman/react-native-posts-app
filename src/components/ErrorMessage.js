import React, { memo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { errorMessageStyles } from "../styles";

const ErrorMessage = memo(({ message, onRetry, style }) => {
  return (
    <View style={[errorMessageStyles.container, style]}>
      <Text style={errorMessageStyles.message}>{message}</Text>
      {onRetry && (
        <TouchableOpacity
          style={errorMessageStyles.retryButton}
          onPress={onRetry}
        >
          <Text style={errorMessageStyles.retryText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default ErrorMessage;
