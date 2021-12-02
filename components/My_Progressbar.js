import { Button, Center, HStack } from "native-base"
import React, { useState } from 'react';


export default ProgressBar = ({ active, w, h }) => {
  return (
    <>
      <HStack space={3} alignItems="center" marginBottom="3">
        <Center borderWidth="1" w={w | "13"} h={h | "13"} bg={active == 0 | active == 1 | active == 2 ? "main.accent" : "main.bg"} borderColor="main.accent" rounded="2xl" shadow={3} />
        <Center borderWidth="1" w={w | "13"} h={h | "13"} bg={active == 1 | active == 2 ? "main.accent" : "main.bg"} borderColor="main.accent" rounded="2xl" shadow={3} />
        <Center borderWidth="1" bg={active == 2 ? "main.accent" : "main.bg"} borderColor="main.accent" w={w | "13"} h={h | "13"} rounded="2xl" shadow={3} />
      </HStack>
    </>
  )
}