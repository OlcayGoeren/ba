import React from 'react';
import {
  HStack,
  ScrollView,
} from 'native-base';

export default function My_new_table({
  header_columns,
  body_columns,
  headerRowStyle,
  bgs,
}) {
  console.log(body_columns.length);
  const body = body_columns.map((cols, idx) => {
    return (
      <HStack
        key={idx}
        bg={idx % 2 == 0 ? bgs[0] : bgs[1]}
        borderBottomRadius={idx === body_columns.length - 1 ? 10 : 0}>
        {cols.map((col, idx) => {
          return col;
        })}
      </HStack>
    );
  });

  return (
    <ScrollView w="95%">
      <HStack {...headerRowStyle}>{header_columns}</HStack>
      {body}
    </ScrollView>
  );
}
