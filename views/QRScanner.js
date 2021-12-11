import React, {useContext, useEffect, useState} from 'react';
import {
  ArrowBackIcon,
  Box,
  Button,
  Center,
  Text,
  Actionsheet,
  useDisclose,
} from 'native-base';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {Pressable} from 'react-native';
import jwt_decode from 'jwt-decode';
import {launchImageLibrary} from 'react-native-image-picker';
import RNQRGenerator from 'rn-qr-generator';
import My_new_Table from '../components/My_new_Table';

import My_Req_Gallery_Button from '../components/My_Req_Gallery_Button';
import {DataContext} from '../context';

const STORAGE_KEY = 'Prodcuts';

export default function QRScanner({navigation}) {

  const {saveData} = useContext(DataContext);

  // const saveData = dataContext.saveData;
  const {isOpen, onOpen, onClose} = useDisclose();

  const [cameraOn, setCameraOn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [bodyColumns, setBodyColumns] = useState([]);
  const [pickerResponse, setPickerResponse] = useState(null);

  const headerC = [
    <Box key="0" w="50%" p="3" borderColor="black" borderRightWidth="1">
      <Text bold="true" w="100%" fontSize="md" color="main.accent">
        Attribut
      </Text>
    </Box>,
    <Box key="1" w="50%" p="3">
      <Text bold="true" w="100%" fontSize="md" color="main.accent">
        Wert
      </Text>
    </Box>,
  ];

  const bodyRowStyle = {
    minH: '8%',
  };

  const headerRowStyle = {
    borderTopRadius: '10',
    bg: 'main.table.header',
    borderBottomColor: 'black',
    borderBottomWidth: '3px',
  };
  
  function onSuccess(e) {
    setLoading(true);
    const decoded = jwt_decode(e.hasOwnProperty('data') ? e.data : e);
    saveData(STORAGE_KEY, {date: new Date(), value: decoded});
    setCameraOn(false);

    const data = Object.entries(decoded);

    setBodyColumns(() => {
      return data.map((row, colIdx) => {
        return row.map((value, idx) => {
          return (
            <Box
              key={idx}
              w="50%"
              p="3"
              borderColor="black"
              borderRightWidth="1"
              flexDirection="row"
              flexGrow="1"
              borderColor="black"
              borderRightWidth={idx % 2 == 0 ? '1' : '0'}
              justifyContent="space-between"
              position="relative">
              <Text
                fontSize="sm"
                color="main.text_gray"
                flexWrap="wrap"
                maxH="100%"
                h="100%">
                {value}
              </Text>
            </Box>
          );
        });
      });
    });

    onOpen();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

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
          // setCameraOn(true);
        })
        .catch(error => {
          alert('QR-Code konnte nicht ausgelesen werden.');
          setCameraOn(true);
          setLoading(false);
        });
    }
  }, [pickerResponse]);

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
            <Box alignItems="center" justifyContent="center">
              <My_new_Table
                header_columns={headerC}
                body_columns={bodyColumns}
                headerRowStyle={headerRowStyle}
                bodyRowStyle={bodyRowStyle}
                bgs={['main.table.fst', 'main.table.scd']}
              />
            </Box>
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
