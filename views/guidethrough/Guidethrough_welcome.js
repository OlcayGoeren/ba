import React, { useState } from 'react';
import { Box, Center, Heading, Text } from 'native-base';
import My_Button from '../../components/My_Button';
import My_Progressbar from '../../components/My_Progressbar';
import Ticket from '../../assets/Ticket';


export default function Guidethrough_welcome({ navigation }) {

  return (
    <Box bg="bg" safeArea h="100%">
      <Box position="relative" h="100%" display="flex" flexDirection="column" justifyContent="space-between" >
        <Box marginLeft="15" marginTop="45">
          <Heading accessibilityRole="header" fontSize="4xl" color="white">Willkommen in der <Text color="accent">SmartID</Text>-App</Heading>
          <Heading accessibilityRole='summary' marginRight="23" color="text_gray" marginTop="10" fontSize="lg" >Hier können Sie herrausfinden, ob das Produkt ein gültes SmartID-Zertifikat besitzt</Heading>
        </Box>
        <Center width="80%" height="80%" position="absolute" left="9%" top="20%" zIndex="-1">
          <Ticket />
        </Center>
        <Center marginBottom="7">
          {/* accessible accessibilityLabel={labelText}  accessibilityRole="progressbar" */}
          <My_Progressbar active="0" />
          <My_Button hint="Navigiere zum nächsten Guidethrough Ansicht: Siegel Validieren" title="Los geht´s" w="300" h="60" click={() => { navigation.navigate('Guidethrough_Validate') }} />
        </Center>
      </Box>
    </Box >
  );
}
