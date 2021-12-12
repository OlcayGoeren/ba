



import { Box } from "native-base";
import React, { useState } from "react";
import { SvgXml } from 'react-native-svg';




export default function Gallery(props) {
  const [iconColor, setIconColor] = useState(props.color)
  const xml = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23 0H5C3.67392 0 2.40215 0.526784 1.46447 1.46447C0.526784 2.40215 0 3.67392 0 5V23C0 24.3261 0.526784 25.5979 1.46447 26.5355C2.40215 27.4732 3.67392 28 5 28H23C24.3261 28 25.5979 27.4732 26.5355 26.5355C27.4732 25.5979 28 24.3261 28 23V5C28 3.67392 27.4732 2.40215 26.5355 1.46447C25.5979 0.526784 24.3261 0 23 0ZM5 2H23C23.7956 2 24.5587 2.31607 25.1213 2.87868C25.6839 3.44129 26 4.20435 26 5V10.59L24.12 8.71C23.5575 8.1482 22.795 7.83264 22 7.83264C21.205 7.83264 20.4425 8.1482 19.88 8.71L11.93 16.71L8.93 14.29C8.39397 13.8513 7.72265 13.6116 7.03 13.6116C6.33735 13.6116 5.66603 13.8513 5.13 14.29L2 16.86V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2ZM23 26H5C4.20435 26 3.44129 25.6839 2.87868 25.1213C2.31607 24.5587 2 23.7956 2 23V19.47L6.38 15.81C6.55893 15.6629 6.78338 15.5825 7.015 15.5825C7.24663 15.5825 7.47107 15.6629 7.65 15.81L11.38 18.81C11.5716 18.9637 11.8131 19.0415 12.0583 19.0286C12.3036 19.0157 12.5356 18.913 12.71 18.74L21.29 10.15C21.383 10.0563 21.4936 9.98188 21.6154 9.93111C21.7373 9.88034 21.868 9.8542 22 9.8542C22.132 9.8542 22.2627 9.88034 22.3846 9.93111C22.5064 9.98188 22.617 10.0563 22.71 10.15L26 13.41V23C26 23.7956 25.6839 24.5587 25.1213 25.1213C24.5587 25.6839 23.7956 26 23 26Z" fill="${props.color}"/>
  <path d="M8 11C8.59334 11 9.17336 10.8241 9.66671 10.4944C10.1601 10.1648 10.5446 9.69623 10.7716 9.14805C10.9987 8.59987 11.0581 7.99667 10.9424 7.41473C10.8266 6.83279 10.5409 6.29824 10.1213 5.87868C9.70176 5.45912 9.16721 5.1734 8.58527 5.05765C8.00333 4.94189 7.40013 5.0013 6.85195 5.22836C6.30377 5.45543 5.83524 5.83994 5.50559 6.33329C5.17595 6.82664 5 7.40666 5 8C5 8.79565 5.31607 9.55871 5.87868 10.1213C6.44129 10.6839 7.20435 11 8 11ZM8 7C8.19778 7 8.39112 7.05865 8.55557 7.16853C8.72002 7.27841 8.84819 7.43459 8.92388 7.61732C8.99957 7.80004 9.01937 8.00111 8.98079 8.19509C8.9422 8.38907 8.84696 8.56726 8.70711 8.70711C8.56725 8.84696 8.38907 8.9422 8.19509 8.98079C8.00111 9.01937 7.80004 8.99957 7.61732 8.92388C7.43459 8.84819 7.27841 8.72002 7.16853 8.55557C7.05865 8.39112 7 8.19778 7 8C7 7.73478 7.10536 7.48043 7.29289 7.29289C7.48043 7.10536 7.73478 7 8 7Z" fill="${props.color}"/>
  </svg>`
  return (
    <Box {...props}>
      <SvgXml xml={xml} width="100%" height="100%" />
    </Box>
  )
}


