import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

const STORAGE_KEY = 'Products';

const qrSlice = (set, get) => ({
  products: null,
  readProducts: async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      if (value != null) {
        const json = JSON.parse(value);
        set(prev => ({products: json}));
      }
    } catch (e) {
      console.log(e);
      alert('Failed to fetch the data from storageee');
    }
  },
  saveProducts: async value => {
    try {
      const productsArray = JSON.parse(await AsyncStorage.getItem(STORAGE_KEY));

      if (productsArray != null) {
        value._id = uuid.v4();
        productsArray.push(value);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(productsArray));
        set(prev => ({products: productsArray}));
      } else {
        value._id = uuid.v4();
        const ary = [];
        ary.push(value);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ary));
        set(prev => ({products: ary}));
      }
    } catch (e) {
      console.log('saveData ERROR');
      console.log(e);
      alert('Failed to save the data to the storage');
    }
  },
  removeProducts: async (idx) => {
    try {
        let ary = get().products;
        ary.splice(idx, 1);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(ary));
        set(prev => ( {products: prev.products.filter((ele, idx) => idx === idx)} ));
      } catch (e) {
        console.log(e);
        alert('Failed to save the data to the storage');
      }
  }
});

export default qrSlice