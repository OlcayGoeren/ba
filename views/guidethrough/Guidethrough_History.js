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
import History from '../../assets/History';
import Ticket from '../../assets/Ticket';
import useStore from '../../store/useStore';
import {useTheme} from '@react-navigation/native';

export default function Guidethrough_History({navigation, route}) {
  const {updateoptin, optin} = useStore();
  const theme = useTheme().colors;
  const accent = theme.accent;

  return (
    <Box bg="bg" safeArea h="100%">
      <Box
        position="relative"
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between">
        <Box mt="35" accessible accessibilityRole="header">
          <Center>
            <HStack space="3.5">
              <History color="#F89132" w="39" h="37" />
              <Heading fontSize="3xl" color="white">
                VERLAUF EINSEHEN
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
          right="50%"
          zIndex="-1"
          opacity="0.1"
          style={{transform: [{rotateZ: '90deg'}]}}>
          <Ticket />
        </Center>

        <Center marginBottom="7" position="relative">
          <My_Progressbar active="2" />
          <HStack>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Navigiere zurück"
              accessibilityHint="Dieser Button navigiert zur zuletzt geöffneten Ansicht: Siegel Validieren"
              position="absolute"
              left="-25%"
              top="15%"
              _pressed={{bg: 'gray.600'}}
              onPress={() => navigation.goBack()}>
              <ArrowBackIcon color="white" />
            </Pressable>
            <My_Button
              _text={{
                fontSize: '15',
                bold: 'true',
              }}
              title="Jetzt Starten"
              w="174"
              h="45"
              click={() => {
                optin ? navigation.navigate('Start') : updateoptin();
              }}
            />
          </HStack>
        </Center>
      </Box>
    </Box>
  );
}
