import { Box, useTheme } from "native-base";
import React, { useState } from "react";
import { SvgXml } from 'react-native-svg';




export default function Home(props) {
  const theme = useTheme()
  const [iconColor, setIconColor] = useState(props.color)
  const xml = `<svg width="26" height="23" viewBox="0 0 26 23" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_39_696)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4 21.6471V14.8824H15.6V21.6471C15.6 22.3912 16.185 23 16.9 23H20.8C21.515 23 22.1 22.3912 22.1 21.6471V12.1765H24.31C24.908 12.1765 25.194 11.4053 24.739 10.9994L13.871 0.811797C13.377 0.351797 12.623 0.351797 12.129 0.811797L1.26098 10.9994C0.818978 11.4053 1.09198 12.1765 1.68998 12.1765H3.89998V21.6471C3.89998 22.3912 4.48498 23 5.19998 23H9.09998C9.81498 23 10.4 22.3912 10.4 21.6471Z" fill="${iconColor}"/>
</g>
<defs>
<clipPath id="clip0_39_696">
<rect width="26" height="23" fill="white"/>
</clipPath>
</defs>
</svg>
`

  return (
    <Box {...props}>
      <SvgXml xml={xml} width="100%" height="100%" />
    </Box>
  )
}


