import React, { useState } from 'react';
import { Box, Center, Heading, Text, useTheme } from 'native-base';
import Ticket from '../assets/Ticket';
import My_Card from '../components/My_Card';
import My_header from '../components/My_header';
import { View } from 'react-native';


export default function Homestack({ navigation }) {
    const theme = useTheme().colors.main

    return (
        <Box position="relative" h="100%" w="100%" bg="main.bg" safeAreaTop justifyContent="space-between">
            <My_header />

            <Center>
                <My_Card mb="10%" />
                <My_Card mb="10%" />
                <My_Card />
            </Center>
            <Center width="70%" height="100%" position="absolute"
                zIndex="-1" opacity="0.1" style={{ transform: [{ rotateZ: "40deg" }] }}
                top="23%" left="55%" >
                <Ticket />
            </Center>
            <Center width="70%" height="100%" position="absolute"
                top="-10%" left="-30%" zIndex="-1" opacity="0.1"
                style={{ transform: [{ rotateZ: "55deg" }] }}>
                <Ticket />
            </Center>
            <View />
        </Box >

    );
}
