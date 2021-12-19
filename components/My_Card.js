import React, {useState} from 'react';
import {ArrowForwardIcon, Box, Heading, Text, Pressable} from 'native-base';

export default function My_Card(props, {navigation}) {

  const hint = 'Navigiere zu ' + props.title


  return (
    <Pressable
    accessible
      accessibilityRole="button"
      accessibilityHint={hint}
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      onPress={() => props.pressed()}
      >
      <Box
        paddingLeft="10"
        bg="bg"
        shadow="custom"
        borderRadius="13"
        borderColor="stroke"
        borderWidth="1.5"
        w="80%"
        {...props.style}>
        <Box paddingRight="90px" paddingTop="5" paddingBottom="5">
          <Heading fontSize="25px" mb="3" color="white">
            {props.title}
          </Heading>
          <Text fontSize="sm" color="text_gray">
            {props.more}
          </Text>
        </Box>
        <ArrowForwardIcon
          position="absolute"
          top="40%"
          right="30px"
          color="accent"
        />
      </Box>
    </Pressable>
  );
}
