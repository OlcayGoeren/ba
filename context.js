import React, {useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const DataContext = React.createContext();

export function DataProvider({children}) {
  const [data, setData] = useState([]);
  const [completedTutorial, setCompletedTutorial ] = useState(null)

  const readData = async (STORAGE_KEY, setter) => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      setter(JSON.parse(value));

      const json = JSON.parse(value);
      json.forEach(ele => {
        console.log(ele._id);
      });
    } catch (e) {
      console.log('e');
      alert('Failed to fetch the data from storageee');
    }
  };

  const saveData = async (STORAGE_KEY, value) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const found = keys.find(ele => ele === STORAGE_KEY);
      value._id = uuid.v4();
      if (found === STORAGE_KEY) {
        let read = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));
        read.push(value);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(read));
        setData(read);
      } else {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([value]));
        alert('gespeichert');
      }
    } catch (e) {
      console.log('saveData ERROR');
      console.log(e);
      alert('Failed to save the data to the storage');
    }
  };

  const removeValue = async (STORAGE_KEY, idx) => {
    try {
      let ary = data;
      ary.splice(idx, 1);
      setData(data.filter((ele, idx) => idx === idx));
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ary));
    } catch (e) {
      console.log('removeValue ERROR');
      console.log(e);
      alert('Failed to save the data to the storage');
    }
  };

  useEffect(() => {
    readData("Products", setData);
  }, []);

  const idk = (set, get) => {
  
  }


  return (
    <DataContext.Provider value={{data, saveData, removeValue}}>
      {children}
    </DataContext.Provider>
  );
}
