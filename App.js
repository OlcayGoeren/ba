import React, {useState, useEffect} from 'react';
import {NativeBaseProvider, extendTheme} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import useStore from './store/useStore';
import MainTabNavigation from './navigation/tab/MainTabNavigation';
import customTheme from './style/customTheme';

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
          <MainTabNavigation/>
        ) 
        : (
          <></>
        )}
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
