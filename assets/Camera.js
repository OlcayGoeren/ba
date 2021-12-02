

import { Box } from "native-base";
import React, { useState } from "react";
import { SvgXml } from 'react-native-svg';




export default function Camera(props) {
  const [iconColor, setIconColor] = useState(props.color)
  const xml = `<svg width="39" height="37" viewBox="0 0 39 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_39_681)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 26.7222C16.2691 26.7222 13.65 23.9613 13.65 20.5556C13.65 17.1498 16.2691 14.3889 19.5 14.3889C22.7309 14.3889 25.35 17.1498 25.35 20.5556C25.35 23.9613 22.7309 26.7222 19.5 26.7222ZM35.1 4.11111C37.245 4.11111 39 5.96111 39 8.22222V32.8889C39 35.15 37.245 37 35.1 37H3.9C1.755 37 0 35.15 0 32.8889V8.22222C0 5.96111 1.755 4.11111 3.9 4.11111H10.0815L12.48 1.33611C13.221 0.493334 14.274 0 15.366 0H23.634C24.726 0 25.779 0.493334 26.5005 1.33611L28.9185 4.11111H35.1ZM19.5 30.8333C24.882 30.8333 29.25 26.2289 29.25 20.5556C29.25 14.8822 24.882 10.2778 19.5 10.2778C14.118 10.2778 9.75 14.8822 9.75 20.5556C9.75 26.2289 14.118 30.8333 19.5 30.8333Z" fill="${iconColor}"/>
</g>
<defs>
<clipPath id="clip0_39_681">
<rect width="39" height="37" fill="white"/>
</clipPath>
</defs>
</svg>`

  return (

    <Box {...props}>
      <SvgXml xml={xml} width="100%" height="100%" />
    </Box>

  )
}


