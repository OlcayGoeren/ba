import React, { useState, useEffect } from 'react';
import { NativeBaseProvider, Box, extendTheme, Center, useTheme, useToken, VStack, Heading, HStack, Container, Flex, Text, StatusBar, ScrollView } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Guidethrough_welcome from './views/Guidethrough_welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Guidethrough_Validate from './views/Guidethrough_Validate';
import Guidethrough_History from './views/Guidethrough_History';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import Homestack from './views/Homestack';
import Home from './assets/Home';
import Camera from './assets/Camera';
import History from './assets/History';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRScanner from './views/QRScanner';

const STORAGE_KEY = 'optin'

export default function App() {
  const [optin, setOptin] = useState(false)
  const [read, setRead] = useState(false)

  const readData = async () => {
    try {
      const optin2 = await AsyncStorage.getItem(STORAGE_KEY)

      if (optin2 !== null) {
        setOptin(JSON.parse(optin2))
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }


  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value.toString())
      setOptin(value)
      alert('Data successfully saved')
    } catch (e) {
      alert('Failed to save the data to the storage')
    }
  }

  useEffect(() => {
    readData().then(() => setRead(true))
  }, [])

  const myColorTheme = {
    main: {
      bg: '#142D37',
      text_light: '#fffff',
      text_gray: '#D3D6D8',
      accent: '#F89132',
      stroke: '#424E53',
      divider: "#6A6A6A",
      table: {
        header: '#0B171C',
        fst: '#193540',
        scd: '#1E3E4A'
      }
    }
  }
  const Stack = createNativeStackNavigator();
  const theme = extendTheme(
    {
      colors: myColorTheme,
      shadows: {
        "custom": {
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        }
      },
      components: {
        Button: {
          baseStyle: {
            borderRadius: "10",
            _text: {
              fontWeight: "extrabold"
            },
          },
        }
      }
    })
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {read ? !optin ?
          (
            <Stack.Navigator initialRouteName="Guidethrough_welcome">
              <Stack.Screen options={{ headerShown: false }} name="Guidethrough_welcome" component={Guidethrough_welcome} />
              <Stack.Screen options={{ headerShown: false }} name="Guidethrough_Validate" component={Guidethrough_Validate} />
              <Stack.Screen options={{ headerShown: false }} name="Guidethrough_History" component={Guidethrough_History}
                initialParams={{ changeLogin: saveData }}
              />

            </Stack.Navigator>

          ) : (
            <Tab.Navigator screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#F89132',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                backgroundColor: "#142D37"
              },

            }
            }>
              <Tab.Screen
                name="Start" component={Homestack}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    return <Home color={color} width={size} />
                  }
                }}
              />
              <Tab.Screen
                name="Kamera" component={QRScanner}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    return <Camera size={size} color={color} />
                  },
                  tabBarStyle: {
                    display: "none"
                  },
                  unmountOnBlur: true
                }}
              />
              <Tab.Screen
                name="Verlauf" component={Homestack}
                options={{
                  tabBarIcon: ({ size, color }) => {
                    return <History size={size} color={color} />
                  },
                }}
              />
            </Tab.Navigator>
          ) : <></>}
      </NativeBaseProvider>
    </NavigationContainer >
  );
}
