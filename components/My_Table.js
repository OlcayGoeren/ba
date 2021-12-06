import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
    ArrowBackIcon, Box, Button, Center, Heading, HStack, Text, useTheme, Actionsheet,
    useDisclose,
    ScrollView,
} from 'native-base';





export default function My_Table({ tableData, cellHeaders, cellBodyStyles, headerStyle }) {
    const { hstack: headerHStack, box: headerBox, text: headerText } = headerStyle
    const { hstack: cellHStack, box: cellBox, text: cellText } = cellBodyStyles

    console.log(tableData)
    return (
        <Box w="95%" h="100%">
            <ScrollView>
            <HStack {...headerHStack}
            >
                {cellHeaders.map((header, idx) => {
                    return <Box key={idx} {...headerBox} >
                        <Text {...headerText} >{header}</Text>
                    </Box>
                })}
            </HStack>
            {
                tableData.map((ary, idx) => {
                    return <HStack
                        key={idx}
                        {...cellHStack}
                        bg={idx % 2 == 0 ? cellHStack.bg[0] : cellHStack.bg[1]}
                        borderBottomRadius={idx === Object.entries(tableData).length - 1 ? 10 : 0}
                    >
                        {ary.map((ele, idx) => {
                            return <Box key={idx} {...cellBox} borderColor="black" borderRightWidth={idx % 2 == 0 ? "1" : "0"} >
                                <Text {...cellText}
                                >{ele}
                                </Text>
                            </Box>

                        })}
                    </HStack>
                })
            }
            </ScrollView>
        </Box>
    );
}
