import React, {useState} from 'react';
import {
  ArrowBackIcon,
  Box,
  Center,
  Heading,
  HStack,
  Text,
  Pressable,
} from 'native-base';
import My_Button from '../../components/My_Button';
import My_Progressbar from '../../components/My_Progressbar';
import Camera from '../../assets/Camera';
import Ticket from '../../assets/Ticket';
import My_header from '../../components/My_header';
import Home from '../../assets/Home';

export default function Guidethrough_Validate({navigation, route}) {
  return (
    <Box bg="bg" safeArea h="100%">
      <Box
        position="relative"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between">
        <Box accessible accessibilityRole="header" mt="35">
          <Center>
            <HStack space="3.5">
              <Camera color="#F89132" w="39" h="37" />
              <Heading fontSize="3xl" color="white">
                SIEGEL VALIDIEREN
              </Heading>
            </HStack>
          </Center>
        </Box>

        <Center ml="7" mr="7">
          <Text fontSize="16" bold paddingBottom="20" color="text_gray">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </Text>
          <Text fontSize="16" bold color="text_gray">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren,
          </Text>
        </Center>

        <Center
          width="100%"
          height="100%"
          position="absolute"
          left="50%"
          zIndex="-1"
          opacity="0.1"
          style={{transform: [{rotateZ: '90deg'}]}}>
          <Ticket />
        </Center>

        <Center marginBottom="7" position="relative">
          <My_Progressbar active="1" />
          <HStack>
            <Pressable
              position="absolute"
              left="-25%"
              top="15%"
              _pressed={{bg: 'gray.600'}}
              onPress={() => navigation.goBack()}
              accessibilityRole="button"
              accessibilityLabel="Navigiere zurück"
              accessibilityHint="Dieser Button navigiert zur zuletzt geöffneten Ansicht: Guidethrough Start Ansicht">
              <ArrowBackIcon color="white" />
            </Pressable>
            <My_Button
              hint="Navigiere zum nächsten Guidethrough Ansicht: Verlauf Einsehen"
              _text={{
                fontSize: '15',
                bold: 'true',
              }}
              title="Weiter"
              w="174"
              h="45"
              click={() => {
                navigation.navigate('Guidethrough_History');
              }}
            />
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}
