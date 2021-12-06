import React, {useContext, useEffect, useState} from 'react';
import {
  ArrowBackIcon,
  Box,
  Button,
  Center,
  Text,
  useTheme,
  Actionsheet,
  useDisclose,
} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Pressable} from 'react-native';
import jwt_decode from 'jwt-decode';
import {launchImageLibrary} from 'react-native-image-picker';
import RNQRGenerator from 'rn-qr-generator';
import My_Table from '../components/My_Table';

import My_Req_Gallery_Button from '../components/My_Req_Gallery_Button';
import { DataContext } from '../context';

const STORAGE_KEY = 'Prodcuts';

export default function QRScanner({navigation}) {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [cameraOn, setCameraOn] = useState(true);
  const [jwt, setJwt] = useState({});
  const [loading, setLoading] = useState(false);


  const dataContext = useContext(DataContext)

  const saveData = dataContext.saveData

  function onSuccess(e) {
    setLoading(true);
    const decoded = jwt_decode(e.hasOwnProperty('data') ? e.data : e);
    setJwt(decoded);
    saveData( STORAGE_KEY ,{data: new Date(), value: decoded});
    setCameraOn(false);
    onOpen();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const [pickerResponse, setPickerResponse] = useState(null);

  const onImageLibraryPress = () => {
    setCameraOn(false);
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, setPickerResponse);
  };

  useEffect(() => {
    if (pickerResponse != null && !pickerResponse.hasOwnProperty('didCancel')) {
      setLoading(true);
      RNQRGenerator.detect({
        uri: pickerResponse?.assets[0]?.uri,
      })
        .then(response => {
          const {values} = response; // Array of detected QR code values. Empty if nothing found.
          setLoading(true);
          onSuccess(values[0]);
          setCameraOn(true);
        })
        .catch(error => {
          alert('QR-Code konnte nicht ausgelesen werden.');
          setCameraOn(true);
          setLoading(false);
        });
    }
  }, [pickerResponse]);

  const headerStyle = {
    hstack: {
      borderTopRadius: '10',
      bg: 'main.table.header',
      h: '8%',
      borderBottomColor: 'black',
      borderBottomWidth: '3px',
    },
    box: {
      w: '50%',
      p: '3',
      borderColor: 'black',
      borderRightWidth: '1',
      height: '100%',
    },
    text: {
      bold: true,
      w: '100%',
      h: '100%',
      fontSize: 'md',
      color: 'main.accent',
    },
  };

  const cellStyle = {
    hstack: {
      bg: ['main.table.fst', 'main.table.scd'],
      minH: '8%',
    },
    box: {
      w: '50%',
      p: '3',
      borderColor: 'black',
      borderRightWidth: '1',
      flexDirection: 'row',
      flexGrow: '1',
    },
    text: {
      fontSize: 'md',
      color: 'main.text_gray',
      flexWrap: 'wrap',
      maxH: '100%',
      h: '100%',
    },
  };

  return (
    <Box
      h="100%"
      w="100%"
      bg="black"
      safeAreaBottom
      justifyContent="space-between">
      <Box height="90%" borderRadius="lg">
        {cameraOn ? (
          <QRCodeScanner
            reactivate={false}
            reactivateTimeout={2000}
            cameraStyle={{height: '100%', borderRadius: 10}}
            onRead={onSuccess}
          />
        ) : (
          <> </>
        )}
      </Box>
      {loading ? (
        <Button
          zIndex="100"
          position="absolute"
          top="30%"
          width="70%"
          height="15%"
          alignSelf="center"
          isLoading
          _loading={{
            bg: 'white',
            _text: {
              color: 'black',
            },
          }}
          _spinner={{
            color: 'black',
          }}
          isLoadingText="Submitting">
          Button
        </Button>
      ) : (
        <></>
      )}

      <Box
        width="100%"
        height="13%"
        position="absolute"
        bottom="15%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        pl="5"
        pr="5">
        <Pressable
          _pressed={{bg: 'gray.600'}}
          onPress={() => navigation.goBack()}>
          <ArrowBackIcon color="white" />
        </Pressable>

        <My_Req_Gallery_Button onImageLibraryPress={onImageLibraryPress} />
        <Actionsheet
          isOpen={isOpen}
          onClose={() => {
            onClose();
            setCameraOn(true);
          }}>
          <Actionsheet.Content bg="main.bg">
            <My_Table
              tableData={Object.entries(jwt)}
              cellHeaders={['Attribut', 'Wert']}
              headerStyle={headerStyle}
              cellBodyStyles={cellStyle}
            />
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
      <Box bg="black" height="5%" width="100%">
        <Center>
          <Text color="white" fontSize="lg">
            Bitte halte die Kamera vor einen QR-Code
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
