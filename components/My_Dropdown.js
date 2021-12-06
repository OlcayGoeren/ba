import React, {useEffect, useState} from 'react';
import {
  ArrowBackIcon,
  Box,
  Center,
  Heading,
  HStack,
  Text,
  Pressable,
  useTheme,
  VStack,
} from 'native-base';
import My_header from '../components/My_header';
import My_Table from '../components/My_Table';
import AsyncStorage from '@react-native-async-storage/async-storage';
import My_new_table from '../components/My_new_Table';
import More from '../assets/More';

const STORAGE_KEY = 'Prodcuts';

export default function My_Dropdown({navigation, route, idk }) {
  const [show, setShow] = useState(true);


  function pressed() {
      setShow(true)
  }

  return (
    <Box position="relative">
        <VStack >
      <Pressable
        w="20%"
        h="100%"
        position="absolute"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        right="3"
        borderRadius="100"
        onPress={pressed}
        _pressed={{bg: 'gray.600'}}>
        <More w="4px" h="16px" />
      </Pressable>
      {show? idk : null }
      </VStack>
    </Box>
  );
}
