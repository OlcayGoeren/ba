import React, {useEffect, useState} from 'react';
import {
  ArrowBackIcon,
  Box,
  Text,
  Pressable,
  Button,
  Center,
  Image,
} from 'native-base';
import My_header from '../../components/My_header';
import My_new_table from '../../components/My_new_Table';
import ShareIcon from '../../assets/Share';
import Bin from '../../assets/Bin';
import RNQRGenerator from 'rn-qr-generator';
import useStore from '../../store/useStore';
import Share from 'react-native-share';
import History from '../../assets/History';

export default function History_Detail_View({navigation, route}) {
  const removeProducts = useStore(state => state.removeProducts);
  const [bodyColumns, setBodyColumns] = useState([]);
  const [imageUri, setImageUri] = useState('');

  const headerRowStyle = {
    borderTopRadius: '10',
    bg: 'table.header',
    borderBottomColor: 'black',
    borderBottomWidth: '3px',
  };

  const generate = () => {
    RNQRGenerator.generate({
      value: JSON.stringify(route.params.data.value),
      height: 300,
      width: 300,
      base64: true,
      backgroundColor: 'white',
      color: 'black',
      correctionLevel: 'M',
    })
      .then(response => {
        setImageUri(response.uri);
      })
      .catch(err => console.log('Cannot create QR code', err));
  };

  const headerC = [
    <Box key="0" w="50%" p="3" borderColor="black" borderRightWidth="1">
      <Text bold="true" w="100%" fontSize="md" color="accent">
        Attribut
      </Text>
    </Box>,
    <Box key="1" w="50%" p="3">
      <Text bold="true" w="100%" fontSize="md" color="accent">
        Wert
      </Text>
    </Box>,
  ];

  const bodyRowStyle = {
    minH: '8%',
  };

  useEffect(() => {
    generate();
    const data = Object.entries(route.params.data.value);

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
                color="text_gray"
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
  }, []);

  async function pressed(e) {
    const shareOptions = {
      title: 'Share file',
      failOnCancel: false,
      urls: [imageUri],
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  }

  async function removeItem(e) {
    await removeProducts(route.params.idx);
    navigation.goBack();
  }

  return (
    <Box
      h="100%"
      bg="bg"
      safeArea
      justifyContent="space-between"
      style={{flex: 1}}>
      <My_header title="Detail" Icon={<History width="6%" mr="5%"/>} />

      <Center>
        {imageUri.length > 3 ? (
          <Image
            borderWidth="3"
            borderColor="black"
            size="xl"
            alt="ich versteh die welt nicht mehr fr"
            source={{
              uri: imageUri,
            }}
          />
        ) : (
          <></>
        )}
      </Center>

      <Box alignItems="center" justifyContent="center">
        <My_new_table
          header_columns={headerC}
          body_columns={bodyColumns}
          headerRowStyle={headerRowStyle}
          bodyRowStyle={bodyRowStyle}
          bgs={['table.fst', 'table.scd']}
        />
      </Box>

      <Box ml="4" mr="4" flexDirection="row" justifyContent="space-between">
        <Pressable
        w="10%"
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          borderRadius="100"
          _pressed={{bg: 'gray.600'}}
          onPress={() => {
            // navigation.goBack("History_View")
            navigation.goBack();
          }}>
          <ArrowBackIcon color="white" />
        </Pressable>

        <Box flexDirection="row">
          <Button
            _pressed={{bg: 'gray.600'}}
            borderColor="stroke"
            borderWidth="1.5"
            shadow="custom"
            bg="#1E3E4A"
            mr="5"
            onPress={removeItem}
            leftIcon={<Bin w="15px" h="15px" color="white" />}>
            Löschen
          </Button>
          <Button
            onPress={pressed}
            _pressed={{bg: 'gray.600'}}
            borderColor="stroke"
            borderWidth="1.5"
            shadow="custom"
            bg="#1E3E4A"
            leftIcon={<ShareIcon w="15px" h="15px" />}>
            Teilen
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
