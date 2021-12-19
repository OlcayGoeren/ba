import React, {useEffect, useState} from 'react';
import {Box, Text, Pressable, useTheme, ArrowForwardIcon} from 'native-base';
import My_new_table from '../../components/My_new_Table';
import My_header from '../../components/My_header';
import useStore from '../../store/useStore';
import History from '../../assets/History';

export default function History_View({navigation, route}) {
  const {products, readProducts} = useStore(state => state);

  const [bodyColumns, setBodyColumns] = useState([]);

  const headerRowStyle = {
    borderTopRadius: '10',
    bg: 'table.header',
    borderBottomColor: 'black',
    borderBottomWidth: '3px',
  };

  const headerC = [
    <Box key="0" w="33%" p="3" borderColor="black" borderRightWidth="1">
      <Text bold="true" w="100%" fontSize="md" color="accent">
        Datum
      </Text>
    </Box>,
    <Box key="1" w="50%" p="3">
      <Text bold="true" w="100%" fontSize="md" color="accent">
        Artikel
      </Text>
    </Box>,
  ];

  function pressed(colIdx) {
    navigation.navigate('History_Detail_View', {
      data: products[colIdx],
      idx: colIdx,
    });
  }

  useEffect(() => {
    readProducts();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      try {
        if (products != null) {
          const formatted = products.map(({date, value}) => {
            date = new Date(date);
            return [
              `${date.toLocaleDateString()}${'\n'}${date.toLocaleTimeString().split(" ")[0] }`,
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
                    accessibilityHint={idx % 2 == 0 ? 'Datum' : 'Artikel'}
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

                    {idx % 2 == 1 ? (
                      <Pressable
                        accessibilityRole="button"
                        accessibilityLabel="Navigiere zur Detailansicht"
                        accessibilityHint={value}
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
        }
      } catch (e) {
        alert('Failed to fetch the data from storagee hier?');
      }
    }
    loadProducts();
  }, [products]);

  return (
    <Box bg="bg" safeArea h="100%">
      <My_header title="Verlauf" Icon={<History width="6%" mr="5%" />} />

      <Box w="100%" alignItems="center" justifyContent="center" mb="10" mt="10">
        <My_new_table
          header_columns={headerC}
          body_columns={bodyColumns}
          headerRowStyle={headerRowStyle}
          bgs={['table.fst', 'table.scd']}
        />
      </Box>
    </Box>
  );
}
