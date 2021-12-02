import React from "react";
import { SvgXml } from 'react-native-svg';

const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7 10.1999L15.1 4.19995C14.6 3.69995 14 4.19995 14 4.99995V7.99995C9.30003 7.99995 5.30003 10.8999 3.40003 14.7999C2.70003 16.0999 2.30003 17.4999 2.00003 18.8999C1.80003 19.8999 3.30003 20.3999 3.90003 19.4999C6.10003 15.9999 9.80003 13.6999 14 13.6999V16.9999C14 17.7999 14.6 18.2999 15.1 17.7999L21.7 11.7999C22.1 11.3999 22.1 10.5999 21.7 10.1999Z" fill="#F89132"/>
</svg>`


export default function Share () {
    return (
        <SvgXml xml={xml} width="100%" height="100%" />
      )
}



