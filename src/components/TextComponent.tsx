import React from "react";
import { Text } from "react-native";


const TextComponent = (props) => {
  return (
    <Text
      style={{
        fontSize: props.size,
        color: props.color,
        fontWeight: props.weight,
        letterSpacing: props.spacing,
        textAlign: props.align,
      }}
    >
      {props.children}
    </Text>
  );
};


export default TextComponent;
