import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, extendTheme, Stack} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import useStore from './store/useStore';
import MainTabNavigation from './navigation/tab/MainTabNavigation';
import customTheme from './style/customTheme';
import GuidethroughNavigation from './navigation/stack/GuidethroughNavigation';

export default function App() {
  const {optin, readOptin} = useStore();
  const [read, setRead] = useState(false);

  useEffect(() => {
    readOptin().then(() => setRead(true));
  }, []);
  
  const theme = extendTheme({
    ...customTheme
  });

  return (
    <NavigationContainer>
      <NativeBaseProvider  theme={theme}>
        {read ? (
          // <MainTabNavigation/>
          <GuidethroughNavigation/>
        ) 
        : (
          <></>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
