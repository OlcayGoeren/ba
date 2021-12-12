import React, { useState } from 'react';
import { Box, Center, Divider, Heading, useTheme} from 'native-base';
import Home from '../assets/Home';


export default function My_header() {

    const theme = useTheme().colors
    const accent = theme.accent
    return (
        <Box bg="bg" h="8%">
            <Center h="90%" w="100%" bg="bg" flexDirection="row">
                <Home color={accent} width="6%" mr="5%" />
                <Heading fontSize="3xl" color="white">Start</Heading>
            </Center>
            <Center>
                <Divider bg="divider" w="90%" />
            </Center>
        </Box>
    );
}
