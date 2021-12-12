import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import History_View from '../../views/history/History_View';
import History_Detail_View from '../../views/history/History_Detail_View';


export default function History_Stack() {
  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="History_View">
        <Stack.Screen
          options={{headerShown: false, unmountOnBlur: true}}
          name="History_View"
          component={History_View}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="History_Detail_View"
          component={History_Detail_View}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
}
