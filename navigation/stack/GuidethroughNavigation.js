import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Guidethrough_welcome from '../../views/guidethrough/Guidethrough_welcome';
import Guidethrough_Validate from '../../views/guidethrough/Guidethrough_Validate';
import Guidethrough_History from '../../views/guidethrough/Guidethrough_History';
import Homestack from '../../views/HomeView';
import useStore from '../../store/useStore';

export default function GuidethroughNavigation() {
  const Stack = createNativeStackNavigator();

  const {optin} = useStore();

  return (
    <>
      <Stack.Navigator initialRouteName= {optin? "Start" : "Guidethrough_welcome"}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Guidethrough_welcome"
          component={Guidethrough_welcome}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Guidethrough_Validate"
          component={Guidethrough_Validate}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Guidethrough_History"
          component={Guidethrough_History}
        />
        <Stack.Screen
        component={Homestack}
          name="Start"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}
