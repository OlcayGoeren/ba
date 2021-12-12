import {Box, Button, Card, Center, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import {checkMultiple, PERMISSIONS, request} from 'react-native-permissions';
import Gallery from '../assets/Gallery';

export default MY_Req_Gallery_Button = (props) => {
  useEffect(() => {
    switch (Platform.OS) {
      case 'ios':
        checkMultiple([
          PERMISSIONS.IOS.CAMERA,
          PERMISSIONS.IOS.PHOTO_LIBRARY,
        ]).then(statuses => {
          const camera_permission = statuses[PERMISSIONS.IOS.CAMERA];
          const photoLibarry_permission =
            statuses[PERMISSIONS.IOS.PHOTO_LIBRARY];
          if (camera_permission === 'denied') 
            request(PERMISSIONS.IOS.CAMERA).then(result =>
              console.log('Camera Permission granted'),
            );

          if (photoLibarry_permission === 'denied')
            request(PERMISSIONS.IOS.PHOTO_LIBRARY).then(result =>
              console.log('Photo-Libarry Permission granted'),
            );
        });
        break;
      case 'android':
        checkMultiple([
          PERMISSIONS.ANDROID.CAMERA,
          PERMISSIONS.ANDROID.PHOTO_LIBRARY,
        ]).then(statuses => {
          const camera_permission = statuses[PERMISSIONS.ANDROID.CAMERA];
          const photoLibarry_permission =
            statuses[PERMISSIONS.ANDROID.PHOTO_LIBRARY];
          if (camera_permission === 'denied')
            request(PERMISSIONS.ANDROID.CAMERA).then(result =>
              console.log('Camera Permission granted'),
            );

          if (photoLibarry_permission === 'denied')
            request(PERMISSIONS.ANDROID.PHOTO_LIBRARY).then(result =>
              console.log('Photo-Libarry Permission granted'),
            );
        });
        break;
    }
  }, []);

  return (
    <Button
    leftIcon={<Gallery w="20px" h="20px" color="orange"  />}
      bg="gray.900"
      borderColor="stroke"
      borderWidth="1"
      shadow="custom"
      _pressed={{
        backgroundColor: 'black',
      }}
      onPress={props.onImageLibraryPress}>
      Gallerie
    </Button>
  );
};
