import React, {useState} from 'react';
import {Box, Center, Divider, Heading, useTheme} from 'native-base';
import Home from '../assets/Home';
import History from '../assets/History';
import {View} from 'react-native';

export default function My_header({title, Icon}) {
  const theme = useTheme().colors;
  const accent = theme.accent;
  const transformedIcon = React.cloneElement(Icon, {color: accent});

  return (
    <Box
      accessible
      accessibilityRole="header"
      bg="bg"
      h="8%"
      >
      <Center h="90%" w="100%" bg="bg" flexDirection="row">
        {transformedIcon}
        <Heading fontSize="3xl" color="white">
          {title}
        </Heading>
      </Center>
      <Center>
        <Divider bg="divider" w="90%" />
      </Center>
    </Box>
  );
}
