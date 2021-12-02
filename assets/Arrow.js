



import React from "react";
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5 18L7.5 18" stroke="#D3D6D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 28.5L7.5 18L18 7.5" stroke="#D3D6D8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`


export default function Arrow () {
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
      )
}


