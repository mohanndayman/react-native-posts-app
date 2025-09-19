import React, { memo } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { loaderStyles } from "../styles";
import { colors } from "../theme/colors";

const Loader = memo(({ size = "large", text, style }) => {
  return (
    <View style={[loaderStyles.container, style]}>
      <ActivityIndicator size={size} color={colors.primary} />
      {text && <Text style={loaderStyles.text}>{text}</Text>}
    </View>
  );
});

export default Loader;
