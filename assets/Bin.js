import { Box } from "native-base";
import React from "react";
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.88 5L5.11 24H18.89L21.12 5H2.88ZM17.11 22H6.89L5.12 7H18.88L17.11 22Z" fill="#F89132"/>
<path d="M21 2H15V1H13V0H11V1H9V2H3V4H21V2Z" fill="#F89132"/>
<path d="M10.23 17.66L12 15.89L13.77 17.66L15.18 16.24L13.41 14.47L15.18 12.71L13.77 11.29L12 13.06L10.23 11.29L8.82001 12.71L10.59 14.47L8.82001 16.24L10.23 17.66Z" fill="#F89132"/>
</svg>

`
export default function Share (props) {
    return (
      <Box {...props}>
        <SvgXml xml={xml} width="100%" height="100%" />
        </Box>
      )
}