import { Box, Button, Card, Center, Text } from "native-base"
import React, { useState } from 'react';

export default My_Button = (props) => {

  const [title, setTitle] = useState(props.title)

  return (
    <Button
    accessibilityHint={props.hint}
      style={{ padding: '10%', alignSelf: 'center' }}
      onPress={() => props.click()}
      bg="accent" color="white"
      _pressed={{ bg: "gray.600" }}
      _text={{
        fontSize: "2xl",
        color: "#373737"
      }}
      {...props}
    >
      {title}
    </Button >

  )
}