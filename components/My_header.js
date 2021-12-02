import React, { useState } from 'react';
import { Box, Center, Divider, Heading, HStack, Text, useTheme, VStack } from 'native-base';
import Home from '../assets/Home';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function My_header() {
    const theme = useTheme().colors.main
    return (
        <Box bg="main.bg" h="8%">
            <Center h="90%" w="100%" bg="main.bg" flexDirection="row">
                <Home color={theme.accent} width="6%" mr="5%" />
                <Heading fontSize="3xl" color="white">Start</Heading>
            </Center>
            <Center>
                <Divider bg="main.divider" w="90%" />
            </Center>
        </Box>
    );
}
