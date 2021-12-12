import React, {useState} from 'react';
import {ArrowForwardIcon, Box, Heading, Text} from 'native-base';

export default function My_Card(props, {navigation}) {
  return (
    <Box
      position="relative"
      paddingLeft="10"
      bg="bg"
      shadow="custom"
      borderRadius="13"
      borderColor="stroke"
      borderWidth="1.5"
      width="80%"
      flexDirection="row"
      justifyContent="space-between"
      {...props}>
      <Box paddingRight="90px" paddingTop="5" paddingBottom="5">
        <Heading fontSize="25px" mb="3" color="white">
          Information
        </Heading>
        <Text fontSize="sm" color="text_gray">
          Schau dir alle Funktionen dieser App nochmal in ruhe an.
        </Text>
      </Box>
      <ArrowForwardIcon
        position="absolute"
        top="40%"
        right="30px"
        color="accent"
      />
    </Box>
  );
}
