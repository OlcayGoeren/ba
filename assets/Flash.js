import React from "react";
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="16" height="32" viewBox="0 0 16 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 13.6H8.48L13.6 0H4.8L0 16.8H6.88L3.2 32L16 13.6Z" fill="#FFC107"/>
</svg>`


export default function Flash () {
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
      )
}


