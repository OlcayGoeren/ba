import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QRScanner from '../../views/QRScanner';
import History_Stack from '../stack/History_Stack';
import Home from '../../assets/Home';
import Camera from '../../assets/Camera';
import History from '../../assets/History';
import { useTheme } from 'native-base';
import HomeView from '../../views/HomeView';

export default function MainTabNavigation() {
  const Tab = createBottomTabNavigator();
  const theme = useTheme().colors
  const accent = theme.accent
  const gray = theme.gray[500]
  const bg = theme.bg

  return (
    <>
      <Tab.Navigator
      initialRouteName='HomeView'
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: accent,
          tabBarInactiveTintColor: gray,
          tabBarStyle: {
            backgroundColor: bg,
          },
        }}>
        <Tab.Screen
          name="Start"
          component={HomeView}
          options={{
            headerShown:false,
            tabBarIcon: ({size, color}) => {
              return <Home color={color} width={size} />;
            },
            
          }}
        />
        <Tab.Screen
          name="Kamera"
          component={QRScanner}
          options={{
            tabBarIcon: ({size, color}) => {
              return <Camera size={size} color={color} />;
            },
            tabBarStyle: {
              display: 'none',
            },
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name="Verlauf"
          component={History_Stack}
          options={{
            tabBarIcon: ({size, color}) => {
              return <History size={size} color={color} />;
            },
          }}
        />
        
      </Tab.Navigator>
    </>
  );
}
