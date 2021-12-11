import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Guidethrough_welcome from '../views/Guidethrough_welcome';
import Guidethrough_Validate from '../views/Guidethrough_Validate';
import Guidethrough_History from '../views/Guidethrough_History';



export default function GuidethroughNavigation() {

  const Stack = createNativeStackNavigator();
  return (
    <>
        <Stack.Navigator initialRouteName="Guidethrough_welcome">
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
            initialParams={{changeLogin: saveData}}
          />
        </Stack.Navigator>
    </>
  );
}
