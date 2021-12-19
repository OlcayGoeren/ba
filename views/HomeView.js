import React, { useState } from 'react';
import { Box, Center } from 'native-base';
import Ticket from '../assets/Ticket';
import My_Card from '../components/My_Card';
import My_header from '../components/My_header';
import { View } from 'react-native';
import Home from '../assets/Home';
import { useTheme } from '@react-navigation/native';


export default function Homestack({ navigation }) {
    return (
        <Box  accessibilityLabel='Start Ansicht' position="relative" h="100%" w="100%" bg="bg" safeAreaTop justifyContent="space-between">
            {/* Role label acessible */}
            <My_header title="Start" Icon={<Home width="6%" mr="5%"/>} />
            <Center>
                {/* Role, hint, label accessible  */}
                <My_Card pressed={() => navigation.navigate('Guidethrough_welcome')} title="Guidethrough" more="Vergessen wie die App funktioniert? Hier kannst du es nochmal nachlesen!" style={{mb:"10%"}}  />
                <My_Card pressed={() => navigation.navigate('Verlauf')} title="Verlauf" more="Hier kannst du alle Artikel sehen, die du bereits gescannt hast!"  style={{mb:"10%"}} />
                <My_Card pressed={() => navigation.navigate('Kamera')} title="Kamera" more="Hier kannst du Überprüfen, ob du ein valides Produkt hast!"  />
            </Center>
            {/* Hide!! */}
            <Center  width="70%" height="100%" position="absolute"
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
