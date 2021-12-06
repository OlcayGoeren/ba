import React, {useContext, useEffect, useState} from 'react';
import {Box, Text, Pressable, useTheme, ArrowForwardIcon} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import My_new_table from '../components/My_new_Table';
import My_header from '../components/My_header';
import { DataContext } from '../context';

const STORAGE_KEY = 'Prodcuts';

export default function History_View({navigation, route}) {
  const dataContext = useContext(DataContext)
  const {data } = dataContext
  // let data = [];
  const [bodyColumns, setBodyColumns] = useState([]);

  const headerRowStyle = {
    borderTopRadius: '10',
    bg: 'main.table.header',
    borderBottomColor: 'black',
    borderBottomWidth: '3px',
  };

  const headerC = [
    <Box key="0" w="33%" p="3" borderColor="black" borderRightWidth="1">
      <Text bold="true" w="100%" fontSize="md" color="main.accent">
        Datum
      </Text>
    </Box>,
    <Box key="1" w="50%" p="3">
      <Text bold="true" w="100%" fontSize="md" color="main.accent">
        Datum
      </Text>
    </Box>,
  ];

  function pressed(colIdx) {
    navigation.navigate('History_Detail_View', {
      data: data[colIdx],
      idx: colIdx
    });
  }

  useEffect(() => {
    async function bla() {
      try {
        // let value_storage = await AsyncStorage.getItem(STORAGE_KEY);
        // let value_storage_json = JSON.parse(value_storage);
        // console.log('useeffect');
        // data = value_storage_json;
        const formatted = data.map(({data, value}) => {
          const date = new Date(data);
          return [
            `${date.toLocaleDateString()}${'\n'}${date.toLocaleTimeString()}`,
            `${value.Hersteller}${'\n'}${value.Modell}`,
          ];
        });
        setBodyColumns(() => {
          return formatted.map((columns, colIdx) => {
            return columns.map((value, idx) => {
              return (
                <Box
                  key={idx}
                  w={idx % 2 == 0 ? '33%' : '66%'}
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

                  {idx % 2 == 1 ? (
                    <Pressable
                      w="20%"
                      h="100%"
                      top="30%"
                      position="absolute"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                      right="3"
                      borderRadius="100"
                      onPress={() => pressed(colIdx, idx)}
                      _pressed={{bg: 'gray.600'}}>
                      <ArrowForwardIcon color="gray.400" />
                    </Pressable>
                  ) : null}
                </Box>
              );
            });
          });
        });
        // return value_storage_json;
      } catch (e) {
        console.log(e);
        alert('Failed to fetch the data from storage');
      }
    }


    // bla().then(json => {
    //   data = json;
    // });
    bla()
  }, [data]);

  const theme = useTheme().colors.main;
  return (
    <Box bg="main.bg" safeArea h="100%">
      <My_header />

      <Box w="100%" alignItems="center" justifyContent="center" mb="10" mt="10">
        <My_new_table
          header_columns={headerC}
          body_columns={bodyColumns}
          headerRowStyle={headerRowStyle}
          bgs={['main.table.fst', 'main.table.scd']}
        />
      </Box>
    </Box>
  );
}
